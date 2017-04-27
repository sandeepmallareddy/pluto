var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');
var uuid = require('uuid/v4');

/** Setup login Route **/
var login = express.Router();

/** Define Middleware **/
login.use(bodyparser.json()); /** Converts all request body to JSON object **/

//Establish the Routes
login.route('/').
    get(function(req,res,next){

	//Get all the request parameters
	var gw_address = req.hasOwnProperty('gw_address')?req.gw_address:null;
	var gw_port = req.hasOwnProperty('gw_port')?req.gw_port:null;
	var gw_id = req.hasOwnProperty('gw_id')?req.gw_id:null;
	var mac = req.hasOwnProperty('mac')?req.mac:null;
	var url = req.hasOwnProperty('url')?req.url:null;

	console.log('GET Login Page');
	res.send('<html><body><form method=\'post\'><button type=\'submit\'>Let me in</button></form></body></html>');
	
	
    }).post(function(req,res,next){

	//Get all the request parameters
	var gw_address = req.hasOwnProperty('gw_address')?req.gw_address:null;
	var gw_port = req.hasOwnProperty('gw_port')?req.gw_port:null;
	var gw_id = req.hasOwnProperty('gw_id')?req.gw_id:null;
	var mac = req.hasOwnProperty('mac')?req.mac:null;
	var url = req.hasOwnProperty('url')?req.url:null;

	console.log('POST..generating token and redirecting to auth');
	
	//Generate a UUID4 token
	var token = uuid();

	//Remove all - in token
	var str_token = token.replace(/-/g,'');

	//Redirect to auth with token
	res.append('Location','http://'+gw_address+":"+gw_port+'wifidog/auth?token='+str_token);
	//res.redirect('http://'+gw_address+":"+gw_port+'wifidog/auth?token='+str_token);
	res.end();
	
    });

module.exports = login;

