const express = require("express");
const app = express();
const path = require('path');

app.use(express.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);
app.use(express.static( __dirname + '/public/dist/public' ));

app.listen(5000, () => console.log("listening on port 5000"));