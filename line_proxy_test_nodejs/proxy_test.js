var express = require( 'express' );
var request = require ( 'request' );

var port = 3000;
var app = express( );

app.get( '/verify', function(req, res ) {
  console.log("ok");
  res.send('ok')
});

app.get( '/v2/bot/profile/:id', function(req, res ) {
  res.send('ok')
});

app.listen( process.env.PORT || port );
console.log( "Listening on port: " + ( process.env.PORT || port ) );
