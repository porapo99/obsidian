---
{"dg-publish":true,"permalink":"/v2//type-script/type-assertion/","tags":["TypeScript"],"noteIcon":""}
---

```ts
function 내함수(x :number | string){ 
	return (x as number) + 1 
	} 
	console.log( 내함수(123) )
```

x as number 이 x는 넘버입니다~ 라는 임시방편느낌으로 타입을 확정 지어서 컴파일러에게 반기를 들수있게하는 방법 어썰션은 맘대로 타입을 개발자 맘대로 주장하는 역할이라 때문에 엄격한 타입체크기능을 잠깐 안쓰겠다는 뜻과 동일하다.

1. 타입에러를 해결을 못할때 임시용으로 사용을함.
2. 이 들어오는 타입을 100퍼 확신하고 있을때 컴파일러 에러해결용으로 네로잉을 하는거보다 간편하게 사용하기.