import jwt from 'express-jwt';
import jwksRsa from 'jwks-rsa';

export const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: "https://outis.auth0.com/.well-known/jwks.json"
  }),
  audience: 'https://outis.auth0.com/api/v2/',
  issuer: "https://outis.auth0.com/",
  algorithms: ['RS256']
});
