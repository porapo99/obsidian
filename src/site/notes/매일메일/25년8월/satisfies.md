---
{"제목":"satisfies","날짜":"2025-08-15","tags":["매일메일"],"dg-publish":true,"permalink":"/매일메일/25년8월/satisfies/","dgPassFrontmatter":true,"created":"2025-08-15T00:35:04.000+09:00","updated":"2025-08-21T17:34:58.000+09:00","dg-note-properties":{"제목":"satisfies","날짜":"2025-08-15","tags":["매일메일"]}}
---

## ❓질문

타입스크립트 satisfies 키워드에 대해 설명해주세요.

---
## 💡 조사하기전 내가 알고 있던 내용

처음 들어봤습니다.

---
## 🏫 정리한 내용

`satisfies`키워드는 기존 타입 정보를 유지하면서 해당 값이 특정 타입 조건을 충족하는지 확인할 때 사용됩니다.
예를 들어, `satisfies`는 유니온 타입을 다룰 때 이점이 있습니다. 구체적인 코드를 통해 설명을 드리면 좋을 것 같습니다.

```ts
type Color = "red" | "green" | "blue";
type RGB = [red : number , green : number , blue : number]
```

타입이 있다고 가정하면

```ts
const palette : Record<Color, string | RGB> = {
  red : [255,0,0],
  green : "#00ff00",
  blue : [0,0,225]
};

const greenNormalized = palette.green.toUpperCase(); // 에러 발생
```

이때 palette.gree은 string | RGB 로 변환 추론되기때문에 호출 시 타입에러가 발생합니다.

```ts
const palette = {
  red : [255,0,0],
  green : "#00ff00",
  blue : [0,0,225]
} satisfies Record<Color, string | RGB>;

const greenNormalized = palette.green.toUpperCase(); // 정상 동작
```

하지만 위와 같이 satisfies 를 활용하면 타입이 string 으로 추론되어 정상적으로 호출할 수 있습니다. 즉 의도보다 더 넓은 타입으로 추론되는 일을 방지하며 타입 검사를 수행할 수 있습니다.

