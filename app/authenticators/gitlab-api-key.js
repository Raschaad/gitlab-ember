import Ember from 'ember';
import Base from 'ember-simple-auth/authenticators/base';

export default Base.extend({
  ajax: Ember.inject.service(),

  restore(/*data*/) {

  },
  authenticate(token) {
    console.log(token);
    return this.get('ajax').request(`https://gitlab.com/api/v3/user?private_token=${token}`);
  },
  invalidate(/*data*/) {

  }
});
