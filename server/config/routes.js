const cakesController = require('../controllers/users');

module.exports = function (app) {
    app.get('/api/users', usersController.getAll);
    app.get('/api/users/:id', usersController.findOne);
    app.post('/api/cake', usersController.create); app.put('/api/users/:id', usersController.update);
    app.delete('/api/users/:id', usersController.delete);
}