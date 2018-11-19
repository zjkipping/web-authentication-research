import { Router } from 'express';

import { oktaAuth } from './okta';

export const oktaRouter: Router = Router();

oktaRouter.use(oktaAuth);

oktaRouter.get('/', (req: any, res) => {
  res.status(200).send({ user: req.user, message: 'protected message from the server!'});
});
