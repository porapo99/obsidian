---
{"제목":"async와 await","tags":["JavaScript"],"dg-publish":true,"permalink":"/공부/JavaScript/async와 await/","dgPassFrontmatter":true,"created":"2025-04-29T12:29:17.746+09:00","updated":"2025-04-29T16:00:10.898+09:00"}
---

먼저 `async`와 `await`을 알아보기 전에 `Promise`에 대해 설명해보자면, `Promise`는 비동기 함수의 결과를 담고 있는 객체라고 할 수 있습니다. 그리고 대기 상태에서 성공이나 실패의 상태로 변경됐을 때 `then()`이나 `catch()` 함수를 사용해서 각각 처리할 수 있게 해줍니다.

그러나 순차적으로 작업을 처리하는 것에 대해 `then()` 체인을 길게 이어 나가면 콜백 체인과 마찬가지로 코드의 가독성이 떨어지고 에러가 어디서 발생했는지 파악하기 힘들어집니다.  
이러한 체인의 단점을 `async`와 `await`으로 보완할 수 있습니다.

---
먼저 `async`는 

```ts
async function handleSubmit(){
	...
	return data
}
```

이런 식으로 `function` 키워드 앞에 붙여서 사용합니다.  
이것은 "이 함수는 비동기적인 함수이고 Promise를 반환할 거야"라는 뜻입니다.  
`return data`로 반환되는 `data`는 사실 `Promise.resolve(data)`와 같은 결과인 거죠.

그리고 `await`은 `async` 함수 안에서만 사용할 수 있는 문법입니다.  
`Promise`를 반환하는 함수 앞에 `await`을 붙이면 해당 `Promise`의 상태가 바뀔 때까지 코드가 기다립니다. 이후 `Promise`가 대기 상태에서 변환되면 연산을 시작하는 거죠.

```jsx
async function handleSubmit(){
	const data = await 데이터처리.함수({
		ID : 1412241 // 예시
	})
	console.log(data)
	return data
}
```

이때 데이터 처리 함수가 실행되고 나서야 `console.log(data)`가 실행됩니다. 즉 `Promise`의 `then()`과 같은 역할인 거죠.

그렇다면 오류가 날 때는 어떻게 대처할까요?

```js
async function handleSubmit(){
	try{
		const data = await 데이터처리.함수({
		ID : 1412241 // 예시
		})
		console.log(data)
		return data
	}catch(error){
		console.log(error)
	}
}
```

이런 식으로 `try/catch`문을 활용해서 오류를 핸들링할 수 있습니다. 이전처럼 `then()` 체인이 깊어지지도 않고 확실히 구분되니 보기 편한 점이 있습니다.

---
그렇다면 `async/await`은 `Promise`의 상위 호환인가요?

그건 아닙니다. 결국 `async/await`은 `Promise`의 문법적 설탕이고 `Promise`의 개념이 먼저 이해되어야 합니다.  
그리고 `Promise`의 기능 중 병렬 처리나 최상위 레벨에서의 비동기 처리 등 `async/await`으로 대처가 안 되는 부분도 있기 때문에 100% 상위 호환이라고 말하기는 어렵다고 생각합니다.