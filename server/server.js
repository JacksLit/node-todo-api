let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {Users} = require('./models/users');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
  let todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});



app.listen(4000,() => {
  console.log('started on port 4000.');
});


module.exports = {app};


/*
let newUser = new Users({
  name: 'Josh',
  email: 'JoshZirena@gmail.com'
});

newUser.save().then((doc) => {
  console.log('Saved user', doc);
}, (e) => {
  console.log('Unable to save user', e);
});
*/

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
