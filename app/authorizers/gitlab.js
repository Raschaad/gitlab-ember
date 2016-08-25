import Base from 'ember-simple-auth/authorizers/base';

export default Base.extend({
  authorize(data, block) {
    block('PRIVATE-TOKEN', data.private_token);
  }
});
