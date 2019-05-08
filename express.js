var express = require('express');
var app = express();

app.get('/haha', function(req, res){
  res.send('hello world');
});

app.use(function(req, res){
  res.send("app.use")
})
app.listen(process.env.PORT || 5000);
