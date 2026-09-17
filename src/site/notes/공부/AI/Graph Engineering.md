---
{"제목":"Graph Engineering","날짜":"2026-09-17","tags":null,"dg-publish":true,"permalink":"/공부/AI/Graph Engineering/","dgPassFrontmatter":true,"created":"2026-09-17T13:56:15.167+09:00","updated":"2026-09-17T13:57:15.944+09:00","dg-note-properties":{"제목":"Graph Engineering","날짜":"2026-09-17","tags":null}}
---


Graph Engineering은 agent, 도구, 사람을 node로 두고 허용된 전이를 edge로 삼아서 multi-agent 시스템의 topology 자체를 설계하는 실천법입니다. 조직도와 결재 라인을 코드로 옮기는 일이라고 보면 됩니다.

### 왜 필요한가

루프 하나로 agent를 돌리는 방식은 규모가 커지면 한계에 부딪힙니다.

- context가 고갈되고 한 프롬프트에 모든 역할을 못 담습니다
- 여러 루프가 서로 충돌합니다(속도 루프 vs 품질 루프)
- 전이가 모델 머릿속에 숨어있어서 디버깅 자체가 불가능합니다

그렇다면 역할을 명시적으로 분리하고 허용된 전이만 연결하고 검증관문과 사람개입을 구조에 박아넣어야 합니다. 이걸 하는 게 Graph Engineering입니다.

### Loop Engineering과의 관계

Loop Engineering은 node 안의 실행을 설계합니다. 반복, 검증, 종료조건이 여기 속합니다. Graph Engineering은 node 사이의 관계를 설계합니다. 누가 있고 뭘 맡고 어떻게 흐르는지가 여기 속합니다. 둘은 대체 관계가 아니라 합성 관계라 둘 다 있어야 합니다.

- 루프가 엉성한 그래프는 못 미더운 직원들로 만든 조직도와 같습니다
- 좋은 루프인데 topology가 우연인 그래프는 규모가 커지면 조정에 실패해 무너집니다

### 어떻게 구성되는가

6가지 요소로 짭니다.

- Node — agent, 함수, router, 사람
- Edge — 허용전이
- Router — 분기
- Gate — 검증관문
- Contract — 인수인계 규약
- Human Checkpoint — 사람 승인

이걸로 짜는 대표 패턴이 5개 있습니다. Pipeline, Fan-out, Supervisor(기본값), Debate, Swarm입니다.

### 뭘 조심해야 하는가

- 비용 — fan-out × 재시도 × 동시성은 곱셈으로 비용이 폭발합니다
- 미스매치 — 작업 성격에 안 맞는 topology를 쓰면 조정에 실패합니다
- 과잉설계 — 단순 작업엔 여전히 single agent가 낫습니다

### 이게 무슨 의미인가

엔지니어 역할이 직원 한 명(agent) 잘 훈련시키는 일에서 조직 전체를 프로그래밍하는 일로 옮겨가고 있다는 뜻입니다. 단 조직도가 좋다고 나쁜 직원(엉성한 loop)을 구하진 못합니다. loop 품질은 여전히 기본기고 graph는 그 위에 얹는 층입니다.
