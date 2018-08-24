//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err,client) => {
    if (err) {
      return console.log('Unable to connect to Mongo db server.');
    }
  console.log('Connected successfully to server.');
  const db = client.db('TodoApp');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b7d484453087ba08c193102')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // }) ;

let obj = new ObjectID;

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5b804be3ffda819124111b72")
  }, {
    $set: {
      name: 'Seralina'
    },
    $inc: {
      age: +1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  });



  // db.collection('Users').findOneAndUpdate({
  //   _id: new ObjectID('123')
  // }, {
  //   $inc: {
  //     age: +1
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });


  client.close();

});
