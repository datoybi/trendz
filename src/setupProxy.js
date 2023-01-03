const { createProxyMiddleware } = "http-proxy-middleware";

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/trends/trendingsearches", {
      target: "https://trends.google.co.kr",
      secure: false,
      changeOrigin: true,
    }),
  );

  app.use(
    createProxyMiddleware("/mostread.json", {
      target: "https://www.bbc.com/korean",
      changeOrigin: true,
    }),
  );
};
