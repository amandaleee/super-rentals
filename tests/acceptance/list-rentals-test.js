import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals'); //restarts your app between tests

test('visiting /', function(assert) { //assert calls functions that check the conditions in the test env. 
	//if one assert is passing, the test succeeds
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/rentals');// will return true - this used to say '/' before we set up the redirect
  });
});

test('display rentals on homepage', function(assert) {
	visit('/');
	andThen(function(){
		assert.equal(currentURL(), '/rentals', 'should redirect automatically');
	});
});
//these two tests are the same lol

// test('link to company info', function(assert) {

// });

// test('link to company contact', function(assert) {

// }); 

// test('list available rentals', function(assert) {

// });

// test('filter list by city', function(assert) {

// });

// test('show details for selected rental', function(assert) {

// });
