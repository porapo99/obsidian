---
{"제목":"HTML data-* 속성","tags":["Frontend"],"dg-publish":true,"permalink":"/공부/Frontend/HTML data-* 속성/","dgPassFrontmatter":true}
---

`data-*` 속성은 표준이 아닌 속성이나 추가적인 DOM 속성과 같은 다른 조작을 하지않고, 의미론적 표준 HTML 요소에 추가 정보를 저장할 수 있게 도와주는 속성입니다.

저장하는 방식은
```html
<div id="div1" data-name="인사말" data-id="1234">안녕하세요</div>
```

이를 자바스크립트에서 사용할땐

```js
const div = document.querySelector("#div1");

console.log(div.dataset.name) // "인사말"
console.log(div.dataset.id) // "1234"
```

이런식으로 `dataset`객체를 통해 가져올 수 있다.

CSS에서 접근하는 방식은 보통

```css
[data-id="1234"]{ background-color : red; }
```

이런식으로 속성 선택자를 활용하여 사용이 가능하다.

`스크린리더` 등과 보조 기술의 호환과 `ARIA 속성`과 함께 사용하여 `접근성`을 올리는 효과를 볼수있고 `간단한 상태 정보`의 저장이나 `테스트`를 위한 식별자로 쓴다던지 `미디어 쿼리` 대안으로 사용이 가능하다.

단 사용할때 주의할점으로 `모든값이 문자열로 변환`된다던지, 대용량 데이터를 입력해서 사용하면 `DOM이 무거워` 지기때문에 많은 사용은 좋지않다.


