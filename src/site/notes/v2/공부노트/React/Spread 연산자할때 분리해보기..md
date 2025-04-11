---
{"제목":"Spread 연산자할때 분리해보기.","tags":["React","Props"],"dg-publish":true,"permalink":"/v2/공부노트/React/Spread 연산자할때 분리해보기./","dgPassFrontmatter":true}
---



```jsx
const ParentComponent = (props) => {
	return <ChildOrHOCComponent {...props} />
}
```

```jsx
const ParentComponent = (props) => {
	const { 관련_없는_props, 관련_있는_props, ...나머지_props} = props;

	return( 
		<ChildOrHOCComponent  
		관련_있는_props={관련_있는_props} 
		{...나머지_props}
	/>)
}
```

이렇게 스프레드 연산자를 통해서 내릴때 이 props를 구조분해해서 내리는 방식을 택하면 어느정도 props가 어떤 정보를 갖고있는지 받았을때부터 알게되어 직관적인 코드 읽기가 가능하다.

