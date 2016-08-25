import Ember from 'ember';
import ToriiAuthenticator from 'ember-simple-auth/authenticators/torii';

const {RSVP} = Ember;

export default ToriiAuthenticator.extend({
  torii: Ember.inject.service(),
  ajax: Ember.inject.service(),

  authenticate() {
    let self = this;
    return new RSVP.Promise((resolve, reject) => {
      this._super(...arguments).then((data) => {
        var clientId = '4c605021ea85362d64ef8511b8b509d41df49ea98b59421a69f922fe44dd2e92';
        var clientSecret = '0a143fdf80ca65c3d68b6eb696d811f765cf3e325ad7fab86ae44cb71ead4c19';
        var url = `https://gitlab.com/oauth/token?grant_type=authorization_code&client_id=${clientId}&client_secret=${clientSecret}&code=${data.authorizationCode}&redirect_uri=${data.redirectUri}`;
        self.get('ajax').request(url, {
          method: 'POST'
        }).then((response) => {
          response['provider'] = data.provider;
          resolve(response);
        }, reject);
      }, reject);
    });
  }
});
