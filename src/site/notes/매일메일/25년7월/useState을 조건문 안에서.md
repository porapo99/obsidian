---
{"제목":"useState을 조건문 안에서","날짜":"2025-07-07","tags":["매일메일"],"dg-publish":true,"permalink":"/매일메일/25년7월/useState을 조건문 안에서/","dgPassFrontmatter":true,"created":"2025-07-07T07:05:08.261+09:00","updated":"2025-07-07T07:21:22.099+09:00"}
---

## ❓질문

왜 useState를 조건문 안에서 사용하면 안되나요?

---
## 💡 조사하기전 내가 알고 있던 내용

useState를 조건문, 반복문, 함수 안에 사용할 경우 발생할 수 있는 문제가 있습니다. 이는 리액트가 상태를 관리하는 방식과 관련 되어있습니다.

리액트는 컴포넌트 내부에서 useState()가 호출된 순서를 기준으로 state를 저장하고 업데이트 합니다. 

이는 어떠한 렌더링에서는 호출되고 다른렌더링에서는 호출이 되지 않을 수도 있습니다. 이렇게 되면 상태를 추적하는 과정에서 리액트는 혼동을 발생시킬수있어 버그가 발생할 수 있습니다.

---
## 🏫 정리한 내용

리액트 입장에서 useState를 사용하여 만든 변수등은 크게 중요하지않다.
hook을 실행한 순서대로, list에서 값을 찾아 전달해주는 역할만 수행한다.

따라서, 렌더링시 hook의 순서가 유지되는 것이 매우 중요하다.

`Don't call Hooks inside loops, conditions, or nested functions`
훅을 조건문 , 반복문, 중첩 함수 안에서 실행하지 말라.

지역변수는 렌더링 간에 유지가 되지않지만 state는 렌더링간에 유지가 됩니다. 이를 유지하게 하는 방법에 대해서 한번 정리해 보았습니다.