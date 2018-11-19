import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import bearerToken from 'express-bearer-token';
import { promisify } from 'util';

import CONFIG from './config.json';
import { oktaRouter } from './oktaRouter';
import { auth0Router } from './auth0Router';

const router: express.Router = express.Router();
router.use('/okta', oktaRouter);
router.use('/auth0', auth0Router);

const app: express.Application = express();
app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bearerToken());
app.get('/', async (_req, res) => {
  return res.status(200).send({});
});
app.use('/api', router);

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
