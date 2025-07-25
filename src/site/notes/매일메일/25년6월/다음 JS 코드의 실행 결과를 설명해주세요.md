---
{"제목":"다음 JS 코드의 실행 결과를 설명해주세요","날짜":"2025-06-16","tags":["매일메일"],"dg-publish":true,"permalink":"/매일메일/25년6월/다음 JS 코드의 실행 결과를 설명해주세요/","dgPassFrontmatter":true,"created":"2025-06-16T23:46:15.532+09:00","updated":"2025-06-16T23:53:45.207+09:00"}
---

## ❓질문

다음 JS 코드의 실행 결과를 설명해주세요

```js
function change(a, b, c) {
    a = 'a changed'
    b = { b: 'changed' };
    c.c = 'changed';
}

let a = 'a unchanged';
let b = { b: 'unchanged' };
let c = { c: 'unchanged' };

change(a, b, c);

console.log(a, b, c); // ?
```

---
## 💡 조사하기전 내가 알고 있던 내용

이건 자바스크립트의 함수의 파라미터에는 값의 복사본이 전달된다는걸 문제화 한거 같습니다.

첫번째 a의 경우는 문자열을 함수에 넣었습니다 그러나 이 값은 원본에 영향이 없습니다
두번째 b의 경우 객체를 함수에 넣었습니다. 이도 새로운 객체를 만들어 변경합니다. 즉 원본에 영향이 없습니다.
세번째 c의 경우는 참조된 객체의 속성을 수정합니다 즉 c.c의 값은 변동됩니다.

---
## 🏫 정리한 내용

세번째 경우를 조금 더 설명하자면 동작방식이 원본 객체의 참조 값의 복사본이 파라미터에 전달됩니다. 함수 내부와 외부의 변수가 모두 동일한 참조 값을 가리키고 있으므로, 함수 내부에서 객체의 속성을 변경하면 호출한 곳의 객체에도 영향을 미칩니다.