---
{"제목":"Permission","날짜":"2026-08-28","tags":["AI"],"dg-publish":true,"permalink":"/공부/AI/claude/Permission/","dgPassFrontmatter":true,"created":"2026-08-28T11:30:51.601+09:00","updated":"2026-09-15T11:02:22.204+09:00","dg-note-properties":{"제목":"Permission","날짜":"2026-08-28","tags":["AI"]}}
---

왜 Permission을 배워야하는가?

rm -rf 같은 지우는 명령이나 env등의 중요한 정보등을 접근하는 명령어를 사용하지 않게 하기위함

유저들이 프롬프트를 주고난뒤 Claude는 이를 접근해도되냐 승인을 요구하는데 이때 일어나는 승인 피로가 많다고 합니다. 하지만 Permission을 알고 나면 이 피로를 줄일 수 있습니다.

1. allow : 승인 - 자주 쓰는 안전한 명령어는 자동 처리 승인
2. deny : 차단 - `env`, `main`브랜치에 직접 push 같은 위헌한건 차단 (allow보다 우선 적용)
3. ask : 물어보기 - 애매한 것만 골라서 물어보게

```json
"permissions" : {
	"allow" : [
		"Bash(num run *)",
		"Bash(git commit *)"
	],
	"deny" : [
		"Bash(git push *)",
		"Read(./.env)"
	]
}
```
