module.exports = angular.module('app', []);

function printMessage(status='working') {
	let message = 'ES6';

	console.log(`${message} is ${status}`);
}

printMessage();