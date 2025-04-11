---
{"제목":"Type Aliases & readonly","tags":["TypeScript"],"dg-publish":true,"permalink":"/v2/공부노트/TypeScript/Type Aliases & readonly/","dgPassFrontmatter":true}
---


```ts
type Animal = string | number | undefined; 
let 동물 :Animal;
```

타입을 변수처럼 만들어 쓰게 할수있는 alias 문법 이다. 관습상 대문자로 시작함. 
객체형태로도 만들수있음.

타입은 재정의가 불가능함.

Type 알리아스로 선언된 타입은 & 이나 | 로 and or 연산등으로 합쳐진 타입을 만들수있다.

```ts
Type Girlfriend = {
	readonly name : string
}

let 여친 : Girlfriend = {
	name : '엠버'
}

여친.name = '유라' // readonly 에러
```

readonly 키워드는 속성 왼쪽에 붙일 수 있으며
특정 속성을 변경불가능하게 잠궈줌

const 변수안에 객체를 담고 안에 값을 바꿨을때 ( 원시 타입이 아니고 객체 형태라 값은 바뀌어짐 )
바꿔지는데 이렇게 readonly 키워드를 사용하면 막을수있음.