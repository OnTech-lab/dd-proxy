const app = require('express')();
const {createProxyMiddleware} = require('http-proxy-middleware');

const PORT = process.env.PORT || 5000;

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');   
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  next();
});

app.use('**', createProxyMiddleware({target: 'https://www.mining-dutch.nl', changeOrigin: true}));

app.listen(PORT, () => {
  console.log(`It's live! PORT=${PORT}`)
});
