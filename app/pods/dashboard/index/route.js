import Ember from 'ember';

export default Ember.Route.extend({
  api: Ember.inject.service(),
  model() {
    const self = this;
    return this.get('api').request('api/v3/projects/owned').then(function(result){
      self.store.unloadAll('project');
      self.store.pushPayload('project', result);

      return self.store.peekAll('project');
    });
  }
});
