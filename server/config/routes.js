const usersController = require('../controllers/users');
const quizController = require('../controllers/quizzes');

module.exports = function (app) {
    //user routes
    app.post('/api/register', usersController.register); 
    app.post('/api/login', usersController.login); 
    app.get('/api/current-user', usersController.getCurrentUser);
    app.get('/api/users', usersController.all);
 
    //quiz routes
    app.post('/api/create-quiz', quizController.createQuiz); 
    app.get('/api/quizzes', quizController.allQuizzes);
    app.get('/api/quizzes/:id', quizController.findQuiz);
    app.put('/api/quizzes/:id', quizController.edit);

}