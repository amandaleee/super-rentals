import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals'); //restarts your app between tests

test('visiting /', function(assert) { //assert calls functions that check the conditions in the test env. 
	//if one assert is passing, the test succeeds
	visit('/');

	andThen(function() {
		assert.equal(currentURL(), '/rentals' );// will return true - this used to say '/' before we set up the redirect
		//the third param here is what is printed in the QUnit output screen. 
		// if you don't put in a third string, it just says 'okay'
	});
});

test('display rentals on homepage', function(assert) {
	visit('/');
	andThen(function(){
		assert.equal(currentURL(), '/rentals', 'should redirect automatically');
	});
});
//these two tests are the same lol

test('link to company info', function(assert) {
	visit('/');
	click('.about-link'); //you can use a jquery/css selector here
	andThen(function() {
		assert.equal(currentURL(), '/about', 'should navigate to about')
	});
});

test('link to company contact', function(assert) {
	visit('/');
	click('a:contains("Contact")'); //you can also use a string - 'contact' won't work, just 'Contact'. case sensitive
	andThen(function() {
		assert.equal(currentURL(), '/contact', 'should navigate to contact');
	});
}); 

test('list available rentals', function(assert) {
	visit('/');
	andThen(function() {
		assert.equal(find('.listing').length, 3, 'show three listings'); //find works with css selectors like click
		// also not unlike the .find() method in jquery
	});
});

// test('filter list by city', function(assert) {

// });

// test('show details for selected rental', function(assert) {

// });
