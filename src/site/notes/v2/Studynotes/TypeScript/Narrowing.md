---
{"제목":"Narrowing","tags":["TypeScript"],"dg-publish":true,"permalink":"/v2/studynotes/type-script/narrowing/","dgPassFrontmatter":true}
---


```ts
function 내함수(x :number | string){ 
	return x + 1 //에러남 
}
```

네로잉이란

애매한 타입을 가지고있는 변수등은 사용을 할때 타입을 좁혀서 확실한 타입을 만들고 사용해야한다 그럴때 쓰는게 네로잉인데

if , in , instanceof 등의 키워드로 가능하다 즉 조건문을 걸어서 이 타입일때만 실행되게 해주세요~ 등의 방법이다.

typeof 변수
속성명 In 오브젝트자료
인스턴스 instanceof 부모