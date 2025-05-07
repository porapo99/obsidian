---
{"제목":"HTML Attribute와 커스텀 컴포넌트의 Props가 혼용되지않게","tags":["React","Props"],"dg-publish":true,"permalink":"/공부/React/HTML Attribute와 커스텀 컴포넌트의 Props가 혼용되지않게/","dgPassFrontmatter":true,"created":"2024-10-04T13:20:32.225+09:00","updated":"2025-04-21T10:14:25.025+09:00"}
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

HTML , JS의 예약어와 커스텀 컴포넌트의 Props가 혼용되지않게하자