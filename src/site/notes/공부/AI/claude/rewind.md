---
{"제목":"rewind","날짜":"2026-08-11","tags":["AI"],"dg-publish":true,"permalink":"/공부/AI/claude/rewind/","dgPassFrontmatter":true,"created":"2026-08-11T15:19:02.077+09:00","updated":"2026-08-28T11:25:09.444+09:00","dg-note-properties":{"제목":"rewind","날짜":"2026-08-11","tags":["AI"]}}
---

`/rewind` 컨텍스트를 어떠한 히스토리 시점으로 되돌리고 그 시점 이후에 있는 모든 히스토리 컨텍스트를 제거합니다 코드도 그 이전으로 바뀌게 됩니다.

context = memory + instrctions + files + conversation history인데
이 콘텍스트가 이상하게 갔을때 , 다시 방향을 잡고 싶을때 새로운 세션을 시작하는것이 아닌 이전 히스토리로 돌아가서 방향을 다시 잡을 수 있게 해주는 명령어입니다.


