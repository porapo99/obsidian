---
{"제목":"RCC와 RSC","tags":["React","NextJS"],"dg-publish":true,"permalink":"/공부/Next.js/RCC와 RSC/","dgPassFrontmatter":true}
---

먼저 이 글은 React의 기능을 다루고 있지만 Next.js에서 조금 더 많이 접하고 Next.js에서 의 활용 방안에 대해서 서술하여 Next.js 카테고리에 넣겠습니다.

먼저 `React Server Component`와 `React Client Component`는 리액트 18버젼에 나온 개념으로 Next.js에서도 13버젼 `App router`에 이 기능을 도입하여 사용 할 수 있게되었습니다.

먼저 `RSC` 는 서버에서 렌더링 되는 컴포넌트를 의미합니다 
특징으로는 async 함수를 붙혀 비동기 데이터를 가져와 이를 렌더링 하는 것이 가능합니다.
useState나 useEffact등 클라이언트 훅과 onClick과 onFocus등 이벤트 핸들러를 사용 할 수 없습니다 이는 직렬화 되어야하는 RSC의 특징 때문입니다.
렌더링 되기전에 `Suspense`로  RSC자리에 다른 컴포넌트를 보여주는 것이 가능합니다.
RSC 에서 사용되는 패키지들은 모두 서버에서 사용되는 것이기 때문에 js 번들로 클라이언트에 전달 되지 않습니다. (용량을 아낄수 있습니다.)

`RCC`는 클라이언트에서 렌더링 되는 컴포넌트를 의미합니다. Next.js 13버젼 이후에서는 서버에서 HTML이 한번 렌더링되고 이를 JS번들과 함께 클라이언트로 보내 `hydration`과정을 거칩니다.
그 후 클라이언트에서 보여주게 됩니다. (서버 사이드 렌더링을 진행 합니다)
useState나 useEffact등 클라이언트 훅과 onClick과 onFocus등 이벤트 핸들러를 사용 할 수 있습니다  
RCC 에서 사용되는 패키지들은 모두 클라이언트에서 사용되는 것이기 때문에 js 번들로 클라이언트에 전달됩니다.


