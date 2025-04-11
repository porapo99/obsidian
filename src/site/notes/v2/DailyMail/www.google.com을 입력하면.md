---
{"제목":"www.google.com을 입력하면","날짜":"2025-03-19","tags":["매일메일","Frontend"],"dg-publish":true,"permalink":"/v2/DailyMail/www.google.com을 입력하면/","dgPassFrontmatter":true}
---

## ❓질문

인터넷 창에 [www.google.com](http://www.google.com/)를 입력하면 무슨 일이 일어나는지 설명해주세요.

---
## 💡 조사하기전 내가 알고 있던 내용

어떻게 인터넷에 접근되는지 매커니즘에 대한 질문입니다.
먼저 Dns조회가 일어나고 ip를 받아와서 접근하고 Tcp 통신후 연결 되면 HTTP 요청을 하여 홈페이지의 정보를 받아옵니다. 요청을 받은 서버는 정보(html ,css ,js ,image)등을 보냅니다.
후에 브라우저 렌더링 파이프라인이 실행됩니다.

---
## 🏫 정리한 내용

1. DNS 조회가 일어납니다. 가장 먼저 브라우저의 cache에 접근하여 DNS기록을 확인하고 없으면 DNS서버에 요청하여 www.google.com에 해당하는 ip 주소를 얻습니다.
2. TCP 연결을 수립합니다. 데이터를 신뢰성 있게 전달 하기 위한 프로토콜 , 이과정에서 브라우저와 서버는 3way handshake를 수행합니다.
3. HTTP 요청 Http or Https 요청을 보냅니다 (형식은 "GET/Http/1.1" 같은 형식) Https 사용시 이 단계전에 SSL/TLS Handshake가 수행되고 인증서 교환 암호화키 협상등이 일어납니다.
4. 서버가 응답을 받습니다 그 후 리소스등을 브라우저에 응답으로 보냅니다 이때 응답 코드도 같이 보냅니다
5. 브라우저 렌더링 파이프라인이 실행됩니다.
