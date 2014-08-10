var express       = require("express"),
    // https       = require("https"),
    // http        = require("http"),
    passport    = require("passport"),
    fs          = require("fs");

// var options = {
//   key: fs.readFileSync(__dirname + '/config/agent-key.pem'),
//   cert: fs.readFileSync(__dirname + '/config/agent-cert.pem')
// }

var app         = express();

// express settings
require('./config/express')(app, passport);

// Import routes
require('./config/routes')(app, passport);

app.listen(3000);
console.log("Relax is listening to port 3000.");

// expose app
exports = module.exports = app;