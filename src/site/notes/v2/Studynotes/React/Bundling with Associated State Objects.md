---
{"제목":"연관된 상태 객체로 묶어내기","tags":["React","state"],"dg-publish":true,"permalink":"/v2/Studynotes/React/Bundling with Associated State Objects/","dgPassFrontmatter":true}
---



```jsx
  const [isLoding , setLoding]= useState(false)  
  const [isFinish , setFinish ]= useState(false)
```


```jsx
  const [promiseState, setPromiseState] = useState({
    isLoding: false,
    isFinish: false,
  });
```

Loading  , Success , Fail 이런순이면 로딩이 true였다가. 성공 , 혹은 실패로 넘어갔을때 다른것들은 다시 false로 들어가야한다.

```jsx
setFetchState({
	Loading:false
	Success:true
	Fail:false
})
```

이런식으로 직관적으로 사용가능 더 깔끔한 코드로는

```jsx
setFetchState((prev) => ({
	...prev,
	Loading:true
}))

-> 
setFetchState((prev) => ({
	...prev,
	Success:true
	Loading:false
}))
```

이런식으로 작성가능하다 직관적으로 보일수있음.

하나의 상태가 무조건 하나만 나타낼 필요없다.

리액트의 상태를 만들 때 `객체로 연관된 것들끼리 묶어서 처리` 할 수 있다.
