let mongoose = require('mongoose');


let Users = mongoose.model('Users', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true,
  }
})

module.exports = {Users};
