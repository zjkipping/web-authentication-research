export const environment = {
  production: true,
  apiURL: 'https://auth-research.herokuapp.com/api'
};

export const oktaConfig = {
  issuer: 'https://dev-204621.oktapreview.com/oauth2/default',
  redirectUri: 'https://auth-research.firebaseapp.com/okta/callback',
  clientId: '0oahib7u09msp7nRR0h7'
};

export const auth0Config = {
  clientID: '90a92MOerxodw2tkGo2r4ct1tTTGko5R',
  domain: 'outis.auth0.com',
  responseType: 'token id_token',
  redirectUri: 'https://auth-research.firebaseapp.com/auth0/callback',
  scope: 'openid profile email',
  audience: 'https://outis.auth0.com/api/v2/',
  issuer: 'outis.auth0.com'
};
