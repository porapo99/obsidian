---
{"제목":"stale-while-revalidate","날짜":"2025-09-02","tags":["매일메일"],"dg-publish":true,"permalink":"/매일메일/25년9월/stale-while-revalidate/","dgPassFrontmatter":true,"created":"2025-09-02T23:22:33.673+09:00","updated":"2025-09-02T23:48:56.195+09:00"}
---

## ❓질문

stale-while-revalidate에 대해 설명해주세요.

---
## 💡 조사하기전 내가 알고 있던 내용

stale-while-revalidate는 캐싱 컨트롤과 관련된 설정입니다. 그러나 정확한 설명은 못하겠습니다.

---
## 🏫 정리한 내용

stale-while-revalidate는 Cache-control  헤더의 디렉티브입니다 
이는 오래된 캐싱 데이터를 먼저 보여주고 백그라운드에서 새로운 데이터를 가져와 갱신하는 설정이며 stale-while-revalidate=30라고 설정하면 앞서 캐싱된 데이터를 사용하고 그 후에는 30초동안 오래된 데이터를 사용하면서 백그라운드에서 새데이터를 가져와 갱신하는 방식을 사용한다는것입니다.

이 전략은 차후 SWR,RQ등 라이브러리에서 캐싱 무효화 전략에 큰 기여를 했다고 알고있습니다.

이러한 특징은 즉시성에 대한 강점을 들어내며 반대로 실시간성이 필요한 부분에는 오래된 데이터를 불러오고 난후에 신선한 정보를 가져오니 맞지않습니다.