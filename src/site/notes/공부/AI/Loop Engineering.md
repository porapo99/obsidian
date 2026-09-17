---
{"제목":"Loop Engineering","날짜":"2026-09-17","tags":null,"dg-publish":true,"permalink":"/공부/AI/Loop Engineering/","dgPassFrontmatter":true,"created":"2026-09-17T13:50:16.192+09:00","updated":"2026-09-17T13:50:16.192+09:00","dg-note-properties":{"제목":"Loop Engineering","날짜":"2026-09-17","tags":null}}
---


Loop Engineering은 AI 에이전트가 목표를 달성할 때까지 실행(Act) → 관찰(Observe) → 판단(Reason) → 검증(Verify)을 반복하는 워크플로우를 설계하는 실천법입니다. 제어이론의 feedback loop에서 온 개념이라 한 번 실행하고 끝나는 게 아니라 결과를 보고 다시 돌리는 구조가 기본입니다.

먼저 이 개념이 어디서 왔는지 보면 Prompt Engineering → Context Engineering → Harness Engineering → Loop Engineering 순서로 진화했습니다. 각 단계는 이전 단계를 버리는 게 아니라 포함해서 확장하는 관계라 Loop Engineering을 한다고 해서 프롬프트나 컨텍스트 설계가 덜 중요해지는 건 아닙니다.

구성요소는 여섯 가지입니다. `Goal`은 측정 가능한 성공 조건이고 `Loop`는 반복 구조, `Routines`는 재사용 가능한 행동 모듈입니다. `Termination`은 명시적인 종료 조건, `Verification`은 객관적인 검증, `State`는 반복 사이에 유지되는 persistent memory입니다.

이 중에서 성패를 가르는 건 `Verification`입니다. 에이전트가 자기 결과물을 스스로 채점하는 self-grading은 "됐다"고 선언하면 그냥 끝나버리기 때문에 위험합니다. 그래서 만드는 쪽(Maker)과 검사하는 쪽(Checker)을 분리하고 그 위에 테스트 통과처럼 사람 판단이 안 들어가는 Deterministic gate를 한 번 더 두는 2단계 검증을 권장합니다.

원칙으로 정리하면 다섯 가지입니다. 측정 가능한 goal을 세우고, iteration cap을 걸고, 생성과 평가를 분리하고, state를 persistent하게 유지하고, worktree로 병렬화하는 것입니다.

리스크도 있습니다. cap 없이 돌리면 같은 에러를 반복하며 비용만 태우는 Runaway loop(spinning)에 빠지고 반대로 검증이 약하면 다 안 됐는데 완료라고 선언하는 조기 종료(가짜 완료)가 생깁니다. 종료 조건 자체를 외부 입력으로 오염시켜서 루프를 멈추거나 계속 돌게 만드는 termination poisoning(LoopTrap) 공격도 있습니다.

Claude Code에서 이 원칙을 구현한 구체적인 사례는 Ralph Loop입니다. Ralph Loop 노트에 따로 정리해뒀습니다.
