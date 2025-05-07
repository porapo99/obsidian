---
{"제목":"함수 타입 정의와 void 타입","tags":["TypeScript"],"dg-publish":true,"permalink":"/공부/TypeScript/함수 타입 정의와 void 타입/","dgPassFrontmatter":true,"updated":"2025-04-12T00:05:30.547+09:00"}
---

```ts
function 함수(x : number) : number{
	return x * 2
}
```

파라미터 자리에 타입을 작성해서 들어오는 값에 타입을 지정 할수있다
파라미터 뒤에 타입을 지정하여 나가는 값도 지정할수있다.


`함수` 에서만 사용가능한 타입도있다 `void` 타입인데 리턴되는 값이 없을때 함수 타입에 `void`를 사용하면 된다.

