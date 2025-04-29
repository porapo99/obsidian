---
{"제목":"single quotes vs double quotes","tags":["Frontend","React","JavaScript","HTML"],"dg-publish":true,"permalink":"/공부/Frontend/single quotes vs double quotes/","dgPassFrontmatter":true}
---

```tsx
<a href=https://www.clean-code">Clean Code</a>
```

```tsx
<input class='ccrc' type="button" value='Clean Code React' />
```

```tsx
//컴포넌트
<Clean style={{ backgroundPsition : "left"}} />
```


사실 의미 없는 논쟁인거 같다.

JSX라는 HTML + JS라는 두개의 언어를 혼용해서 쓸수있는 특성때문에
각자 다른 컨벤션을 사용하고 있을수있다

보통 HTML은 주로 더블 쿼트 JS는 SINGLE로 나누기도 마련이지만 가급적 Lint 랑 pritter를 설정하고 설정해둔 가이드 라인을 따라가면 가독성이 좋아질 수 있을거같다 

과거 부트캠프 팀 프로젝트에서 prttier 설정을 하지않고 프로젝트를 진행하다 서로 다른 quotes컨벤션 때문에 내가 자동저장하면 파일 전부가 바뀐다던지 하는 이슈가 있었다.
