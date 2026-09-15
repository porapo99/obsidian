require("dotenv").config();
const { globSync } = require("glob");

module.exports = async (data) => {
  let baseUrl = process.env.SITE_BASE_URL || "";
  if (baseUrl && !baseUrl.startsWith("http")) {
    baseUrl = "https://" + baseUrl;
  }
  if (baseUrl.endsWith("/")) {
    baseUrl = baseUrl.slice(0, -1);
  }
  let themeStyle = globSync("src/site/styles/_theme.*.css")[0] || "";
  if (themeStyle) {
    themeStyle = themeStyle.split("site")[1];
  }
  let bodyClasses = [];
  let noteIconsSettings = {
    filetree: false,
    links: false,
    title: false,
    default: process.env.NOTE_ICON_DEFAULT,
  };

  const styleSettingsCss = process.env.STYLE_SETTINGS_CSS || "";
  const styleSettingsBodyClasses = process.env.STYLE_SETTINGS_BODY_CLASSES || "";

  if (process.env.NOTE_ICON_TITLE && process.env.NOTE_ICON_TITLE == "true") {
    bodyClasses.push("title-note-icon");
    noteIconsSettings.title = true;
  }
  if (
    process.env.NOTE_ICON_FILETREE &&
    process.env.NOTE_ICON_FILETREE == "true"
  ) {
    bodyClasses.push("filetree-note-icon");
    noteIconsSettings.filetree = true;
  }
  if (
    process.env.NOTE_ICON_INTERNAL_LINKS &&
    process.env.NOTE_ICON_INTERNAL_LINKS == "true"
  ) {
    bodyClasses.push("links-note-icon");
    noteIconsSettings.links = true;
  }
  if (
    process.env.NOTE_ICON_BACK_LINKS &&
    process.env.NOTE_ICON_BACK_LINKS == "true"
  ) {
    bodyClasses.push("backlinks-note-icon");
    noteIconsSettings.backlinks = true;
  }
  if (styleSettingsCss) {
    bodyClasses.push("css-settings-manager");
  }
  if (styleSettingsBodyClasses) {
    bodyClasses.push(styleSettingsBodyClasses);
  }

  let timestampSettings = {
    timestampFormat: process.env.TIMESTAMP_FORMAT || "MMM dd, yyyy h:mm a",
    showCreated: process.env.SHOW_CREATED_TIMESTAMP == "true",
    showUpdated: process.env.SHOW_UPDATED_TIMESTAMP == "true",
  };
  const meta = {
    env: process.env.ELEVENTY_ENV,
    theme: process.env.THEME,
    themeStyle,
    bodyClasses: bodyClasses.join(" "),
    noteIconsSettings,
    timestampSettings,
    baseTheme: process.env.BASE_THEME || "dark",
    siteName: process.env.SITE_NAME_HEADER || "Digital Garden",
    siteDescription:
      process.env.SITE_DESCRIPTION ||
      "프론트엔드 개발자 최준엽의 개발 블로그. JavaScript, TypeScript, React, Next.js를 공부하며 만난 이슈와 기록을 정리합니다.",
    mainLanguage: process.env.SITE_MAIN_LANGUAGE || "en",
    siteBaseUrl: baseUrl,
    styleSettingsCss,
    buildDate: new Date(),
  };

  return meta;
};
