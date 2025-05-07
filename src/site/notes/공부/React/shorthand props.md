---
{"제목":"shorthand props","tags":["React","Props"],"dg-publish":true,"permalink":"/공부/React/shorthand props/","dgPassFrontmatter":true,"updated":"2025-04-11T22:07:49.185+09:00"}
---



```tsx
function component(props) {
	<HeaderComp hasPadding={props.hasPadding}>
		<ChildComp isDarkMode={props.isDarkMode} isLogin={props.isLogin}/>
	</HeaderComp>
}
```

이렇게 props를 받아서 그 아래로 내릴 상황에서

```tsx
function component({hasPadding , ...props}) {
	<HeaderComp hasPadding={hasPadding}>
		<ChildComp {...props}/>
	</HeaderComp>
}
```

이런식으로 props를 축약할수있다.

