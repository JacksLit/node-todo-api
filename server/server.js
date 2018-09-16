let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {Users} = require('./models/users');

let app = express();

const {ObjectID} = require('mongodb');

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

app.get('/todos', (req,res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});
 
// GET /todos/1234324
app.get('/todos/:id', (req,res) => {
  let id = req.params.id;

  // Check if ObjectID is valid
  if(!ObjectID.isValid(id)) {
      // console.log('ID is invalid!');
      return res.status(404).send({text:'error'});
    } else {
      // If valid, check if it exists in db
      Todo.findById(id).then((todo) => {
        if (!todo) {
          // console.log('ID not found!');
          return res.status(404).send({text:'error'});
        }
        // If valid and exists, return as object
        // not sure if the console.log should be commented out but I prefer it this way
        // console.log('Todo By Id', todo);
        res.send({todo});
      }).catch((e) => {
        res.status(400).send();
      });
    }
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
