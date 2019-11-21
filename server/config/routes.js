const usersController = require('../controllers/users');
const quizController = require('../controllers/quizzes');

module.exports = function (app) {
    app.post('/api/register', usersController.register); 
    app.post('/api/login', usersController.login); 
    app.get('/api/current-user', usersController.getCurrentUser);
    app.get('/api/users', usersController.all);

    app.post('/api/createQuiz/:userId', quizController.createQuiz);
    // app.get('/api/gettingplayers/:ramdomPin', )
}