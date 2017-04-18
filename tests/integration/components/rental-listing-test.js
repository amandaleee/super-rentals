import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

let rental = Ember.Object.create({
	image: 'fake.png',
	title: 'test-title',
	owner: 'test-owner',
	type: 'test-type',
	city: 'test-city',
	bedrooms: 3
});

moduleForComponent('rental-listing', 'Integration | Component | rental listing', {
  integration: true
});

// test('it should display rental details', function(assert) {
// 	this.set('rentalObj', rental);
// 	this.render(hbs`{{rental-listing rental=rentalObj}}`);
// 	assert.equal(this.$('.listing h3').text(), 'test-title')

//   // Set any properties with this.set('myProperty', 'value');
//   // Handle any actions with this.on('myAction', function(val) { ... });

//   // this.render(hbs`{{rental-listing}}`);

//   // assert.equal(this.$().text().trim(), '');

//   // // Template block usage:
//   // this.render(hbs`
//   //   {{#rental-listing}}
//   //     template block text
//   //   {{/rental-listing}}
//   // `);

//   // assert.equal(this.$().text().trim(), 'template block text');
// });


test('should display rental details', function(assert) {
	this.set('rentalObj', rental); //use the fake thing we made above 
	this.render(hbs`{{rental-listing rental=rentalObj}}`); //render the handlebars component with rentalObj
	assert.equal(this.$('.listing h3').text(), 'test-title', 'Title: test-title'); //make sure the h3 in the listing is equal to the test title set above
	assert.equal(this.$('.listing .owner').text().trim(), 'Owner: test-owner'); //make sure the .owner class is equal to the test owner set above
	//this uses the string trim to remove newlines and spaces - 
});

test('should toggle wide class on click', function(assert) {
  this.set('rentalObj', rental); //same as above
  this.render(hbs`{{rental-listing rental=rentalObj}}`); //render it
  assert.equal(this.$('.image.wide').length, 0, 'initially rendered small'); //make sure there isn't a dom element with class "image wide" 
  this.$('.image').click();
  assert.equal(this.$('.image.wide').length, 1, 'rendered wide after click'); //make sure there is 1 dom element with class "image wide" 
  //why doesn't this fail? it adds a class to the image that's clicked, but if you click 1 small image and then another, it makes them both big in turn. 
  this.$('.image').click();
  assert.equal(this.$('.image.wide').length, 0, 'rendered small after second click'); //make sure there isn't a dom element with class "image wide" 
});
