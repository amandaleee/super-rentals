import Ember from 'ember';

const communityPropertyTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([type]) {
	//Each argument in the helper will be added to an array and passed to our helper. 
	//For example, {{my-helper "foo" "bar"}} would result in myHelper(["foo", "bar"]). 
	//Using array ES2015 destructuring assignment, we can name expected parameters within the array. 
	//In the example above, the first argument in the template will be assigned to type.
	if (communityPropertyTypes.includes(type)) {
		return 'Community';
	}

	return 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
