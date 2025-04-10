---
{"dg-publish":true,"permalink":"/v2/studynotes/depoly/docker/","tags":["Deploy","Docker"]}
---

우리가 세팅해볼것 리버스프록시

 user -> reverse proxy -> web server

장점 서버정보를 숨길 수 있음
htpps 인증서 설치 쉬움
로드밸런싱 가능
로그남기기
iP차단기능

nginx , caddy 같은거씀

도커로 엔진엑스 띄어보는 명령어

```d
FROM nginx:1.27.3-alpine


COPY ./nginx.conf /etc/nginx/conf.d/nginx.conf

RUN rm /etc/nginx/conf.d/default.conf

  

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

근데 이렇게 80번포트로 만들고 8080으로 내보내는 reverse proxy설정을해도 이게 다른 컴퓨터라서 안됨

그렇기 떄문에 네트워크를 만들어서 하나의 네트워크안에 가상컴퓨터들을 넣고 실행시켜서 둘이 매칭시키는거임