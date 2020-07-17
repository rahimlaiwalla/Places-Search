const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyparser = require('body-parser');
const controller = require('./controller.js');

const PORT = 3001;

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.use(bodyparser());

app.get('/search/readDir', (req, res) => {
  const directoryPath = path.join(__dirname, '../dist/carosel-images');
  fs.readdir(directoryPath, (err, files) => {
    if(err){
      console.log(err);
      res.send(err);
    } else {
      res.send(files);
    }
  })
})

app.post('/search', controller.postSearch);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})


app.listen(PORT, () => console.log(`Express server started on port ${PORT}`));