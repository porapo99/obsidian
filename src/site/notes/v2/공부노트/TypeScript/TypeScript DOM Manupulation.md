---
{"dg-publish":true,"permalink":"/v2//type-script/type-script-dom-manupulation/","tags":["TypeScript"],"noteIcon":""}
---


```html
<h4 id="title">안녕하세요</h4>
<a href="naver.com">링크</a>
<button id="button">버튼</button>
```


JS 일때는 가능하지만 TS로 넘어오면 해당  innerHTML 문법에 오류가 난다.

```js
let 제목 = document.querySelector('#title');
제목.innerHTML = '반갑소'
```

TS

case 1 : if문을 사용한 Narrowing을 사용한다.

```ts
let 제목 = document.querySelector('#title');
if (제목 != null) {
	제목.innerHTML = '반갑소'
}
```

case 2 : instanceof문을 사용한 Narrowing

```ts
let 제목 = document.querySelector('#title');
if (제목 instanceof HTMLElemnet){
	제목.innerHTML = '반갑소'
}
```

HTMLElement 에 담겨있는지 확인하여 그 타입을 체크한다.

case 3 : assertion 사용하기.

```ts
let 제목 = document.querySelector('#title') as HTMLElement;
제목.innerHTML = '반갑소'
```

case 4 : optional chaining

```ts
let 제목 = document.querySelector('#title');
if (제목?.innerHTML != undefined){
	제목.innerHTML = '반갑소'
}
```



이벤트 리스너

```ts
let 버튼 = document.getElementById('button');
버튼?.addEventListener('click', function(){
	 consolt.log('안녕')
})
```

