import Ember from 'ember';
import AjaxService from 'ember-ajax/services/ajax';

export default AjaxService.extend({
  host: 'http://gitlab.com',
  session: Ember.inject.service(),

  request(url, options) {
    url = url + `?private_token=${this.get('session.data.authenticated.private_token')}`;
    const hash = this.options(url, options);
    return new Ember.RSVP.Promise((resolve, reject) => {
      this._makeRequest(url, hash)
        .then(({
          response
        }) => {
          resolve(response);
        })
        .catch(({
          response
        }) => {
          reject(response);
        });
    }, `ember-ajax: ${hash.type} ${hash.url} response`);
  },
});
