---
{"제목":"CI & CD","날짜":"2025-06-11","tags":["매일메일"],"dg-publish":true,"permalink":"/매일메일/25년6월/CI & CD/","dgPassFrontmatter":true,"created":"2025-06-11T20:48:45.615+09:00","updated":"2025-06-12T02:46:52.190+09:00"}
---

## ❓질문

CI/CD란 무엇인지 설명해주세요

---
## 💡 조사하기전 내가 알고 있던 내용

CI는 지속적인 통합 , CD는 지속적인 배포를 의미합니다.

개발자가 새로운 기능을 추가하거나 수정을 할 경우 보통 따로 그 역할에 맞는 브랜치를 만들고 코드에 변동을 준다음 핵심이 되는 브랜치로 병합을 시도합니다.
이때 빌드 테스트나 작업의 충돌 , 부가적인 특정 로직을 작동해줘야 한다면 이를 일일이 하는것이 아닌
자동화하여 불편함을 줄일 수 있습니다.

그 이후 변경사항이 main 브랜치나 특정 브랜치로 병합된다면 이를 일일이 배포하는것이 아닌 배포 과정 또한 자동화 하여 실제 배포직전까지 만들어두거나 혹은 배포마저 자동화시키는것을 의미합니다.

보통 AWS Codepipeline , Github Actions , Jenkins 등의 도구들을 이용하여 CI/CD 파이프라인을 구축합니다.

---
## 🏫 정리한 내용

![What is CI/CD?](https://cdn2.hubspot.net/hubfs/3937956/CICDBlog.png)

그림을 통해 이해하면 더 빠르게 이해할것 같아 따로 준비했습니다.