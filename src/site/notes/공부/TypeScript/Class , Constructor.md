---
{"제목":"Class , Constructor","tags":["TypeScript"],"dg-publish":true,"permalink":"/공부/TypeScript/Class , Constructor/","dgPassFrontmatter":true,"updated":"2025-04-11T22:08:15.597+09:00"}
---


```ts
Class Person{
	name;
	age; //이런식으로 미리 필드값을 선언해야됨.
	constructor(){
		this.name = 'kim';
		this.age = 20;
	}
}
```

constructor에 받는 파라미터도 함수에서 하듯이 똑같이 타입지정이 가능하다,
