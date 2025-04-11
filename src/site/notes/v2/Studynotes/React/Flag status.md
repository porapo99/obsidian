---
{"제목":"플래그 상태","tags":["React","state"],"dg-publish":true,"permalink":"/v2/studynotes/react/flag-status/","dgPassFrontmatter":true}
---


`플래그 값` 이란 프로그래밍에서 주로 특정 조건 혹은 제어를 위한 조건을 `불리언`으로 나타내는 값

```jsx
const [isLogin , setIsLogin] = useState(false) 
```

이런거할때 굳이 State를 사용하지말고

```jsx
const isLogin = hasToken && hasCookie
```

이런식으로 플래그를 활용해서 할수있음.

