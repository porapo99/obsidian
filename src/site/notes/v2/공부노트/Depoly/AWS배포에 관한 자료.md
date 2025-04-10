---
{"dg-publish":true,"permalink":"/v2//depoly/aws/","tags":["Deploy","AWS"],"noteIcon":""}
---

# AWS 서버 설정 가이드

## IAM (Identity and Access Management)
- AWS의 일일 계정 (하위 계정 설정)

## 운영 체제 선택

- Ubuntu
  - 이유: 많은 사람들이 사용하는만큼 안정적이고 신뢰할수있는 os이기때문 

## 인스턴스 설정
- 인스턴스 유형: t2.micro (프리티어)
- 키 페어:
  - PEM 또는 PPK 형식 (OpenSSH, PuTTY 각각 사용 가능)
  - PEM으로 생성 권장
- 보안 그룹 설정:
  - SSH 트래픽 허용
- 스토리지 구성: 데이터 저장소로 사용

## 네트워크 설정
- 퍼블릭 IP: 외부에서 접근 가능한 IP
- 프라이빗 IPv4: 외부에서 접근 불가능

## 서버 접근 및 초기 설정
1. SSH로 서버 접근:
   ```
   ssh -i [키 파일 경로] [사용자명]@[퍼블릭 IP]
   ```
2. 기본 소프트웨어 설치:
   - Node.js
   - npm
   - git clone등

## 보안 그룹 (방화벽) 설정
- 열어야 할 포트:
  - 8080 (애플리케이션 서버)
  - 80 (HTTP)
  - 443 (HTTPS)
  - 22 (SSH)

## 추가 서버 설정
- PM2 설치 (프로세스 관리자)
- Nginx 설치 및 설정 (웹 서버/리버스 프록시)

## 도메인 설정
- Route 53을 사용하여 도메인 연결 및 관리


[참고자료](https://velog.io/@sargadi/AWS-EC2%EB%A1%9C-Next.js-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0)
