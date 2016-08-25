import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service('session'),
 torii: Ember.inject.service('torii'),
actions: {
  authenticateOAuth() {
    this.get('session').authenticate('authenticator:torii', 'gitlab-oauth2');
  },
  authenticateOAuthPassword(){
    let { identification, password } = this.getProperties('identification', 'password');
    this.get('session').authenticate('authenticator:gitlab-oauth2-password', identification, password).catch((reason) => {
      this.set('errorMessage', reason.error || reason);
    });
  },
  authenticateToken(){
    let token = this.get('token');
    this.get('session').authenticate('authenticator:gitlab-api-key', token).catch((reason) => {
      this.set('errorMessage', reason.error || reason);
    });
  }
}
});
