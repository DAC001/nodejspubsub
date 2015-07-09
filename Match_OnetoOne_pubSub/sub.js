// PUBSUB :Subscribe to a particular channel as mentioned , It returns message

var redis = require('redis');
var sub = redis.createClient();

sub.on('message', function (channel, message) {
    	
	console.log(message);
});

sub.subscribe('Instance');
