---
{"제목":"다음 Promise 코드의 실행 결과를 설명해주세요","날짜":"2025-07-25","tags":["매일메일"],"dg-publish":true,"permalink":"/매일메일/25년7월/다음 Promise 코드의 실행 결과를 설명해주세요/","dgPassFrontmatter":true,"created":"2025-07-25T20:20:21.146+09:00","updated":"2025-07-25T20:34:37.178+09:00"}
---

## ❓질문

다음 Promise 코드의 실행 결과를 설명해주세요

```js
setTimeout(() => {
    console.log('1')
    
    setTimeout(() => {console.log('2')} )

    Promise.resolve().then(()=> console.log('3'))
    
    console.log('4')
})

Promise.resolve().then(() => {
    console.log('5')
    
    setTimeout(() => {console.log('6')} )

    Promise.resolve().then(()=> console.log('7'))
    
    console.log('8')
})

console.log('9')
```

---
## 💡 조사하기전 내가 알고 있던 내용

먼저 동기 코드 `console.log('9')`가 콜스택에 저장되고 setTimeout은 매크로 태스크 큐에 Promise 마이크로 태스크 큐에 저장된다

1번째로 동기 코드 `9`가 출력이 되고

2번째로 매크로 태스크 큐에 먼저들어가있던 setTimeout 뒤에 setTimeout console.log(
6')이 들어가고 Promise.then console.log 7도 마이크로 태스크 큐에 들어간다.
 마이크로 태스크 큐에 들어가있는 Promise 객체에 들어가있는 동기 코드 `5`와 `8`이 출력된다.

3번째로 콜스택이 비어지고 마이크로 태스크 큐에 아직 남아있으니까 `7`이 출력됩니다.

4번째로 마이크로 태스크 큐가 비어있으니 매크로 태스크 큐에서  맨앞에있던 settimeout의 콜백내부를 해결합니다. 
출력은 `1`과 `4`가 나올것이고 매크로 태스크 큐에는 2가 들어가고 마이크로 태스크 큐에는 3이 들어갈 것입니다.

5번째로 마이크로 태스크 큐에 들어가있는 Promise.then의 콜백을 해결합니다 `3`이 출력 될것입니다.

6번째로 매크로 태스크 큐에 들어가있는 `6`과 `2`순서대로 해결될 것입니다.

9 -> 5 -> 8 -> 7 --> 1 -> 4 -> 3 -> 6 -> 2

---
## 🏫 정리한 내용

