---
{"제목":"resolve()와 fulfilled","날짜":"2025-04-28","tags":["매일메일","JavaScript"],"dg-publish":true,"permalink":"/v2/매일메일/resolve()와 fulfilled/","dgPassFrontmatter":true}
---

## ❓질문

Promise의 resolve()와 fulfilled에 대해서 설명해주세요.

---
## 💡 조사하기전 내가 알고 있던 내용

Promise의 resolve()는 비동기 처리시 성공적으로 처리 됐다는 상태를 만들기 위한 함수고 fulfilled는 비동기 처리를 성공적으로 마무리 했다는 상태를 의미합니다

즉 resolve()는 Promise의 상태를 fulfilled라는 상태로 바꾸는 함수를 의미합니다

번외로 실패했을때의 reject()와 rejected도 있습니다.

---
## 🏫 정리한 내용

`resolve()`와 `fulfiled`는 `Promise`에서 비동기 처리시 사용되는 값들이지만, 차이점이 존재합니다 
`resolve()`는 `Promise`를 완료 시키는 함수이고, `fulfilled`는 해당 `Promise`가 완료되 ㄴ사태를 뜻합니다.

`resolve()`는 `Promise`가 성공적으로 끝났을 때 결과 값을 넘겨주는 함수입니다. 예를 들어 어떤 비동기 작업이 잘 끝났을 때, `resolve()`를 호출해서 "이 작업이 끝났고 결과는 이거야"라고 전달하게 됩니다. 이렇게 `resolve()`가 호출되면, `Promise`의 상태는 '이행됨' 상태로 바뀌는데 이를 `fulfilled`라고 부릅니다.

 resolve에서 작업이 실패할 수도 있나요?

resolve()가 실패하는 상황은 발생하지 않습니다. 애초에 resolve는 성공을 했을때 Promise를 fulfilled로 바꾸는 함수이기때문에 성공적인 결과를 전달할 때 사용되며 실패 자체와는 관련이 없습니다.