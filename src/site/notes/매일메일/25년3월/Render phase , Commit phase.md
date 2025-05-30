---
{"제목":"Render phase , Commit phase","날짜":"2025-03-21","tags":["매일메일","React"],"dg-publish":true,"permalink":"/매일메일/25년3월/Render phase , Commit phase/","dgPassFrontmatter":true,"created":"2025-03-31T01:13:27.072+09:00","updated":"2025-05-08T04:41:37.941+09:00"}
---

## ❓질문

리액트의 render phase와 commit phase에 대해서 설명해주세요.

---
## 💡 조사하기전 내가 알고 있던 내용

리액트가 어떻게 상태가 변경됐는지 감지하고 업데이트를 하는지에 대한 2단계 렌더 페이즈와 커밋페이즈입니다.

먼저 렌더 페이즈때는 가상돔에 파이버 트리를 순회하며 달라진 점을 체크합니다 그후 가상돔과 prev 가상돔을 비교(Diffing)하여 새로 업데이트할 준비를 하는게 렌더 페이즈입니다.

후 커밋페이즈때 실제 DOM에 가상 DOM을 입혀 업데이트합니다 이 방식은 대부분의 상황에서 신뢰성있고 빠른 업데이트를 진행하게됩니다. 이 과정을 재조정이라고합니다.

---
## 🏫 정리한 내용

`render 페이즈` : 상태나 props의 변화로 어떤 UI가 변경되어야하는지 Fiber tree를 순회하여 체크를 함 이 과정은 실제 DOM에서 일어나지않고 가상 DOM에서 일어납니다. 
이는 순수 계산 과정이므로 작업은 중단되거나 다시 실행가능합니다.
Concurrent Mode를 통해 비동기 처리도 가능합니다.

`Commit 페이즈` : Fiber tree를 순회하면서 체크해둔 부분을 통해 실제 DOM과 가상DOM을 동기화하는 작업을 실행합니다. 업데이트할때 useEffact등 부과 효과를 진행합니다.

특징으로는 단계적 진행과 병목 관리가 있습니다.

렌더 페이즈 -> 커밋 페이즈로 바로 넘어가는게 아니라 다른 우선순위가 있다면 이를 처리하고 렌더링됩니다.

모든 변경사항이 Fiber Tree에서 준비되고 커밋 페이즈로 넘어가서 일관성을 유지하고 리렌더링을 방지합니다.