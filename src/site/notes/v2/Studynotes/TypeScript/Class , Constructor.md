---
{"제목":"Class , Constructor","tags":["TypeScript"],"dg-publish":true,"permalink":"/v2/studynotes/type-script/class-constructor/","dgPassFrontmatter":true}
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
