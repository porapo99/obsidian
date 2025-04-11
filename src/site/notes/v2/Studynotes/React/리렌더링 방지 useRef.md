---
{"제목":"리렌더링 방지 useRef","tags":["React","state"],"dg-publish":true,"permalink":"/v2/studynotes/react/use-ref/","dgPassFrontmatter":true}
---


리렌더링 방지가 필요하다면 useState 대신 useRef

-> 컴포넌트의 전체적인 수명과 동일하게 지속된 정보를 일관적으로 제공해야하는 경우

```jsx
function RefInsteadOfState() {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    if (!isMount) {
      setIsMount(true);
    }
  }, [isMount]);

  return <div>{ isMount && '컴포넌트 마운트 완료!'}</div>;
}
```

이 코드는 초기 상태의 컴포넌트가 마운트 됐을때 글자를  보여주는 코드이다 

그러나 이렇게 useState를 사용했을 경우 리렌더링이 일어날수도있다 리렌더링을 방지할려면
useRef를 사용해서 코드를 작성해라

```jsx
function RefInsteadOfState() {
  const isMount = useRef(false);
  
  useEffect(() => {
    if (!isMount.current) {
      isMount.current = true;
    }
  }, []);

  return <div>{isMount.current && '컴포넌트 마운트 완료!'}</div>;
}
```

useRef는 상태 변경 없이 값이 유지되므로 불필요한 렌더링을 방지할수있다.


useState 대신 useRef를 사용하면 컴포넌트의 생명주기와 동일한 `리렌더링되지 않는 상태를 만들 수 있다.`
