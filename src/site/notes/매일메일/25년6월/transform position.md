---
{"제목":"transform position","날짜":"2025-06-12","tags":["매일메일"],"dg-publish":true,"permalink":"/매일메일/25년6월/transform position/","dgPassFrontmatter":true,"created":"2025-06-13T01:27:30.952+09:00","updated":"2025-06-15T22:48:05.850+09:00"}
---

## ❓질문

위치를 동적으로 변경할 때 css 속성 중 transform과 position 중 어떤 것을 선호하시나요?

---
## 💡 조사하기전 내가 알고 있던 내용

처음 생각해봄. 보통 transform만 사용해서 position의 정확한 사용방법에 대해서 몰랐습니다.

---
## 🏫 정리한 내용

`transform`을 선호하는 이유는 브라우저의 `composite` 단계에서 실행됩니다. 따라서 reflow나 repaint를 유발하지 않아 성능 상 이점이 있습니다.

반면 `position` 관련 속성을 이용한 위치 변경은 reflow, repaint를 유발합니다. 예를 들어 top, left등의 속성을 변경하면 브라우저는 주변 요소들의 위치를 다시 계산하는 과정부터 다시 수행하며, 이는 성능 부하를 높입니다.

그렇다면 `position`은 사용하지않나요? 라는 질문에는 레이아웃의 구조를 잡거나 부모를 기준으로 위치를 조정할 때에는 `position`을 사용하게 됩니다. `transform`은 시각적인 위치만 변경할 뿐 실제 문서 흐름과는 무관하게 동작하기 때문에, 문서 흐름에 따라 조정되는 경우에는 사용할 수 없기 때문입니다.