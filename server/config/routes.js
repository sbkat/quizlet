const usersController = require('../controllers/users');

module.exports = function (app) {
    app.post('/api/user', usersController.register); 
    app.get('/api/users', usersController.all);
    // app.get('/api/users/:id', usersController.findOne);
    // app.put('/api/users/:id', usersController.update);
    // app.delete('/api/users/:id', usersController.delete);
}