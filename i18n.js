module.exports = {
  locales: ["uz", "ru", "en"],
  defaultLocale: "uz",
  loadLocaleFrom: (lang, ns) =>
    import(`locales/${lang ? lang : "uz"}/${ns}.json`).then((m) => m.default),
  pages: {
    "*": ["common"],
  },
  localeDetection: false,
};
