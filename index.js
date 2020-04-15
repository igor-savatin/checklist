//var fs  = require('fs');
const nodemailer = require('nodemailer');

var body = require('./prepareBody.js');
var configMail=require('./config/servermail.js');
var select = require('./select.js');

let transport = nodemailer.createTransport(configMail);


var result= select.getAll();
result.then(function(data){
    tableHtml=body.prepareTabletoHtml(data);
    body.html=body.headerTemplate(body.html,'teste super testado');
    body.html=body.bodyTemplate(body.html,tableHtml);
   // console.log(body.html);
   
    const message = {
        from: 'teste@teste.com', // Sender address
        to: 'testeto@email.com',         // List of recipients
        subject: 'teste sendmail com select', // Subject line
        html: body.html//'<h1>Have the most fun you can in a car!</h1><p>Get your <b>Tesla</b> today!</p>'
    };
    transport.sendMail(message, function(err, info) {
        if (err) {
        console.log(err)
        } else {
        console.log(info);
        }
    });
});