---
{"제목":"hooks","날짜":"2026-09-15","tags":["AI"],"dg-publish":true,"permalink":"/공부/AI/claude/hooks/","dgPassFrontmatter":true,"created":"2026-08-28T11:19:09.619+09:00","updated":"2026-09-15T11:09:38.384+09:00","dg-note-properties":{"제목":"hooks","날짜":"2026-09-15","tags":["AI"]}}
---

/hooks는 AI 실행에 대한 미들웨어라고 생각하면 편합니다.

claude가 스스로 판단해서 실행하는 게 아니라, 특정 시점에 무조건 실행되는 셸 명령입니다. 그래서 "이 작업은 반드시 해야 한다"는 규칙을 강제할 때 씁니다. 판단이 필요한 애매한 경우는 hook 대신 스킬을 쓰는 게 맞습니다.

이벤트는 꽤 많은데, 자주 쓰는 것 위주로 정리하면 이렇습니다.

1. PreToolUse: 도구가 실행되기 직전. 여기서 막으면(exit 2) 아예 실행이 안 됨.
2. PostToolUse: 도구 실행이 성공한 직후. 이미 실행된 다음이라 되돌릴 순 없음.
3. UserPromptSubmit: 프롬프트를 입력하고 claude가 처리하기 전.
4. SessionStart: 세션이 시작하거나 재개될 때.
5. Stop: claude가 응답을 끝냈을 때.
6. Notification: claude가 입력을 기다리는 것 같은 알림을 보낼 때.

설정은 `settings.json`에 `hooks` 블록을 추가하는 식입니다. 이벤트 이름이 키가 되고, `matcher`로 대상을 좁힙니다(비워두면 전부 적용).

```json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Edit|Write",
        "hooks": [
          { "type": "command", "command": "jq -r '.tool_input.file_path' | xargs npx prettier --write" }
        ]
      }
    ]
  }
}
```

hook은 stdin으로 이벤트 정보를 JSON으로 받고, exit code로 결과를 알립니다.

1. exit 0: 이의 없음. PreToolUse라면 평소대로 권한 절차를 그대로 밟음.
2. exit 2: 차단. stderr에 적은 이유가 claude에게 피드백으로 전달됨.
3. 그 외: stdout에 JSON을 찍으면 그 내용대로 처리됨(더 세밀한 제어가 필요할 때).

설정 파일을 어디에 두느냐로 적용 범위가 갈립니다.

1. `~/.claude/settings.json`: 내 모든 프로젝트.
2. `.claude/settings.json`: 이 프로젝트 한정, 깃에 커밋 가능.
3. `.claude/settings.local.json`: 이 프로젝트 한정, 개인용이라 깃에 안 올라감.

실제로 쓰는 hook 예시중에 caveman이라는 skill을 사용 중입니다. 이는 모든 출력의 단어수를 줄여 토큰을 아끼는 스킬입니다. 이 외에도 파일 수정 후 자동 포맷팅(PostToolUse), `.env` 같은 파일 수정 차단(PreToolUse), 세션 시작 시 최근 커밋 로그 주입(SessionStart) 같은 걸 많이 씁니다.
