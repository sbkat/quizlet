const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = mongoose.model('User');

module.exports = {
  register(req, res) {
    bcrypt.hash(req.body.password, 8, (err, hash) => {
      if (err) {
        res.json({ errors: err });
      } else {
        req.body.password = hash;
        User.create(req.body, (err, user) => {
          if (err) {
            res.json({ errors: err });
          } else {
            req.session.userId = user._id;
            req.session.name = user._username;
            res.json(user);
          }
        })
      }
    })
  },

  // promise method...
  // register1(req, res) {
  //   bcrypt.hash(req.body.password, 8)
  //     .then((hash) => {
  //       req.body.password = hash;

  //       User.create(req.body)
  //         .then((newUser) => {
  //           req.session.userId = newUser._id;
  //           res.json({ user: newUser });
  //         })
  //         .catch((err) => {
  //           res.json({ errors: err });
  //         });
  //     })
  //     .catch((hashingErr) => {
  //       res.json({ errors: hashingErr });
  //     });
  // },


  login(req, res) {
    User.findOne({ email: req.body.email }, (err, user) => {
      if(user == null) {
        res.json({ errorMessage: "Invalid Credentials" });
      } else {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if(result) {
            req.session.userId = user._id;
            req.session.name = user._username;
            res.json({successMessage: "Successful Login" });
          } else {
            res.json({ errorMessage: "Invalid Credentials" });
          }
        })
      }
    })
  },

  getCurrentUser(req, res) {
    if(req.session.userId) {
      User.findOne({ _id: req.session.userId }, (err, user) => {
        if(err) {
          res.json({ errors: errors });
        } else {
          res.json(user);
        }
      })
    } else {
      res.json({ sessionStatus: false });
    }
  },

  all(req, res) {
    User.find()
      .then(user => {
        res.json({ users: user, msg: 'User' });
      })
      .catch(errors => {
        console.log(errors);
        res.json({ errors: errors });
      })
  },

}