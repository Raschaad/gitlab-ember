import Oauth2 from 'torii/providers/oauth2-code';
import {configurable} from 'torii/configuration';

/**
 * This class implements authentication against Azure
 * using the OAuth2 authorization flow in a popup window.
 * @class
 */
var GitlabOauth2 = Oauth2.extend({
  name:       'gitlab-oauth2',
  baseUrl:    'https://gitlab.com/oauth/authorize',

  // additional url params that this provider requires
  requiredUrlParams: ['client_id', 'state'],
  responseParams: ['code'],

  clientId: configurable('client_id', '4c605021ea85362d64ef8511b8b509d41df49ea98b59421a69f922fe44dd2e92'),
  //clientSecret: configurable('client_secret', '0a143fdf80ca65c3d68b6eb696d811f765cf3e325ad7fab86ae44cb71ead4c19'),
  //apiKey: configurable('apiKey', '0a143fdf80ca65c3d68b6eb696d811f765cf3e325ad7fab86ae44cb71ead4c19'),
  state: configurable('state', 'blub'),

  response_type: "code",

  redirectUri: configurable('redirectUri','http://localhost:4200'),
});

export default GitlabOauth2;
