const express = require('express');
const fs = require('fs');
const { loadjson } = require('./loadJson');
const app = express();
const port = 3000;
const cors = require('cors');
const bodyParser = require('body-parser')
app.use(cors({
    orgin: "*",
}))
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/getdata', (req, res) => {
    res.send(loadjson())
});

app.get('/append',(req,res) => {
  res.sendFile(__dirname + '/index.html');
})

app.post('/submit',(req,res) => {
  console.log(JSON.stringify(req.body))
  const jsonObj = JSON.parse(fs.readFileSync("data.json"));
  // const dataObj = JSON.parse(data);
  // console.log(myObj)
  var formObj =req.body
  jsonObj['teammembers'].push(formObj);
  var newData = JSON.stringify(jsonObj);
  fs.writeFile("data.json", newData, err => {

      if (err) throw err;
      console.log("New data added");
  });
  res.send('Data updated!!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
