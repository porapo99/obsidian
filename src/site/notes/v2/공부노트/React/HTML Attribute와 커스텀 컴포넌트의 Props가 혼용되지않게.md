---
{"dg-publish":true,"permalink":"/v2//react/html-attribute-props/","tags":["React","Props"],"noteIcon":""}
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