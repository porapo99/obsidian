---
{"제목":"호이스팅","tags":["JavaScript","variable","중요"],"dg-publish":true,"permalink":"/v2/Studynotes/JavaScript/hoisting/","dgPassFrontmatter":true}
---


코드가 실행될때 함수나 변수가 최상단으로 올라가는거처럼 되게 실행되는 것

js엔진은 선언문이 소스코드 어디에있던 다른코드보다 먼저 실행된다 이는 런타임이전에 실행컨텍스트에 의해 소스코드 평가과정에서 스코프에 등록이되고 이는 마치 코드가 최상단으로 끌어지는 것 처럼 보이는 특징이 있다

const let 호이스팅 됨
단 언디파인드로 할당되지않아서 즉 메모리안에 값이없어서 에러가나는것

TDZ는 

```JS
[
console.log(a);
]
let a = 0;
console.log(a);
```

저 구간임 변수 A가 초기화 되지않았을때 의 그 구간을 TDZ라고함

let , const , class가있음


호이스팅은 우선순위가있음

변수선언은 함수 선언보다 위에있음 

```js
console.log(typeof fn1); // 'function'
var fn1 = 'string';
function fn1(){}
console.log(typeof fn1); // 'string'
```
