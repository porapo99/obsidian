---
{"제목":"plugin","날짜":"2026-09-14","tags":["AI"],"dg-publish":true,"permalink":"/공부/AI/claude/plugin/","dgPassFrontmatter":true,"created":"2026-09-14T13:41:05.110+09:00","updated":"2026-09-15T11:02:19.326+09:00","dg-note-properties":{"제목":"plugin","날짜":"2026-09-14","tags":["AI"]}}
---

`plugin`은 슬래시 명령어, 스킬, MCP 설정을 한 패키지로 묶어서 배포하는 단위입니다.

먼저 셋의 역할이 다릅니다. 슬래시 명령어는 **무엇을 할지**를 정하는 워크플로우이고 스킬은 **어떻게 쓸지**를 정하는 문체나 규칙입니다. 플러그인은 이 둘에 MCP 설정까지 더해서 한 패키지로 만든 것입니다.

플러그인의 가장 큰 특징은 `.mcp.json`을 플러그인 안에 넣을 수 있다는 점입니다. 그래서 MCP 서버 연결 설정까지 명령어·스킬과 같이 배포됩니다.

폴더 구조는 아래와 같습니다.

```text
my-plugin/
├── .claude-plugin/plugin.json   ← 매니페스트만
├── commands/
├── skills/<name>/SKILL.md
├── .mcp.json                    ← 루트에
└── README.md
```

`.claude-plugin/` 안에는 `plugin.json` 매니페스트만 들어갑니다. `commands/`나 `skills/`를 `.claude-plugin/` 안에 넣는게 흔한 실수입니다.

테스트는 플러그인 폴더에서 `claude --plugin-dir .`로 하고 호출은 `/플러그인명:명령어` 형태로 네임스페이스가 붙습니다.
