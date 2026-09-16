// Put your computations here.

// 노트 하나를 홈 화면 목록/랜덤 풀에서 쓸 최소 메타로 변환한다.
// (이름·permalink 규칙은 filetreeUtils.getPermalinkMeta와 동일하게 맞춘다)
function getNoteMeta(note) {
  const parts = note.filePathStem.split("/");
  const name = note.data.title || parts[parts.length - 1];
  const permalink = note.data.permalink || "/";

  let folders = [];
  try {
    folders = note.data["dg-path"]
      ? note.data["dg-path"].split("/")
      : note.filePathStem.split("notes/")[1].split("/");
    folders = folders.slice(0, -1);
  } catch {
    // ignore
  }

  const created = note.data.created || note.data.updated || "";
  return {
    name,
    permalink,
    folder: folders.join(" / "),
    created,
    // "2026-09-15T11:09:04.606+09:00" → "2026.09.15" (Obsidian이 KST 오프셋으로 기록하므로 앞 10자 사용)
    dateLabel: created ? String(created).slice(0, 10).replace(/-/g, ".") : "",
  };
}

function userComputed(data) {
  const notes = (data.collections.note || [])
    .filter((n) => !(n.data.tags || []).includes("gardenEntry") && !n.data.hide)
    .map(getNoteMeta);

  // 홈 "최근 글": 작성일(created) 기준 최신 6개
  const recentNotes = notes
    .filter((n) => n.created)
    .sort((a, b) => Date.parse(b.created) - Date.parse(a.created))
    .slice(0, 6);

  // 홈 "이번주의 랜덤 글": 브라우저에서 주차 시드로 하나 고를 후보 [이름, 경로]
  const randomPool = notes.map((n) => [n.name, n.permalink]);
  // <script> 안에 인라인되므로 "<"는 이스케이프
  const randomPoolJson = JSON.stringify(randomPool).replace(/</g, "\\u003c");

  // 노트 페이지 폴더 경로 (breadcrumb)
  let breadcrumb = [];
  try {
    if (data.page && data.page.filePathStem && data.page.filePathStem.includes("notes/")) {
      breadcrumb = data["dg-path"]
        ? data["dg-path"].split("/").slice(0, -1)
        : data.page.filePathStem.split("notes/")[1].split("/").slice(0, -1);
    }
  } catch {
    // ignore
  }

  return { recentNotes, randomPoolJson, breadcrumb };
}

exports.userComputed = userComputed;
