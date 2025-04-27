---
{"제목":"CSS Flexbos와 Grid의 차이점","날짜":"2025-04-10","tags":["매일메일","CSS"],"dg-publish":true,"permalink":"/v2/매일메일/CSS Flexbos와 Grid의 차이점/","dgPassFrontmatter":true}
---

## ❓질문

CSS Flexbos와 Grid의 차이점에 대해서 설명해주세요.

---
## 💡 조사하기전 내가 알고 있던 내용

CSS의 Flexbox나 Grid는 현대의 모던 웹에서 자주쓰이는 css속성입니다. 두 속성다 요소를 배치를 할떄 자주 사용하는데 차이점으로는

flexbox는 1차원 속성입니다 가로나 세로 하나를 기준으로 잡고 요소를 정렬하는데 최적화 되어있습니다.
반면 grid는 2차원 속성입니다. grid의 경우에는 가로 세로 전부 사용해서 요소를 배치할수있습니다.

그렇기때문에 flexbox는 일자형 리스트를 생각하면 편하고 grid는 사진집을 생각하면 편합니다.

---
## 🏫 정리한 내용

추가적으로 기본 동작의 차이를 설명하겠습니다

flexbox에서는 주로 요소가 컨테이너의 크기나 위치에 맞춰 자동으로 정렬 됩니다. flexbox의 justify-content와 align-items속성을 사용해, 주 축 방향으로 요소들을 배치하고 여백을 조절할 수 있습니다.

Grid는 행과 열을 사전에 정의하고 그 격자(gird cell)에 요소를 배치하는 방식입니다. Grid에서는 grid-tem-plate-rows, grid template-columns와 같은 속성으로 행과 열의 크기를 정의하고, 각요소의 위치를 세밀하게 설정할 수 있습니다.