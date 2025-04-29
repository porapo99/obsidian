---
{"제목":"Promise","날짜":"2025-04-23","tags":["매일메일"],"dg-publish":true,"permalink":"/매일메일/25년4월/Promise/","dgPassFrontmatter":true}
---

## ❓질문

자바스크립트의 Promise에 대해서 아는 대로 설명해주세요

---
## 💡 조사하기전 내가 알고 있던 내용

자바스크립트의 Promise는  예를 들어 클라이언트에서 서버로 데이터 전송이나 호출을 했을때 그 비동기 작업에 대한 상태를 알려주는 객체입니다.
크게 `Fulfilled` , `Pending` , `Rejected`로 나뉘며 
비동기 작업이 진행 중이라는 상태를 의미하는 `Pending`
성공했다는 `Fulfilled` , 실패를 의미하는 `Rejected`로 나뉩니다.


---
## 🏫 정리한 내용

자바스크립트의 `Promise`는 비동기 작업을 관리하고 해당 작업의 성공 또는 실패 결과를 나중에 사용할 수 있도록 하는 객체입니다. 정리해서 말씀드려보자면 `Promsie`는 비동기 작업의 완료 여부를 약석 해주는 개념이라고 할수있습니다.

`Promise`는 3가지 상태를 가지며 각각 성공, 진행중 , 실패를 의미하는  `Fulfilled` , `Pending` , `Rejected` 가 있습니다.

`Promise` 객체는 비동기 작업을 수행할 함수를 인자로 받아서 실행하며, 이 함수는 `resolve()`와 `reject()` 라는 두 가지 콜백을 받습니다 `resolve()` 는 작업성공시 `Promise`를 `Fulfilled`로 변환시키고 `reject()`는 작업 실패시 `Promise`를 `Rejected`로 변환 시킵니다.

`Promise`는 코드의 가독성을 높이고, 비동기 작업의 흐름을 제어하는 데에 매우 유용합니다. 특히 여러개의 `Promise`를 순차적으로 연결할 수도 있고 `Promise.all()`이나 `allSeetled()` 같은 메서드를 통해서 병렬로 비동기 작업을 처리할 수도 있습니다.

하지만 `Promise`는 중첩되거나 다른 비동기 흐름에서 에러가 발생한 경우 복잡도가 증가하고
콜백 지옥을 완전하게 해결하지 못한 다는 단점이 있습니다. 


