const express = require("express")
const app = express()
const bodyParser = require("body-parser")
app.use(bodyParser.json());

app.post("/", (req, res) => {
  console.log('record-assignment')
  res.header(req.header).status(200).send(req.body)
})

app.listen(8080)