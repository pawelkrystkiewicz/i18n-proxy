const http = require("http");
const acceptLanguageParser = require("accept-language-parser");
const config = require("../i18n.json");

const { defaultLocale, locales } = config;

function detectLocale(acceptLanguage) {
  const languages = acceptLanguageParser.parse(acceptLanguage);
  for (const lang of languages) {
    if (locales.includes(lang.code)) {
      return lang.code;
    }
  }
  return defaultLocale;
}

const server = http.createServer((req, res) => {
  const host = req.headers.host || "";
  const acceptLanguage = req.headers["accept-language"] || "";
  const subdomain = host.split(".")[0];
  const referer = req.headers.referer || "";
  const protocol = referer.indexOf("https://") === 0 ? "https://" : "http://";
  console.log(protocol, referer);

  if (!locales.includes(subdomain)) {
    const detectedLocale = detectLocale(acceptLanguage);
    const newHost = `${detectedLocale}.${host.replace(/^.*?\./, "")}`;

    res.writeHead(302, { Location: `${protocol}${newHost}${req.url}` });
    return res.end();
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(`Locale detected: ${subdomain}`);
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
