// PUBSUB : publish the message to Multiple Channel

var redis = require('redis');
var pub = redis.createClient();


pub.publish('Instance', 'This Message is from Instance Channel');
pub.publish('foo', 'This message is from Foo Channel');
pub.publish('fox', 'This message is from Fox Channel');
pub.publish('Bar', 'This message is from Bar Channel');
