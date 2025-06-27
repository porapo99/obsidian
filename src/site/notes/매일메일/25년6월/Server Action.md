---
{"제목":"Server Action","날짜":"2025-06-17","tags":["매일메일","NextJS"],"dg-publish":true,"permalink":"/매일메일/25년6월/Server Action/","dgPassFrontmatter":true,"created":"2025-06-18T21:37:32.378+09:00","updated":"2025-06-27T11:25:06.873+09:00"}
---

## ❓질문

Server Action이란 무엇인가요?

---
## 💡 조사하기전 내가 알고 있던 내용

서버액션은 Next.js같은 WAS를 사용하는 프레임워크에서 사용가능한 기능이며 서버액션으로 지정한 함수는 서버에서 동작하며 클라이언트에서 호출이 가능한 비동기 함수를 동작시키는 기능입니다

이는 서버 로직을 직접적으로 호출이 가능하며 따로 추가적인 작업없이 Next.js서버에서 바로 DB를 호출한다던지 작성을 해도 이 서버액션으로 선언된 함수는 클라이언트에서 보이지않아 보안에 도움이 될 수 있습니다.

사용방법은
```js
"use server"; // 전체 함수를 서버액션으로 지정

export async function createReviewAction(data: FormData) {
  const content = data.get("content");
  // 데이터베이스 저장 등의 작업
}
```

```js
export async function createReviewAction(data: FormData) {
"use server";  // 해당함수만 서버액션으로 지정
  const content = data.get("content");
  // 데이터베이스 저장 등의 작업
}
```
---
## 🏫 정리한 내용

첫째, `클라이언트와 서버 간 상호작용을 간소화할 수 있습니다.` 기존에는 데이터베이스와 관련된 처리를 위해 백엔드 API와 통신하는 방식을 사용했습니다. 만약 Server Action을 이용한다면 백엔드 API와 통신하지 않고, Next 서버에서 직접 데이터베이스 작업을 수행할 수 있습니다. 이러한 점은 개발 생산성 향상에 도움이 될 수 있습니다. 또한 네트워크 통신을 줄여 성능 면에서도 이점이 있을 수 있습니다.

둘째, `Server Action 로직은 클라이언트에 전송되지 않습니다.` 이는 보안에 도움이 될 수 있습니다. 외부에 노출되면 안 되는 정보나 로직을 숨기는 데 활용할 수 있습니다. 더불어 클라이언트 단의 일부 로직을 Server Action으로 옮긴다면 번들의 크기가 줄어드는 데도 기여할 수 있습니다.

셋째, `JS가 로드되기 이전의 시점에도 서버와 상호작용할 수 있게 됩니다.` Server Action은 html `<form>`의 `action` 속성을 이용하여 폼 데이터를 서버에 전송합니다. 따라서 JS가 로드되지 않거나 비활성화되어도 서버와 통신이 가능하다는 장점이 있습니다.