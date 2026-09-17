---
{"제목":"Ralph Loop","날짜":"2026-09-15","tags":null,"dg-publish":true,"permalink":"/공부/AI/claude/Ralph Loop/","dgPassFrontmatter":true,"created":"2026-09-15T11:09:53.589+09:00","updated":"2026-09-17T13:50:22.972+09:00","dg-note-properties":{"제목":"Ralph Loop","날짜":"2026-09-15","tags":null}}
---


Ralph Loop는 Claude Code 에이전트를 계속 반복 실행시켜서 작업을 끝까지 밀어붙이는 개발 방법론입니다. 핵심은 단순한 `while true` 개념인데, 동일한 프롬프트 파일을 에이전트한테 계속 먹여서 완료될 때까지 스스로 개선하게 만드는 방식입니다. 이름은 심슨 가족의 랄프 위검(Ralph Wiggum)에서 따왔고 "끈질긴 반복"이라는 정신을 상징합니다.

먼저 작동 원리를 보면, `Stop` hook을 이용해서 Claude 세션이 종료를 시도하는 순간을 가로챕니다. 명령을 한 번 실행하면 이후로는 Claude Code가 알아서 루프를 돕니다. 작업을 수행하고 종료를 시도하면 `Stop` hook이 종료를 차단하고 같은 프롬프트를 다시 밀어넣어서 완료될 때까지 이 과정을 반복하는 구조입니다. 별도의 외부 bash 루프 없이 현재 세션 내부에서 자체적으로 순환합니다. `Stop` hook 자체는 `hooks/stop-hook.sh`에 있습니다.

명령어는 아래처럼 씁니다.

```
/ralph-loop "<prompt>" --max-iterations <n> --completion-promise "<text>"
```

`--max-iterations`는 N번 반복 후 정지시키는 옵션이고 기본값은 무제한입니다. `--completion-promise`는 완료를 알리는 문구를 지정하는 옵션입니다. 취소는 `/cancel-ralph`로 합니다.

```
/ralph-loop "Build a REST API for todos. Requirements: CRUD operations, \
    input validation, tests. Output COMPLETE when done." \
    --completion-promise "COMPLETE" \
    --max-iterations 50
```

이렇게 실행하면 구현 → 테스트 실행 → 실패 확인 → 테스트 결과 기반 버그 수정 → 요구사항 충족까지 반복 → completion promise 문구 출력 순서로 동작합니다.

철학은 네 가지입니다. 완벽보다 반복입니다. 첫 시도에 완벽할 필요 없이 루프가 알아서 다듬어가게 두면 됩니다. 실패도 데이터입니다. "결정론적으로 나쁜" 실패는 예측 가능하고 정보가 되기 때문에 프롬프트 튜닝에 활용할 수 있습니다. 오퍼레이터 실력이 중요합니다. 성공 여부는 결국 좋은 프롬프트를 쓰는 능력에 달려 있습니다. 끈기가 이깁니다. 재시도 로직은 루프가 자동으로 처리해주니 계속 시도하면 됩니다.

성공 기준이 명확한 작업, 테스트 통과시키기 같은 반복·개선 작업, 자리를 비워도 되는 그린필드 프로젝트, 자동 검증(테스트·린터)이 있는 작업에 잘 맞습니다. 단 인간의 판단이나 설계 결정이 필요한 작업, 일회성 작업, 성공 기준이 불명확한 작업, 프로덕션 디버깅에는 안 맞습니다.

이 구조를 Loop Engineering의 "Act → Observe → Reason → Verify" 일반 원칙에 대입해보면, Ralph Loop는 그 원칙을 Claude Code 안에서 `Stop` hook이라는 구체적 메커니즘으로 구현한 사례로 볼 수 있습니다. 단 `--max-iterations` 같은 cap 없이 무제한으로 돌리면 같은 에러를 계속 반복하며 비용만 태우는 "Runaway Loop"에 빠질 위험은 감안해야 합니다.

플러그인 이름은 최근에 `ralph-wiggum`에서 `ralph-loop`로 바뀌었습니다(라이선스·상표권 관련 이유). 공식 마켓플레이스 기준 설치 명령은 아래와 같습니다.

```
/plugin marketplace add anthropics/claude-code
/plugin install ralph-loop@claude-plugins-official
```

슬래시 명령어 자체는 그대로 `/ralph-loop "..."`이고 플러그인 이름만 바뀐 겁니다. 참고로 Claude Code v1.0.20 이후 보안 패치(CVE-2025-54795)가 멀티라인 bash 명령을 차단하는데, 커맨드 파일이 멀티라인 bash를 쓰면 이 보호에 걸려서 `Bash command permission check failed... Command contains newlines` 같은 에러가 날 수 있다는 보고가 있습니다.

Ralph 자체는 Geoffrey Huntley가 2025년 7월에 만든 기법입니다. 원형은 bash 한 줄이 전부입니다.

```bash
while :; do cat PROMPT.md | claude-code ; done
```

Huntley 본인도 "Ralph is a Bash loop", "brute force meets persistence"라고 표현합니다. 무지하지만 집착하고 낙천적인 랄프 위검 캐릭터 그대로입니다. 공식 플러그인은 이 bash 루프를 세션 안으로 옮긴 것이라 `Stop` hook이 exit code 2를 반환해서 종료를 막고 같은 프롬프트를 다시 주입하는 식으로 동작합니다.

Claude Code를 만든 Boris Cherny도 "verification drives everything"이라고 말합니다. 검증 없이 돌리는 루프는 잘 되길 바라는 것과 다를 게 없다는 뜻입니다.

실제 사례로 Huntley는 3개월짜리 Ralph 루프로 프로그래밍 언어를 통째로 만들었고 YC 해커톤 팀들은 하룻밤에 API 비용 $297로 repo 6개 이상을 완성했습니다. 반대 사례도 있습니다. completion-promise 없이 `--max-iterations`도 0(무제한)으로 두고 모호한 프롬프트를 돌려서 1,966번 반복된 사고가 실제로 있었습니다.

최근(2026년) Anthropic이 플러그인 말고도 네이티브 대안을 Claude Code에 넣었습니다. v2.1.139 이후 `/loop`, `/goal`, `/batch` 명령어가 그것입니다. `Stop` hook의 정확한 동작이 필요할 때만 플러그인을 쓰고 그 외엔 네이티브 명령어를 먼저 쓰는 분위기입니다.

마지막으로 Loop Engineering과의 관계를 정리하자면 Loop Engineering이 6요소를 갖춘 설계 방법론이라면 Ralph는 단일 프롬프트를 반복하는 구체적인 구현체입니다. Ralph는 Goal, Loop, Termination은 갖췄지만 Verification은 기본이 completion-promise 자기선언이라 약합니다. 그래서 테스트나 린터 같은 외부 검증과 결합해야 안전하고 요즘은 이 약점을 보완한 `/loop`, `/goal` 쪽으로 옮겨가는 추세입니다.
