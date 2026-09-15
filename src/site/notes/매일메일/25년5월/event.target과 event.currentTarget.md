---
{"제목":"event.target과 event.currentTarget","날짜":"2025-05-26","tags":["매일메일"],"dg-publish":true,"permalink":"/매일메일/25년5월/event.target과 event.currentTarget/","dgPassFrontmatter":true,"created":"2025-05-26T21:19:04.000+09:00","updated":"2025-05-28T01:37:44.000+09:00","dg-note-properties":{"제목":"event.target과 event.currentTarget","날짜":"2025-05-26","tags":["매일메일"]}}
---

## ❓질문

event.target과 event.currentTarget의 차이점은 무엇인가요?

---
## 💡 조사하기전 내가 알고 있던 내용

`event.target`은 실제 이벤트가 일어난 곳을 반환하고(사용자가 직접 누른 요소) `event.currentTarget`은 이벤트의 리스너가 달려있는곳을 반환합니다 

```jsx
<div onClick={handle~}>
	<button>클릭</button>
</div>
```

일때 버튼을 클릭하면 target 속성은 button을 반환하고 currentTarget속성은 `<div><button>~</div>` 이런식으로 부모요소를 기준으로 반환합니다 

이걸 통해서 확실하게 이벤트처리를 할수있는 용도로 쓰입니다.

---
## 🏫 정리한 내용

