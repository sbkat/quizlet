const express = require('express');
const app = express();
const path = require('path');
const PORT = 4200;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.all('*', (request, response) => {
    response.sendFile(
        path.join(__dirname, 'public/dist/public/index.html')
    );
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
