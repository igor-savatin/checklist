//var fs  = require('fs');
const nodemailer = require('nodemailer');

var prepareBody = require('./prepareBody.js');
var configMail=require('./config/servermail.js');
var select = require('./database/select.js');
var query = require('./database/query.js');

let transport = nodemailer.createTransport(configMail);

var html=prepareBody.bodyEmail;

var result= select.executeSql(query.command);
result.then(function(data){
  
    tableHtml=prepareBody.prepareTabletoHtml(data);
    html.setHeader("oi");
    html.setBody(tableHtml);
    
})
.then( function () {
    console.log(html);
    
    var message = {
        from: 'teste@teste.com',
        to: 'testeto@email.com',
        subject: 'teste sendmail com select',
        html: html.html
    };
    
    transport.sendMail(message, function(err, info) {
        if (err) {
        console.log(err)
        } else {
        console.log(info);
        }
    });
});