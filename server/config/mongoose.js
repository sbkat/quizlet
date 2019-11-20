const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');

mongoose.connect('mongodb://localhost/new_socket', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
    }, () => {
        console.log('We are connected!')
    })
        .catch(err => console.log(err));


const modelsPath = path.join(__dirname, '../models');

fs.readdirSync(modelsPath).forEach((file) => {
  if (file.includes('.js')) {
    require(path.join(modelsPath, file));
  }
});

