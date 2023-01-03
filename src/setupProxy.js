/* eslint-disable import/no-extraneous-dependencies */
const { createProxyMiddleware } = require("http-proxy-middleware");

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

  app.use(
    createProxyMiddleware("/youtube-video-rank/*", {
      target: "https://kr.noxinfluencer.com",
      changeOrigin: true,
    }),
  );
};
