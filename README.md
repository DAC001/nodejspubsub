# nodejspubsub

                                                     PUBSUB USING NODEJs
                                                     -------------------                     

There are 3 different modules :

Module 1:  Matching_OnetoOne_PubSub
Module 2:  Matching_A_Particular_Pattern 
Module 3:  Matching_WildCard_* 



Module 1: Is used to subscribe to a particular channel 
------------------------------------------------------
It uses functions like:

 * createClient() : It takes the default port and the host.
 * subscriber.on(): It listens to the message of the subscribed channel.
 * subscriber.subscribe('channel name') : It subscribes to a paticular channel.

 * publisher.publish() :It passes the message and channel to which the message has to be channelized.


How To Run
1. There are two files pubs.js and subs.js
2. Run pubs.js and subs.js in two different terminals.

 # node subs.js
 # node pubs.js


Module 2 Is used to subscribe based on a paticuler 'Pattern' of channel 
-----------------------------------------------------------------------
It uses functions like:

 * createClient() : It takes the default port and the host.
 * subscriber.on(): It listens to the 'pmessage'and checks for the pattern of the subscribed channel.
 * subscriber.subscribe('pattern') : It subscribes to a channel as mentioned in the pattern.
   
	ex: pattern : n* { subscibes to all channel begining with pattern  'n' like news, newyork, newjersy, news24/7 etc)
  
 * publisher.publish() :It passes the message and channel to which the message has to be channelized.


How To Run
1. There are two files pubs.js and subs.js
2. Run pubs.js and subs.js in two different terminals.

 # node subs.js
 # node pubs.js

Module 3 Is used to subscribe to a any channel based on 'Wildcard Pattern'
-------------------------------------------------------------------------
It uses functions like:

 * createClient() : It takes the default port and the host.
 * subscriber.on(): It listens to the 'pmessage'and checks for the Wildcard pattern (*) of the subscribed channel.
 * subscriber.subscribe('pattern') : It subscribes to a any channel present.
   
	ex: pattern : * { It is Wildcard pattern which subscibes to all channel begining with pattern like news, newyork, newjersy, news24/7   			          foo, bar, instance etc)
  
 * publisher.publish() :It passes the message and channel to which the message has to be channelized.


How To Run
1. There are two files pubs.js and subs.js
2. Run pubs.js and subs.js in two different terminals.

 # node subs.js
 # node pubs.js


