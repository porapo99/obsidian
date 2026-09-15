---
{"제목":"hooks","날짜":"2026-08-28","tags":["AI"],"dg-publish":true,"permalink":"/공부/AI/claude/hooks/","dgPassFrontmatter":true,"created":"2026-08-28T11:19:09.619+09:00","updated":"2026-08-28T11:30:42.650+09:00","dg-note-properties":{"제목":"hooks","날짜":"2026-08-28","tags":["AI"]}}
---

/hooks는 AI 실행에 대한 미들웨어라고 생각하면 편합니다.

hook을 사용하게되면 필수적으로 진행해야하는 것들을 실행 시킬 수 있기때문에 테스트케이스 생성 , 보안 관련 , 회사 내규에 따른 규칙 등을 실행시켜 이를 자동화 할 수 있습니다.

실제로 쓰는 hook을 사용한 예시중에 caveman이라는 skill을 사용 중입니다. 이는 모든 출력의 단어수를 줄여 토큰을 아끼는 스킬입니다.
