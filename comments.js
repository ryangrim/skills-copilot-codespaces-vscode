// Create web server  using Node.js
// To run: node comments.js
// To test: curl -X POST -d "comment=Hello&author=Bob" http://localhost:3000/comments

var http = require('http');
var url = require('url');
var qs = require('querystring'