const express = require('express')
const bodyParser = require('body-parser')

require('dotenv').config()

const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', function(req, res){
	res.send("Hello");
})

app.get('/index', function (req, res) {
  // const signatureInfo = getSignatureFromPrivateKey(process.env.SIGNER_PRIVATE_KEY, ...req.query.params)
  console.log(req.query); 
  res.send(req.query); 
})

app.listen(8888)
console.log('Listening to localhost:8888...');