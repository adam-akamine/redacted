var express = require('express');
var querystring = require('querystring');
var app = express();
var bodyParser = require('body-parser');
var PORT = 8080;

app.use(bodyParser.urlencoded({extended:true}));

var stripped;
var messageArray;

// GET
app.get('/', function (req, res) {
  console.log(req.query);
  res.send("Hello!");
});

app.post('/message', function (req, res, next) {
  // strip all punctuation and special characters and convert to lower case
  stripped = req.body.message.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").toLowerCase();
  messageArray = stripped.split(' ');
  next();
});

app.use(function (req, res, next) {
  if(!messageArray) {
    console.log("No message detected.");
    res.send("No message detected.");
  }
  else {
    for(var i = 0; i < messageArray.length; i++) {
      switch(messageArray[i]) {
        case "selfie":
          messageArray[i] = "self-portrait";
          break;
        case "yummers":
          messageArray[i] = "delicious";
          break;
        case "outchea":
          messageArray[i] = "are out here";
          break;
        case "bruh":
          messageArray[i] = "wow";
          break;
        case "doge":
          messageArray[i] = "pug";
          break;
        case "cilantro":
          messageArray[i] = "soap";
          break;
        case "bae":
          messageArray[i] = "loved one";
          break;
        case "swag":
          messageArray[i] = "style";
          break;
        case "yolo":
          messageArray[i] = "carpe diem";
          break;
      }
    }
  console.log(messageArray);
  res.send(messageArray);
  }
});

var server = app.listen(PORT, function () {
  console.log("listening on port " + server.address().port);
});