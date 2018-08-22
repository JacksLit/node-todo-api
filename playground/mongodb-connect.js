//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// Creating our own ObjectID's if we wanted to.
// let obj = new ObjectID();
// console.log(obj);

// Object destructuring
// let user  = {name: 'Josh', age: 29};
// let {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err,client) => {
    if (err) {
      return console.log('Unable to connect to Mongo db server.');
    }
  console.log('Connected successfully to server.');
  const db = client.db('TodoApp');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo.', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  //insert new document into users collection (name, age, location)

  // db.collection('Users').insertOne({
  //   name: 'Josh',
  //   age: 29,
  //   location: 'Hamburg, Germany'
  // }, (err,result) => {
  //   if (err) {
  //     return console.log('Unable to insert into users.', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });




  client.close();

});
