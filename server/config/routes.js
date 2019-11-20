const usersController = require('../controllers/users');

module.exports = function (app) {
    app.post('/api/register', usersController.register); 
    app.post('/api/login', usersController.login); 
    app.get('/api/current-user', usersController.getCurrentUser);
    app.get('/api/users', usersController.all);
    // app.put('/api/users/:id', usersController.update);
    // app.delete('/api/users/:id', usersController.delete);
}