import { Router } from 'express';
import request from 'request';

import { checkJwt } from './auth0';

export const auth0Router: Router = Router();

auth0Router.use(checkJwt);

auth0Router.get('/', (req, res) => {
  const token = (req as any).token;
  const requestOptions = {
    url: 'https://outis.auth0.com/userinfo',
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  request.get(requestOptions, (error: any, _response: any, body: any) => {
    if (error) {
      res.status(403).send(error)
    } else {
      res.status(200).send({ user: JSON.parse(body), message: 'protected message from the server!'});
    }
  });
});
