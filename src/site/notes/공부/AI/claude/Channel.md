---
{"제목":"Channel","날짜":"2026-09-15","tags":["AI"],"dg-publish":true,"permalink":"/공부/AI/claude/Channel/","dgPassFrontmatter":true,"created":"2026-09-15T11:09:25.826+09:00","updated":"2026-09-15T11:09:48.650+09:00","dg-note-properties":{"제목":"Channel","날짜":"2026-09-15","tags":["AI"]}}
---

Channel은 실행 중인 Claude Code 세션에 외부 시스템이 메시지를 push하는 기능입니다. 기존 request-response 방식이 아니라 event-driven 방식이라 이벤트를 Claude에 밀어넣는다고 생각하면 됩니다. 세션이 살아있는 동안 실시간으로 동작하고 새 세션을 만들거나 polling할 필요가 없습니다.

지원하는 채널은 Telegram, Discord, iMessage이고 MCP를 통해 커스텀 채널도 만들 수 있습니다. 플러그인 형태라 설치와 인증이 따로 필요합니다.

동작 방식은 이렇습니다.

1. 채널 플러그인을 설치합니다.
2. `--channels` 플래그로 Claude Code를 실행합니다.
3. 외부 시스템이 메시지를 보냅니다.
4. Claude가 처리한 뒤 응답합니다.

양방향 통신(chat bridge)을 지원해서 채팅, 알림, 웹훅 이벤트를 전부 다룰 수 있습니다.

보안은 발신자 allowlist로 승인된 사람만 메시지를 보낼 수 있게 막고 pairing 과정으로 인증합니다. access policy로 누가 상호작용할 수 있는지도 제어합니다.

CI/CD 알림을 바로 받거나, 폰에서 Claude랑 채팅하거나, 시스템 이벤트를 모니터링하다 즉시 반응하는 식으로 쓸 수 있습니다.

단 엔터프라이즈에서는 조직 단위로 기본 비활성화라 관리자가 켜야 하고 허용 플러그인도 제한할 수 있습니다.

가장 큰 특징은 Claude Code를 "도구"에서 "계속 돌아가는 반응형 자동화 에이전트"로 바꿔준다는 점입니다.
