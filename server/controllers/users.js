const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = {
    all(request, response) {
      // find all
      User.find()
        .then((Users) => {
          response.json({ Users: Users });
        })
        .catch((errors) => {
          response.json({ errors: errors });
        });
    },
  
    create(request, response) {
      User.create(request.body)
        .then((newUser) => {
          response.json({ User: newUser });
        })
        .catch((errors) => {
          response.json({ errors: errors });
        });
    },
  
    getOne(request, response) {
      User.findById(request.params.id)
        .then((User) => {
          response.json({ User: User });
        })
        .catch((errors) => {
          response.json({ errors: errors });
        });
    },
  
    delete(request, response) {
      User.findByIdAndDelete(request.params.id)
        .then((deletedUser) => {
          response.json({ User: deletedUser });
        })
        .catch((errors) => {
          response.json({ errors: errors });
        });
    },
  
    update(request, response) {
      User.findByIdAndUpdate(
        request.params.id,
        request.body,
        {
          runValidators: true,
          // return the newly updated User
          new: true
        }
      )
        .then((updatedUser) => {
          response.json({ User: updatedUser });
        })
        .catch((errors) => {
          response.json({ errors: errors });
        });
    }
  
  }