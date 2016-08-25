import { test } from 'qunit';
import moduleForAcceptance from 'gitlab/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | index');

test('visiting /index redirects to dashboard', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/dashboard');
  });
});
