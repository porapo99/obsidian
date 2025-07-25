---
{"제목":"a태그 보안","날짜":"2025-07-20","tags":["매일메일"],"dg-publish":true,"permalink":"/매일메일/25년7월/a태그 보안/","dgPassFrontmatter":true,"created":"2025-07-20T03:42:19.688+09:00","updated":"2025-07-20T03:47:05.888+09:00"}
---

## ❓질문

`<a>`태그를 이용해 외부 페이지를 열 때 보안상 고려해야 할 점은 무엇인가요?

---
## 💡 조사하기전 내가 알고 있던 내용

`<a>`태그를 설정하여 검색 엔지이 외부 링크로 따라가지 않게 하여 상업적 링크가 검색 엔진에 의해 SEO에 악영향을 미친건 알았지만 보안상으로 고려해야 할 점은 알지 못했습니다.

---
## 🏫 정리한 내용

`<a>`태그의 rel속성을 이용해 중요한 정보가 유출 되지 않도록 설정해야 합니다.

첫째, `rel="noopener"`를 설정하여 외부 페이지에서 `opener` 객체에 접근할 수 없도록 막아야 합니다. 기본적으로, `target="_blank"`가 설정된 `<a>` 를 통해 열린 외부 사이트에서 `window.opener` 객체에 접근할 수 있습니다. `window.opener` 객체에 대한 접근을 허용하면, 악의적으로 피싱 사이트로 연결시키는 탭 내빙(Tabnabbing) 공격이 가능해집니다. 이를 방지하기 위해서는 `noopener`를 설정해야 합니다.

탭 내빙 공격은 사용자가 새롭게 열린 탭에서 기존 탭으로 돌아올 때, 해당 탭을 원본 사이트와 유사한 피싱 사이트로 이동시켜 공격을 시도하는 기법입니다. 사용자가 외부 링크를 클릭하여 새로운 탭이 열리고, 이후 원래 탭으로 돌아왔을 때 해당 페이지가 악성 사이트로 변경될 수 있습니다. 이를 방지하기 위해 rel="noopener"를 설정하면 새로운 탭이 원본 탭의 컨트롤을 가질 수 없게 되어 공격이 불가능해집니다.

둘째, rel="noreferrer"를 설정하여 Referer 헤더 정보가 노출되지 않도록 막아야 합니다. 브라우저는 링크 연결 시 Referer 헤더를 통해 사용자가 어떤 웹사이트에서 이동된 것인지를 전달하는데, 이 정보에 민감한 데이터가 포함될 수 있습니다. 예를 들어, URL에 세션 ID나 사용자 식별 정보가 포함되어 있다면 이 정보가 외부로 유출될 수 있습니다. 따라서 noreferrer를 설정하여 이를 예방해야 합니다. 참고로, noreferrer 속성에는 noopener와 마찬가지로 opener를 생략하는 기능도 포함됩니다.