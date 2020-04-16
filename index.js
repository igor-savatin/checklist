//var fs  = require('fs');
const nodemailer = require('nodemailer');

var msg = require('./message.js');
var configMail=require('./config/servermail.js');
var manipulateHtml=require('./prepareInfo.js');
var select = require('./database/select.js');
var query = require('./database/query.js');

let transport = nodemailer.createTransport(configMail);

var message=msg.message;

var result= select.executeSql(query.command);
result.then(function(data){
  message.setContent("oi",manipulateHtml.prepareTabletoHtml(data));  
})
.then( function () {
    console.log(message);
    transport.sendMail(message, function(err, info) {
        if (err) {
        console.log(err)
        } else {
        console.log(info);
        }
    });
});