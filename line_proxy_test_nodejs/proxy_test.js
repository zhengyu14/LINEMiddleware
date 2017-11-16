var express = require( 'express' );
var request = require ( 'request' );

var port = 3000;
var app = express( );

app.post( '/v2/oauth/verify', function( req, res ) {
  console.log( req.headers );
  res.send( 'ok' )
});

app.get( '/v2/bot/profile/:id', function(req, res ) {
  console.log( req.headers );
  res.send( 'ok' )
});

app.post( '/v2/bot/message/multicast', function( req, res ) {
  console.log( req.headers );
  res.send( 'ok' )
});

app.listen( process.env.PORT || port );
console.log( "Listening on port: " + ( process.env.PORT || port ) );
