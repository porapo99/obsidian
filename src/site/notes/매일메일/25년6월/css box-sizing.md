---
{"제목":"css box-sizing","날짜":"2025-06-06","tags":["매일메일"],"dg-publish":true,"permalink":"/매일메일/25년6월/css box-sizing/","dgPassFrontmatter":true,"created":"2025-06-06T22:27:24.303+09:00","updated":"2025-06-06T22:29:47.348+09:00"}
---

## ❓질문

css box-sizing 속성에 대해 설명해주세요.

---
## 💡 조사하기전 내가 알고 있던 내용

뭔가 들어본거는 같은데 CSS 요소의 크기를 계산하는 방식에 대한 속성이였던 것 같습니다. 써보지는 못했습니다.

---
## 🏫 정리한 내용

`box-sizing`은 **CSS에서 요소의 크기를 어떻게 계산할지를 결정하는 속성**입니다.
box-sizing은 2가지 옵션이 있는데 `content-box`와 `border-box`입니다.

`content-box`는 `box-sizing` 속성의 기본값으로, 적용 시 요소의 `width`와 `height` 값이 내용 영역만의 크기를 나타냅니다. 즉, `width`와 `height`는 요소의 실제 콘텐츠 크기만을 정의하고, 그 안에 추가되는 padding과 border는 크기에 포함되지 않습니다.

`border-box`를 적용하면 `width`와 `height` 값이 `내용 영역`, `padding`, `border`를 모두 포함하는 크기를 나타냅니다.