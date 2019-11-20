const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.connect('mongodb://localhost/socket_trivia', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    });

const modelsPath = path.join(__dirname, '../models');

fs.readdirSync(modelsPath).forEach((file) => {
  if (file.includes('.js')) {
    require(path.join(modelsPath, file));
  }
});

