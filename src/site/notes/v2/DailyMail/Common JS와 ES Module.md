---
{"제목":"Common JS와 ES Module","날짜":"2025-03-28","tags":["매일메일","Module","JavaScript"],"dg-publish":true,"permalink":"/v2/daily-mail/common-js-es-module/","dgPassFrontmatter":true}
---

## ❓질문

CommonJS와 ES Module의 차이점에 대해서 설명해주세요.

---
## 💡 **조사하기전 내가 알고 있던 내용**

ESM은 자바스크립트에서 사용하는 모듈을 관리하는 도구입니다 import로 모듈을 가져오고 export로 모듈을 다른 모듈에서 사용가능하게 내보냅니다.

모듈은 다른곳에서 사용가능 할 수 있는 독립적인 단위같은 개념입니다.

---
## 🏫 **정리한 내용**

먼저 Common JS는 주로 Node.js 환경에서 사용되며 모듈을 ==동기적==으로 불러옵니다
모듈을 가져올땐 require 키워드를 사용하고 모듈을 내보낼땐 module.export를 통해 내보냅니다.

다음 ES Module은 자바스크립트 공식 표준 모듈 시스템으로 ES6 부터 도입됐고 브라우저 , Node.js 환경에서 둘다 사용이 가능합니다.
모듈을 ==비동기==적으로 처리하며 import 키워드로 가져오고 export 키워드로 내보냅니다.

ESM의 특징으로는 정적 분석이 가능해 트리 쉐이킹 같은 최적화 작업에도 유리합니다.
