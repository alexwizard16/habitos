// gateway/app.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 8081;

app.use('/users', createProxyMiddleware({ target: 'http://user-service:5006', changeOrigin: true }));
app.use('/habits', createProxyMiddleware({ target: 'http://habit-service:5007', changeOrigin: true }));
app.use('/reminders', createProxyMiddleware({ target: 'http://reminder-service:5008', changeOrigin: true }));
app.use('/statistics', createProxyMiddleware({ target: 'http://statistics-service:5009', changeOrigin: true }));
app.use('/notifications', createProxyMiddleware({ target: 'http://notification-service:5010', changeOrigin: true }));

app.listen(port, () => {
  console.log(`Gateway listening at http://localhost:${port}`);
});
