---
{"제목":"useRef","날짜":"2025-06-02","tags":["매일메일","React"],"dg-publish":true,"permalink":"/매일메일/25년6월/useRef/","dgPassFrontmatter":true,"created":"2025-06-02T19:16:05.417+09:00","updated":"2025-06-03T21:19:36.847+09:00"}
---

## ❓질문

useRef는 언제 사용하나요?

---
## 💡 조사하기전 내가 알고 있던 내용

useRef는 리액트에서 제공해주는 훅으로 값을 저장하고 변경할 수 잇는 훅이다 그러면 useState랑 다른게 없을거 같지만 useRef는 DOM에 직접적인 접근이 가능하고 , 상태와는 다르게 리렌더링을 유발하지않습니다

즉 useRef는 DOM 요소에 직접적인 접근을 할때, 단순 데이터 수집 , 값을 유지하면서 렌더링을 유발하지 않을때 사용됩니다.

---
## 🏫 정리한 내용

`useRef`는 React의 훅 중 하나로, 컴포넌트 내에서 변경 가능한 값을 저장하고 관리할 수 있게 해줍니다. 

`useRef`는 DOM 요소에 접근할 때 사용됩니다. 예를 들어, 특정 DOM 요소에 직접 접근하고 싶을때 `useRef`를 사용하여 해당 요소의 참조를 얻을 수 있습니다. 이는 `useEffect()`나 이벤트 핸들러 내에서 해당 DOM 요소에 직접 작업을 수행할 때 유용합니다.

그리고 `useRef`는 값을 유지하면서도 렌더링을 트리거하지 않기 위해 사용됩니다. 일반적으로 상태 값을 관리할 때 사용하는 `useState()`는 상태 변화가 리렌더링을 유발하는 반면 `useRef`는 값이 변경되어도 리렌더링을 유발하지 않습니다. 