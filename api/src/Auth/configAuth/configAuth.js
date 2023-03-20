import auth0 from 'auth0-js';

const auth0Config = {
  domain: 'dev-2llhwpnt06dhuqy3.us.auth0.com',
  clientID: 'Hpt83nEK3MsdzgUKBPayjcJz9x84qObs',
  redirectUri: 'http://localhost:3001/',
  responseType: 'token ',
  scope: 'openid'
};

const auth0Client = new auth0.WebAuth(auth0Config);