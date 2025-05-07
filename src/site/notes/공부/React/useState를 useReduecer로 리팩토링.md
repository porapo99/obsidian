---
{"제목":"useState를 useReduecer로 리팩토링","tags":["React","state"],"dg-publish":true,"permalink":"/공부/React/useState를 useReduecer로 리팩토링/","dgPassFrontmatter":true,"updated":"2025-04-11T22:07:40.698+09:00"}
---



- 여러 하위 값을 포함하는 복잡한 상태 객체를 다룰 때
- 다음 상태가 이전 상태에 의존적일 때
- 상태 변경 로직이 복잡할 때

```ts
const [state, dispatch] = useReducer(reducer, initialState);
```

state : 현재상태
dispatch : 액셜을 발생시키는 함수
reducer : 현재 상태와 액션을 받아 새로운 상태를 반환하는 함수
initialState : 초기상태

```ts
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'SET':
      return { count: action.payload };
    default:
      return state;
  }
};
```

이런식으로 reducer 함수를 구축함

```ts
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>증가</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>감소</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>리셋</button>
      <button onClick={() => dispatch({ type: 'SET', payload: 10 })}>10으로 설정
```

이 추상화 되어있기때문에 함수를 호출하는 구문에서 어떤 액션인지 확인을 가능할수있게함

요약: 여러 상태가 연관됐을때 useState 대신 `useReducer를 사용하면 상태를 구조화`할수있다.
