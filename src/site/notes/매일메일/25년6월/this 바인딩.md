---
{"제목":"this 바인딩","날짜":"2025-06-20","tags":["매일메일"],"dg-publish":true,"permalink":"/매일메일/25년6월/this 바인딩/","dgPassFrontmatter":true,"created":"2025-06-20T22:56:14.000+09:00","updated":"2025-06-21T09:56:35.000+09:00","dg-note-properties":{"제목":"this 바인딩","날짜":"2025-06-20","tags":["매일메일"]}}
---

## ❓질문

상황에 따라 this 바인딩이 어떻게 이뤄지는지 설명해주세요.

---
## 💡 조사하기전 내가 알고 있던 내용

먼저 this는 메소드를 호출한 객체가 들어가있는 속성이며 이 호출될때 어떠한 환경에서 호출되는지에 따라 어떤걸 참조하는지 달라집니다.

먼저 전역에서 호출되면 전역객체를 참조합니다.

브라우저에서는 `window객체를 Node.js에서는 global객체`를 가르킵니다.
객체의 메서드에 쓰인` this는 해당 객체`를 참조합니다.
생성자 함수와 클래스에서 호출되면 `인스턴스를 참조`합니다
화살표 함수는 그 `상위 스코프의 this를 상속`을 받습니다.

---
## 🏫 정리한 내용

추가적으로

명시적 바인딩이 있습니다
`call()`, `apply()`, `bind()` 메서드를 사용하면 this를 명시적으로 설정할 수 있습니다.

DOM 이벤트 핸들러에서는 this는 기본적으로 이벤트를 발생시킨 요소를 참조합니다. 하지만 화살표 함수로 만들게되면 `상위 스코프의 this`를 상속받습니다.

자세한 예입니다.

1. 전역호출
```js
function globalFunc() {
  console.log(this);
}
globalFunc(); // 브라우저: window, Node.js: global
```

2. 메서드 호출
```js
const obj = {
  name: "Alice",
  greet: function () {
    console.log(this.name);
  },
};
obj.greet(); // "Alice"
```

3. 생성자 함수와 클래스
```js
function Person(name) {
  this.name = name;
}
const person = new Person("Alice");
console.log(person.name); // "Alice"
```

4. 화살표 함수
```js
const obj = {
  name: "Alice",
  greet: () => console.log(this.name),
};
obj.greet(); // undefined (전역 `this`)
```

5. 명시적 바인딩
 ```js
function greet() {
  console.log(this.name);
}
const user = { name: "Alice" };
greet.call(user); // "Alice"
```

6. DOM 이벤트 핸들러
 ```js
button.addEventListener("click", function () {
  console.log(this); // 클릭된 button 요소
});
```