---
{"제목":"Content-Type","날짜":"2025-07-09","tags":["매일메일"],"dg-publish":true,"permalink":"/매일메일/25년7월/Content-Type/","dgPassFrontmatter":true,"created":"2025-07-09T14:29:44.000+09:00","updated":"2025-07-09T14:35:31.000+09:00","dg-note-properties":{"제목":"Content-Type","날짜":"2025-07-09","tags":["매일메일"]}}
---

## ❓질문

Content-Type 헤더에 대해서 설명해주세요

---
## 💡 조사하기전 내가 알고 있던 내용

Content-Type은 HTTP 전송때 데이터 타입을 명시하는 헤더입니다

보통 자주볼때가 `Content-Type : application/json`을 가장 많이 본거같습니다. 이는 보내는 데이터의 타입을 JSON이라고 명시하는 헤더라고 할 수 있습니다.

---
## 🏫 정리한 내용

`Content-Type`은 HTTP 요청과 응답에서 전송되는 데이터의 타입을 명시하는 헤더입니다. 

서버와 클라이언트가 데이터를 주고받을 때, 올바르게 해석할 수 있도록 하기 위해 사용합니다.

`Content-Type` 헤더는 MIME 타입을 기반으로 하며, `[type]/[subtype]` 형식으로 구성됩니다.

`Content-Type` 헤더를 정확하게 지정하지 않으면, 클라이언트나 서버에서 데이터를 올바르게 해석하지 못할 수 있습니다. 예를 들어, JSON 데이터를 전송하면서 `Content-Type: application/x-www-form-urlencoded`로 설정하면 서버는 데이터를 잘못된 방식으로 처리하거나, `415 Unsupported Media Type`를 반환할 수 있습니다.