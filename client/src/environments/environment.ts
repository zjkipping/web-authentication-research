// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: 'http://localhost:8080/api'
};

export const oktaConfig = {
  issuer: 'https://dev-204621.oktapreview.com/oauth2/default',
  redirectUri: 'http://localhost:4200/okta/callback',
  clientId: '0oahib7u09msp7nRR0h7'
};

export const auth0Config = {
  clientID: '90a92MOerxodw2tkGo2r4ct1tTTGko5R',
  domain: 'outis.auth0.com',
  responseType: 'token id_token',
  redirectUri: 'http://localhost:4200/auth0/callback',
  scope: 'openid profile email',
  audience: 'https://outis.auth0.com/api/v2/',
  issuer: 'outis.auth0.com'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
