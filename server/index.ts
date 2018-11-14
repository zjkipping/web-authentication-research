import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { promisify } from 'util';

import CONFIG from './config.json';

const app: express.Application = express();

app.use(cors());
app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  return res.status(200).send({});
});

const runServer = async () => {
  try {
    const port = process.env.PORT || CONFIG.port || 8080;
    await promisify(app.listen).bind(app)(port);
    console.log('Started Server On Port: ' + port);
  } catch (err) {
    console.log('Failed to Start Server! ', err.message);
  }
}

runServer();
