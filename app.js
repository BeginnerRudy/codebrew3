const express = require('express')
const app = express()
const port = 5000
const dir_name = "D:/Coding stuffs/codebrew/codebrew3/"

app.get('/', function(req, res) {
  res.sendFile(dir_name + "index.html");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
