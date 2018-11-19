import { Request, Response, NextFunction} from 'express';

import OktaJwtVerifier from '@okta/jwt-verifier';

const oktaJwtVerifier = new OktaJwtVerifier({
  clientId: '0oahib7u09msp7nRR0h7',
  issuer: 'https://dev-204621.oktapreview.com/oauth2/default'
});

export async function oktaAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const token = (req as any).token;
    if (!token) {
      return res.status(401).send({ error: true, code: 'NO_TOK',  message: 'No token provided.' });
    }
    const jwt = await oktaJwtVerifier.verifyAccessToken(token);
    req['user'] = {
      uid: jwt.claims.uid,
      email: jwt.claims.sub
    };
    next();
  }
  catch (err) {
    return res.status(401).send({ error: true, code: 'EXP_TOK', message: 'Token has expired.' });
  }
}
