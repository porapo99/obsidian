---
{"제목":"명시적 타입 변환","tags":["JavaScript","타입"],"dg-publish":true,"permalink":"/v2/Studynotes/JavaScript/Explicit type conversion/","dgPassFrontmatter":true}
---

자바스크립트의 모든 값은 타입이 있다. 값의 타입은 개발자의 의도에 따라 다른 타입으로 변환할 수 있다. 개발자가 의도적으로 값의 타입을 변환하는 것을 명시적 타입 변환 또는 타입 캐스팅이라 한다.

ex)

```js

String(1); // "1"
(1).toString(); // "1"
1 + '' // "1"

Number('0'); // 0
pasreInt('0') // 0

Boolean('x') // true
!!''; // false
```

