const express = require("express");
const {expressjwt: jwt} = require("express-jwt");
const jwks = require("jwks-rsa");
//const auth0 = require('auth0-js');

const router = express.Router();

const authConfig = {
  domain: 'dev-2llhwpnt06dhuqy3.us.auth0.com',
  audience: 'https://dev-2llhwpnt06dhuqy3.us.auth0.com/api/v2/',
  clientID: 'Hpt83nEK3MsdzgUKBPayjcJz9x84qObs',
  redirectUri: 'http://localhost:3001/auth',
  responseType: 'token ',
  scope: 'openid'
};

const checkJwt = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
  }),
  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`, 
  algorithms: ["RS256"],
});

module.exports = router