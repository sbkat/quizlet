const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model('User');

module.exports = {
  register(req, res) {
    bcrypt.hash(req.body.password, 8, (err, hash) => {
      if(err) {
          res.json({ errors: err });
      } else {
        req.body.password = hash;
        console.log('in the controller:', req.body);
        User.create(req.body, (err, user) => {
          if(err) {
            res.json({ errors: err });
          } else {
            console.log('controller HERE:', user)
            req.session.userId = user._id;
            res.json(user);
          }
        })
      }
    })
  },

  login(req, res) {

  },

  all(req, res) {
    User.find()
        .then(user => res.json({ users: user, msg: 'User' }))
        .catch(errors => res.json({ errors: errors }))
},

}