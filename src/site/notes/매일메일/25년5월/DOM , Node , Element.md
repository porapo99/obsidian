---
{"제목":"DOM , Node , Element","날짜":"2025-05-30","tags":["매일메일"],"dg-publish":true,"permalink":"/매일메일/25년5월/DOM , Node , Element/","dgPassFrontmatter":true,"created":"2025-05-30T22:11:20.969+09:00","updated":"2025-05-30T22:17:11.058+09:00"}
---

## ❓질문

DOM 에서 Node와 Element의 차이에 대해 설명해주세요.

---
## 💡 조사하기전 내가 알고 있던 내용

Node가 데이터의 작은 단위를 의미하는건 알겠지만 아마 Dom에서 의미하는 Node에 대한 정확한 정보가 없어서 잘 모르겠다.

---
## 🏫 정리한 내용

`Node`는 DOM을 구성하는 가장 기본적인 구성 단위입니다. Node에는 여러 가지 타입이 존재합니다. "Document Node"는 HTML 문서 전체를 나타내는 루트 노드이며 "Element Node"는 HTML 태그를 나타내고, "Text Node" 텍스트 내용을, "Comment Node"는 주석을 나타냅니다. 이처럼 Node는 DOM 트리의 모든 구성 요소를 포함하는 포괄적인 개념입니다.

`Element`는 Node의 특정 타입 중 하나로 HTML이나 XML 태그로 표현되는 객체를 의미합니다. 쉽게 말해 모든 Element는 Node입니다.

Node와 Element의 차이로는

속성 중에 `textContent`라는 속성은 Node의 속성이므로 모든 종류의 Node에서 사용할 수 있지만, `innerHTML`은 Element의 속성이므로 Element에서만 사용할 수 있습니다.

또한, `childNodes`와 `children` 속성에도 중요한 차이가 있습니다. Node의 속성인 `childNodes`는 주어진 요소의 모든 자식 Node를 포함하는 `NodeList`를 반환합니다. 여기에는 Element뿐만 아니라 모든 종류의 Node가 포함됩니다. 따라서 HTML 태그뿐 아니라 텍스트, 주석도 `childNodes`에 포함됩니다. 반면 Element의 속성인 `children`은, Element 타입의 자식 노드만을 포함하는 `HTMLCollection`을 반환합니다. 여기에는 텍스트 노드나 주석 노드는 제외되고 HTML 요소 노드만 포함됩니다.