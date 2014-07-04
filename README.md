angular-event-emitter
================

ngScope-style event emitter for AngularJS.
 
## Simple use case ##

````
angular.module('example', [
	'angular-event-emitter'
]).controller(function(EventEmitter) {
	var emitter = new EventEmitter();

	var removeHandler = emitter.on('event', function(e) {
		console.log('event triggered with data:', Array.prototype.slice.call(arguments, 1).map(function(d) { return JSON.stringify(d); }));
	})

	emitter.emit('event');
	// logs event triggered with data:

	emitter.emit('event', 'data', { d: 'a', 't': 'a' });
	// logs event triggered with data: 'data' { "d": "a", "t": "a" }


	removeHandler();

	emitter.emit('event', 'other value');
	// does nothing
});

````
You can also use EventEmitter as parent for your "class".

````
	...

	function MyEmitter(name) {
		this.name = name;
	}

	MyEmitter.prototype = Object.create(EventEmitter.prototype, {
	    constructor: {
			value: EventEmitter,
			enumerable: false,
			writable: true,
			configurable: true
	    }
	});

	MyEmitter.prototype.say = function(word) {
		this.emit(word, 'hi ' + this.name + '!');
	};

	var myEmitter = new MyEmitter('you');

	var beQuiet = myEmitter.on('hi ', function(e, phrase) {
		console.log(phrase);
	});

	myEmitter.say('hi');
	// logs 'hi you!'

	...

````
As you se, the syntax of removing handler is exactly the same what in case of Angular scopes.