import DS from 'ember-data';

export default DS.Model.extend({
  avatar_url: DS.attr('string'),
  bio: DS.attr('string'),
  created_at: DS.attr('date'),
  linkedin: DS.attr('string'),
  location: DS.attr('string'),
  name: DS.attr('string'),
  skype: DS.attr('string'),
  state: DS.attr('string'),
  twitter: DS.attr('string'),
  username: DS.attr('string'),
  web_url: DS.attr('string'),
  website_url: DS.attr('string')
});
