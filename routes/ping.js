var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

/** Setup Ping Route **/
var ping = express.Router();

/** Define Middleware **/
ping.use(bodyparser.json()); /** Converts all request body to JSON object **/

//Establish the Routes
ping.route('/')
    .get(function(req,res,next){
	console.log('Ping accessed');
	res.end('Pong');
    });

module.exports = ping;
