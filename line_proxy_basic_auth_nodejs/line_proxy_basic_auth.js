var express = require( 'express' );
var basicAuth = require( 'express-basic-auth' );
var request = require ( 'request' );

var port = 3000;
var app = express( );
var lineHost = "https://api.line.me";

// Basic authentication
app.use(basicAuth({
    users: { 'admin': 'supersecret' }
}))

// Verify channel access token (long-lived)
app.post( '/v2/oauth/verify', function(req, res ) {
  console.log( ">>>>>> Varifying access token...", '\n', "Original request header: ", '\n', req.headers );

  var redirectUrl = lineHost + req.url;

  req.pipe( request( redirectUrl ) ).pipe( res );
});

// Get user profile
app.get( '/v2/bot/profile/:id', function(req, res ) {
  console.log( ">>>>>> Retriving User: ", req.params.id, '\n', "Original request header: ", '\n', req.headers );

  var redirectUrl = lineHost + req.url;

  var options = {
    url: redirectUrl,
    headers:  {
      'Authorization' : 'Bearer dUTTYfRFgYxo6+iqBOadmbznOpDgHD9AX6H66inHLW/s8TBQSiOxUuWOXrpKNAYDQUdk7e2D26PQMwTpNHPKd2YAWXt1Dv4ofNnlK0XF0HbEk6a3cpsQvIQopAZfrkeu+Yl5FAUQvqEDTMf67ioRcgdB04t89/1O/w1cDnyilFU='
    }
  }

  req.pipe( request( options ) ).pipe( res );
});

// Multicast message
app.post( '/v2/bot/message/multicast', function(req, res) {
  console.log( ">>>>>> Multicasting...: ", '\n', "Original request header: ", '\n', req.headers );

  var redirectUrl = lineHost + req.url;

  var options = {
    url: redirectUrl,
    headers:  {
      'Authorization' : 'Bearer dUTTYfRFgYxo6+iqBOadmbznOpDgHD9AX6H66inHLW/s8TBQSiOxUuWOXrpKNAYDQUdk7e2D26PQMwTpNHPKd2YAWXt1Dv4ofNnlK0XF0HbEk6a3cpsQvIQopAZfrkeu+Yl5FAUQvqEDTMf67ioRcgdB04t89/1O/w1cDnyilFU='
    }
  }

  req.pipe( request( options ) ).pipe( res );
})

app.listen( process.env.PORT || port );
console.log( "Listening on port: " + ( process.env.PORT || port ) );
