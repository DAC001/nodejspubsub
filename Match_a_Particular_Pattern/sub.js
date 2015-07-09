// PUBSUB :Subscribe to Channel matching the Pattern , It return the mesage.

var redis = require('redis');
var sub = redis.createClient();

sub.on('pmessage', function (pattern,channel, message) {
    
	console.log(message);
});

var pattern = 'f*';
sub.psubscribe(pattern);
