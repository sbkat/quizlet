const express = require('express');
const app = express();
const path = require('path');
const PORT = 4200;

app.use(express.json());

require('./server/config/mongoose');
require('./server/config/routes')(app);
app.use(express.static( __dirname + '/public/dist/public' ));

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
