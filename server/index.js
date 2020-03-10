const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const controller = require('./controller.js');

const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '../dist')));

app.use(bodyparser());

app.post('/search', controller.postSearch);

app.listen(PORT, () => console.log(`Express server started on port ${PORT}`));