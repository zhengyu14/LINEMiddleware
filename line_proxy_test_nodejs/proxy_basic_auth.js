var basicAuth = require('express-basic-auth');
var express = require( 'express' );
var request = require ( 'request' );

var port = 3000;

var app = express( );
var lineHost = "https://api.line.me";

app.use(basicAuth({
    users: { 'admin': 'supersecret' }
}))

app.post( '/v2/oauth/verify', function(req, res ) {
  console.log( "varifying access token..." );

  var forwardUrl = lineHost + req.url;
  req.pipe( request( forwardUrl ) ).pipe( res );
});

app.get( '/v2/bot/profile/:id', function(req, res ) {
  console.log( "retriving user profile..." );

  var forwardUrl = lineHost + req.url;
  req.pipe( request( forwardUrl ) ).pipe( res );
});

app.listen( process.env.PORT || port );
console.log( "Listening on port: " + ( process.env.PORT || port ) );
