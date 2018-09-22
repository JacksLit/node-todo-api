let express = require('express');
let bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {Todo} = require('./models/todo');
let {Users} = require('./models/users');

let app = express();
const port = process.env.PORT || 4000;

const {ObjectID} = require('mongodb');

app.use(bodyParser.json());

// POST new todos
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

// GET all todos
app.get('/todos', (req,res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

// GET todo by object id
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

// GET delete todo by object id
app.delete('/todos/:id', (req, res) => {
  let id = req.params.id;

  if(!ObjectID.isValid(id)) {
    return res.status(404).send({text:'error'});
  } else {
    Todo.findByIdAndDelete(id).then((todo) => {
      if (!todo) {
        return res.status(404).send({text:'error'});
      }
      res.send({todo});
    }).catch((e) => {
      res.status(400).send();
    });
  }
});

// listen
app.listen(port,() => {
  console.log(`started on port ${port}.`);
});

module.exports = {app};

