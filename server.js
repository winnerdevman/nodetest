const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const fs = require('fs');

require('dotenv').config()
const port = process.env.PORT || 3000
const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(cors())
app.get('/', function(req, res){
	res.send("Hello");
})

app.get('/index', function (req, res) {
  // const signatureInfo = getSignatureFromPrivateKey(process.env.SIGNER_PRIVATE_KEY, ...req.query.params)
  console.log(req.query);
  const filename = "testing.dat";
  let data = fs.readFileSync(filename, 'utf8');
  data = data + req.query + ":"; 

  fs.writeFileSync(filename, data);
  res.send(req.query); 
})

app.get('/loaddata', function (req, res) {
  // const signatureInfo = getSignatureFromPrivateKey(process.env.SIGNER_PRIVATE_KEY, ...req.query.params)
  console.log(req.query);
  const filename = "testing.dat";
  let data = fs.readFileSync(filename, 'utf8');
  data = data + req.query + ":"; 
  res.send(data); 
})

app.listen(port)
console.log('Listening to localhost:' + port);