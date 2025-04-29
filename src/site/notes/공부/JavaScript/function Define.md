---
{"제목":"함수 정의","tags":["JavaScript","function"],"dg-publish":true,"permalink":"/공부/JavaScript/function Define/","dgPassFrontmatter":true}
---

자바스크립트에서 함수를 정의 하는 방법에는

1. 함수 선언문
2. 함수 표현식
3. 화살표 함수
4. Function 생성자 함수

등이 있습니다.

```js
case 1 :함수 선언문

function add(x,y){
  return x+y;
}

case 2: 함수 표현식
var add = function(x,y){
  return x + y;
}

case 3: Function 생성자 함수
var add = new Function('x','y', 'return x+y');

case 4: 화살표 함수(ES6)
var add = (x,y) => x+y;
```

