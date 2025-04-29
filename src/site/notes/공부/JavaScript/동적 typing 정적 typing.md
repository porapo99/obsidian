---
{"제목":"동적 언어와 정적 언어","tags":["JavaScript"],"dg-publish":true,"permalink":"/공부/JavaScript/동적 typing 정적 typing/","dgPassFrontmatter":true}
---

자바스크립트의 변수는  데이터 타입을 가지지않는다.

C나 자바같은 정적 타입 언어는 변수를 선언 할대 변수에 할당할 수 있는 값의 종류 , 즉 데이터의 타입을 사전에 선언 해야 사용할수있다. 이를 `명시적 타입 선언` 이라고 한다.

```java
char c
int number;
```

이는 컴파일 시점에서 타입체크를 수행하며 옳지않는 타입의 값이 사용되었을때 이를 잡아줄 수 있게된다. 이를 정적 타이핑이라고한다.

단 자바스크립트에서는 변수의 선언에 사용하는 키워드는 var , let , const 밖에없다.

그 이유는 자바스크립트의 변수는 선언이 아닌 할당에 의해 타입이 결정(타입추론)된다. 그리고 재할당에 의해 변수의 타입은 언제든지 동적으로 변할 수 있다.

```js
let foo
console.log(typeof foo) //undefined

let foo = '1'
console.log(typeof foo) // stirng

let foo = 1
console.log(typeof foo) // number

```

이를 동적 타이핑이라고 한다. 이러한 특성 때문에 자바스크립트같은 동적 타이핑의 특성을 갖고있는 언어들을 동적 언어(ex: python , ruby등)라고도 한다.

