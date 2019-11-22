const mongoose = require('mongoose');
const User = mongoose.model('User');
const Quiz = mongoose.model('Quiz');

module.exports = {
    createQuiz(req,res) {
        Quiz.create(req.body, (err, quiz) => {
            console.log("reqbody:", req.body);
            if (err) {
                res.json({ errors: err });
            } else {
                res.json(quiz);
            }
        })
    },

    allQuizzes(req, res) {
        Quiz.find()
          .then(quiz => {
            res.json({ quiz: quiz, msg: 'Quizzes' });
          })
          .catch(errors => {
            console.log(errors);
            res.json({ errors: errors });
          })
      },

      findQuiz(req, res) {
        Quiz.findById(req.body)
          .then(quiz => {
            res.json({ quiz: quiz, msg: 'Quizzes' });
          })
          .catch(errors => {
            console.log(errors);
            res.json({ errors: errors });
          })
      },
}