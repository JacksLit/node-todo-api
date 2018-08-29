let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', {useNewUrlParser: true});


//Todo schema
let Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

//User schema
//user
//e-mail -require -trim -type String -set min length of 1

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

let newUser = new Users({
  name: 'Josh',
  email: 'JoshZirena@gmail.com'
});

newUser.save().then((doc) => {
  console.log('Saved user', doc);
}, (e) => {
  console.log('Unable to save user', e);
});


// let otherTodo = new Todo({
//   text: 'something to do'
// });
//
// otherTodo.save().then((doc) => {
//   console.log('saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo', e);
// });


//mongoose.connection.close();
