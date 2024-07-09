const express = require('express');
const app = express();
const port = 3000;

const requestLogger = (req, res, next) => {
  const { method, url, ip } = req;
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${method} ${url} - ${ip}`);
  next();
};

app.use(requestLogger);

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
