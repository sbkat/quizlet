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
          res.json({ quizzes: quiz, msg: 'Quizzes' });
        })
        .catch(errors => {
          console.log(errors);
          res.json({ errors: errors });
        })
    },

    findQuiz(req, res) {
      // Quiz.findById(req.body)
      Quiz.findById({ _id: req.params.id })
        .then(quiz => {
          res.json({ quiz: quiz, msg: 'Quizzes' });
        })
        .catch(errors => {
          console.log(errors);
          res.json({ errors: errors });
        })
    },

    edit(req, res) {
      Quiz.findByIdAndUpdate(
          req.params.id, 
          req.body,
          {
              new: true,
              runValidators: true
          }
      )
          .then(quiz => res.json(quiz))
          .catch(errors => res.json({ errors: errors }))
  },
}