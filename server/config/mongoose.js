const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/socket_trivia', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true, 
    useFindAndModify: false, 
});

require('../../models/user')
require('../../models/quiz')