---
{"제목":"심벌 타입","tags":["JavaScript","타입"],"dg-publish":true,"permalink":"/공부/JavaScript/Symbol 타입/","dgPassFrontmatter":true,"updated":"2025-04-11T22:05:20.883+09:00"}
---

```js
var key = Sysbol('key')
console.log(typeof key);

var obj = {};

obj[key] = 'value';
console.log(obj[key]); // value
```

심벌 값은 다른 값과 중복 되지않는 유일무이한 값이다. 따라서 주로 이름이 충돌할 위험이 없는 객체의 유일한 프로퍼티 키를 만들기 위해 사용한다.
