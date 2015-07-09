// PUBSUB : publish the message to a Multiple Channel


var redis = require('redis');
var pub = redis.createClient();

pub.publish('Instance', 'This Message is from Instance Channel');
pub.publish('foreign', 'This Message is from Foreign Server');
pub.publish('foo', 'This message is from Foo Server');
pub.publish('fox', 'This message is from Fox Server');

