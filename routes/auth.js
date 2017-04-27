var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

/** Setup login Route **/
var auth = express.Router();

/** Define Middleware **/
auth.use(bodyparser.json()); /** Converts all request body to JSON object **/

//Establish the Routes
auth.route('/').
    get(function(req,res,next){

	// Get parameters from URL firstly.
	var stage = req.body.hasOwnProperty('stage')?req.body.stage:null;
	var ip = req.body.hasOwnProperty('ip')?req.body.ip:null;
	var mac = req.body.hasOwnProperty('mac')?req.body.mac:null;
	var token = req.body.hasOwnProperty('token')?req.body.token:null;
	var incoming = req.body.hasOwnProperty('incoming')?req.body.incoming:null;
	var outgoing = req.body.hasOwnProperty('outgoing')?req.body.outgoing:null;
	var gw_id = req.body.hasOwnProperty('gw_id')?req.body.gw_id:null;

	res.send('Auth:1');
	
    });

module.exports = auth;
