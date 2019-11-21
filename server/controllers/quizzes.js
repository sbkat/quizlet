const mongoose = require('mongoose');
const User = mongoose.model('User');
const Quiz = mongoose.model('Quiz');

module.exports = {
    createQuiz(req,res) {
        Quiz.create(req.body)
        .then((newQuiz) => {
            res.json(newQuiz);
        })
        .catch((err) => {
            res.json({ errors: err });
        });
        User.findById(req.params.userId)
        .then((user) => {
            user.quizzes.push(new Quiz(req.body));
            user.save();
        })
        .catch((err) => {
            res.json({ errors: err});
        });
    }
}
