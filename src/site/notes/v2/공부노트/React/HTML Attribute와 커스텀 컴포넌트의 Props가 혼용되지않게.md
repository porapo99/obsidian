---
{"제목":"HTML Attribute와 커스텀 컴포넌트의 Props가 혼용되지않게","tags":["React","Props"],"dg-publish":true,"permalink":"/v2/공부노트/React/HTML Attribute와 커스텀 컴포넌트의 Props가 혼용되지않게/","dgPassFrontmatter":true}
---

```jsx
function MyButton({children, type}) {
	return <button type={type}>{children}</button>;
}
```

```jsx
function MyButton({children, ...rest}) {
	return <button {...rest}>{children}</button>;
}
```


HTML , JS의 예약어와
커스텀 컴포넌트의 Props가 혼용되지않게하자