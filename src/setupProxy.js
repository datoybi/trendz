const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/trends/trendingsearches", {
      target: "https://trends.google.co.kr",
      secure: false,
      changeOrigin: true,
    })
  );
};
