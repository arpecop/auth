require('dotenv').config();
const serverless = require('serverless-http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const compression = require('compression');
const cors = require('cors');

app.use(compression());
app.use(cors());
app.use(bodyParser.json());
const { put, query } = require('./src/db.js');

async function test() {
  const test = await query({
    collection: 'newsbg',
    limit: 50,
    descending: false,
    fields: ['title', 'image', 'vreme'],
  });
}
test()
app.post('/register', async (req, res) => {

});

app.post('/db/', async (req, res) => {
  const data = await query(req.body);
  res.json(data);
});
app.post('/dbput/', async (req, res) => {
  const data = await put(req.body);
  res.json(data);
});

if (!process.env.LAMBDA_RUNTIME_DIR) {
  app.listen(process.env.PORT || 3001);
  console.log('working on localhost');
}

module.exports.handler = serverless(app);