---
{"제목":"Next.js 초기 렌더링 방식","tags":["NextJS"],"dg-publish":true,"permalink":"/공부/Next.js/Next.js 초기 렌더링 방식/","dgPassFrontmatter":true,"updated":"2025-04-28T15:57:29.973+09:00"}
---


사용자가 홈페이지에 방문하게 되면 Root node에서 부터 트리를 탐색하기 시작합니다.
이때 `RSC`를 만나거나 `RCC`만나면 이를 처리하고 다시 재귀적으로 렌더링합니다

RSC 처리 (서버 렌더링)
`async`가 붙어있는 RSC를 만날시에는 `await`으로 데이터를 먼저 가져온 후에 렌더링한다.
결과는 `HTML 문자열`과 관련 데이터로 변환 됩니다.

```jsx
async function ServerComponent() {
  const data = await fetchData(); // 서버에서 데이터 fetching
  return <div>{data}</div>; // HTML로 직렬화
}
```

RCC 처리 (하이브리드 렌더링)
RCC도 서버에서 `초기 HTML`을 생성합니다 그렇지만 훅들은 `클라이언트`에서만 실행됩니다.
그다음 `직렬화 메타데이터`를 생성합니다.
`컴포넌트의 위치`, `props`, `초기 상태`를 JSON으로 직렬화함 이는 클라이언트가 정확히 동일한 컴포넌트를 찾아 `Hydration` 할수있게 도와줍니다.

```json
{
  "type": "ClientComponent",
  "props": {},
  "clientReference": "./components/ClientComponent.js",
  "hydration": { "count": 0 }
}
```

그 후 `스트리밍 응답`을 통해 서버는 완성된 HTML 청크를 즉시 전송하면서 RCC에 대한 메타데이터는 별도 JSON 트리로 포함시킴.

```jsx
<div id="root">
  <div>서버 데이터</div>
  <button>0</button> <!-- RCC의 서버 렌더링 결과 -->
</div>
<script type="application/json">
  {/* RCC 직렬화 데이터 */}
</script>
```

마지막으로 전송 받은 클라이언트 측에서 리액트 서버 컴포넌트는 그대로 보여주고 리액트 클라이언트 컴포넌트는 `Hydration` 과정을 거칩니다.

JSON 메타데이터를 읽고 해당 컴포넌트 코드를 동적 임포트합니다.
서버에서 생성한 HTML과 클라이언트 컴포넌트를 연결하고 훅과 이벤트 핸들러를 주입해 인터랙티브하게 만듦.

이것으로 `직렬화의 목적`과 `부분적인 인터렉션`으로 성능 최적화를 하는 Next.js 렌더링 방식에 대해서 알아 보았습니다.