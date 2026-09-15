---
{"제목":"MCP","날짜":"2026-09-15","tags":["AI"],"dg-publish":true,"permalink":"/공부/AI/claude/MCP/","dgPassFrontmatter":true,"created":"2026-09-02T14:26:30.831+09:00","updated":"2026-09-15T11:09:28.934+09:00","dg-note-properties":{"제목":"MCP","날짜":"2026-09-15","tags":["AI"]}}
---

claude code가 외부 도구, 데이터와 통신하도록 돕는 프로토콜입니다.

AI 모델 자체는 텍스트만 주고받을 수 있는데, 깃허브 이슈를 읽거나 데이터베이스를 조회하거나 노션 페이지를 수정하는 것처럼 외부 시스템에 접근해야 하는 순간이 생깁니다. 예전에는 이런 연동을 도구마다 각자의 방식으로 구현해야 했는데, 이걸 하나의 규격으로 표준화한 게 MCP입니다.

구조는 호스트 안에 클라이언트가 있고, 클라이언트가 서버와 일대일로 붙는 형태입니다.

1. MCP 호스트: 데이터에 접근하기 위해 MCP를 사용하는 AI 애플리케이션 자체(claude code 같은 것).
2. MCP 클라이언트: 호스트 내부에서 서버 하나당 하나씩 연결을 유지하는 시스템.
3. MCP 서버: 컨텍스트·도구·프롬프트 같은 기능을 표준화된 프로토콜로 노출하는 프로그램.
4. 로컬 데이터 소스: 서버가 접근하는 로컬 파일, 데이터베이스, 서비스.
5. 원격 서비스: 서버가 기능을 확장하기 위해 붙는 외부 API.

서버가 클라이언트와 통신하는 방식(transport)은 세 가지입니다.

1. stdio: 로컬 프로세스로 띄우는 방식. 파일시스템처럼 로컬 자원에 접근하는 서버에 씀.
2. http: 원격 서버용. OAuth 인증을 지원하고 지금 권장되는 방식.
3. sse: http 이전에 쓰던 스트리밍 방식인데 지금은 http로 대체되는 추세.

서버 추가는 명령어로 합니다.

```bash
claude mcp add --transport stdio myserver -- npx -y some-mcp-server
claude mcp add --transport http github https://api.githubcopilot.com/mcp/ --header "Authorization: Bearer TOKEN"
```

등록 범위(scope)도 세 가지로 나뉩니다.

1. local: 기본값. 나만 쓰고 어디에도 공유 안 됨.
2. project: `.mcp.json`에 저장돼서 깃으로 팀과 공유됨.
3. user: 내 계정의 모든 프로젝트에서 씀.

프로젝트에서 여럿이 같이 쓰려면 루트에 `.mcp.json`을 두면 됩니다.

```json
{
  "mcpServers": {
    "github": {
      "type": "http",
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": { "Authorization": "Bearer ${GITHUB_TOKEN}" }
    }
  }
}
```

인증은 고정된 Bearer 토큰을 헤더로 박아둘 수도 있고, OAuth를 지원하는 서버는 `/mcp` 명령으로 브라우저 로그인만 하면 됩니다.

서버 상태는 `claude mcp list`나 세션 안에서 `/mcp`로 확인할 수 있고, connected / needs authentication / pending approval 같은 상태로 보여줍니다.
