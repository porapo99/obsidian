---
{"제목":"useEffect 와 useLayoutEffect","날짜":"2025-04-07","tags":["매일메일"],"dg-publish":true,"permalink":"/v2/매일메일/useEffect 와 useLayoutEffect/","dgPassFrontmatter":true}
---

## ❓질문

useEffect 와 useLayoutEffect의 차이점에 대해서 설명해주세요.

---
## 💡 조사하기전 내가 알고 있던 내용

useEffact와 useLayoutEffect 둘다 전부 렌더링이 된다음 사이드 이펙트를 일으키는 훅입니다.
useEffact경우 렌더링이 완료되는 시점에 비동기적으로 실행됩니다. useLayoutEffect의 경우에는 DOM이 만들어지기 직전에 동기적으로 실행됩니다. 

---
## 🏫 정리한 내용

useEffact의 경우는 렌더링이 완료 되는 시점에 비동기적으로 실행됩니다 화면이 실제로 그려진 후 에 실행 되는 방식입니다. 즉 데이터를 가져오거나 이벤트 리스너 추가등 화면의 직접적인 영향을 주지않는 선의 작업에서 자주 사용됩니다.

useLayoutEffect의 경우에는 렌더링 후 DOM이 업데이트 되기 직전 시점에 동기적으로 처리됩니다.
예를 들어 DOM의 크기를 측정하거나 위치를 조정해야 할 때 useLayoutEffect를 사용하면 즉각적으로 그 변경 사항이 반영 되어 화면 깜빡임이나 불필요한 재 렌더링을 방지 할수있습니다.

단 useLayoutEffect의 경우에 동기적으로 실행되기 때문에 너무 많은 작업에 사용하게되면 렌더링이 느려질수있습니다. 따라서 보통은 useEffact를 기본적으로 사용하고 화면에 영향을 주는 작업만 useLayoutEffact로 처리하는것이 좋습니다.