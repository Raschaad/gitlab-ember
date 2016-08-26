import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  archived: DS.attr('boolean'),
  avatar_url: DS.attr('string'),
  build_enabled: DS.attr('boolean'),
  container_registry_enabled: DS.attr('boolean'),
  creator_id: DS.attr('number'),
  default_branch: DS.attr('string'),
  description: DS.attr('string'),
  forks_count: DS.attr('number'),
  http_url_to_repo: DS.attr('string'),
  issues_enabled: DS.attr('boolean'),
  last_activity_at: DS.attr('date'),
  merge_requests_enabled: DS.attr('boolean'),
  name: DS.attr('string'),
  name_with_namespace: DS.attr('string'),
  path: DS.attr('string'),
  public: DS.attr('boolean'),
  public_builds: DS.attr('boolean'),
  shared_runners_enabled: DS.attr('boolean'),
  snippets_enabled: DS.attr('boolean'),
  ssh_url_to_repo: DS.attr('string'),
  star_count: DS.attr('number'),
  visibility_level: DS.attr('number'),
  web_url: DS.attr('string'),
  wiki_enabled: DS.attr('boolean'),

  namespace: DS.belongsTo('namespace'),


  isPrivate: Ember.computed('visibility_level', function(){
    return this.get('visibility_level') === 0;
  }),

  isInternal: Ember.computed('visibility_level', function(){
    return this.get('visibility_level') === 10;
  }),

  isPublic: Ember.computed('visibility_level', function(){
    return this.get('visibility_level') === 20;
  })
});
