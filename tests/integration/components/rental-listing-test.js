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

test('it should display rental details', function(assert) {
	this.set('rentalObj', rental);
	this.render(hbs`{{rental-listing rental=rentalObj}}`);
	assert.equal(this.$('.listing h3').text(), 'test-title')

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  // this.render(hbs`{{rental-listing}}`);

  // assert.equal(this.$().text().trim(), '');

  // // Template block usage:
  // this.render(hbs`
  //   {{#rental-listing}}
  //     template block text
  //   {{/rental-listing}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});

test('should toggle wide class on click', function(assert){
	this.set('rentalObj', rental);
	this.render(hbs`{{rental-listing rental=rentalObj}}`);
}); 
