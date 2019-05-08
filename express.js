var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000

app.get('/haha', function(req, res){
  res.send('hello world');
});

app.use(function(req, res){
  res.send("app.use")
})
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
