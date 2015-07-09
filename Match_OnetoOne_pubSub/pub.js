// PUBSUB : publish the message to a single Channel

var redis = require('redis');
var pub = redis.createClient();


pub.publish('Instance', 'This Message is from Instance Channel');

