const express = require('express');
const client = require('prom-client');

const app = express();

// collect default metrics
client.collectDefaultMetrics();

// main route
app.get('/', (req, res) => {
  res.send(process.env.APP_MESSAGE || 'Hello DevOps 🚀');
});

// metrics route
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(3000, () => {
  console.log('App running on port 3000');
});