---
{"제목":"불필요한 Props 복사 및 연산 X","tags":["React","Props"],"dg-publish":true,"permalink":"/공부/React/불필요한 Props 복사 및 연산 X/","dgPassFrontmatter":true,"created":"2024-09-29T18:11:12.365+09:00","updated":"2025-04-21T10:12:48.349+09:00"}
---


```tsx
function CopyProps({v}) {
  return <div>{v}</div>
}
```

이런식이 대다수 굳이 state에 넣을필요는 없다

```tsx
function CopyProps({v}) {

const NewV = 뭔가_엄청난_함수(v)

  return <div>{NewV}</div>
}
```

이럴 경우에는 아래의 코드처럼 useMemo를 사용하면 좋을거같다.

```tsx
const NewV = useMemo() => (뭔가_엄청난_함수(v),[v])
```

사실 무거운 연산같은 경우는 props로 넘어오기전에 하는게 좋다.
결국 props의 불필요한 복사는 지양하면 좋겠다.

불필요한 연산 줄이는법

1. props 바로사용하기
2. 연산된 값을 props로 넘기기
3. useMemo로 연산 최적화하기

