var Animal = Backbone.Model.extend({
	defaults: {
		name: 'fido',
		color: 'black',
		sound: 'woof'
	},
	validate: function(attrs, options) {
		if (!attrs.name) {
			alert('Your animal must have a name!');
		}
		if (attrs.name.length < 2) {
			alert('Your animal\'s name must have more than one letter');
		}
	},
	sleep: function() {
		alert(this.get('name') + ' is sleeping.');
	}
});