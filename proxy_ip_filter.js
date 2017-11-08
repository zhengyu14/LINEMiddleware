
var express = require( 'express' );
var ipfilter = require ( 'express-ipfilter' ).IpFilter;
var request = require ( 'request' );

var port = 3000;

var ips = [
  '222.126.177.242'
  '155.56.68.216',
  '222.126.177.251',
  '155.56.68.217',
  '155.56.68.214',
  '203.13.146.51',
  '62.209.35.100',
  '155.56.68.218',
  '10.76.131.127'
]

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

app.use(ipfilter(ips));
app.listen( process.env.PORT || port );
console.log( "Listening on port: " + ( process.env.PORT || port ) );
