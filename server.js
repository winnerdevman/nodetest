const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
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
  res.send(req.query); 
})

app.listen(port)
console.log('Listening to localhost:' + port);