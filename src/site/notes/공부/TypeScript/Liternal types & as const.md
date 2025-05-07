---
{"제목":"Liternal types & as const","tags":["TypeScript"],"dg-publish":true,"permalink":"/공부/TypeScript/Liternal types & as const/","dgPassFrontmatter":true,"updated":"2025-04-21T10:15:41.038+09:00"}
---



```ts
const 이름 = 'kim' | 'park'
```

타입스크립트에서 쓸수있는 문법인데
이름에는 kim과 park말고 안들어간다는뜻

비슷하게  `as const` 라는 문법도 있는데
타입을 object 의 value로 바꿔주고 object 안에있는 속성을 readonly로 바꿔줌

```ts
var 자료 = {
	name : 'kim'
} as const

function 함수(a : 'kim') {
	
}
함수(자료.name)
```

