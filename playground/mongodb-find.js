//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err,client) => {
    if (err) {
      return console.log('Unable to connect to Mongo db server.');
    }
  console.log('Connected successfully to server.');
  const db = client.db('TodoApp');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5b7d348c53087ba08c192e2f')
  //   }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  //
  // }, (error) => {
  //   console.log('Unable to fetch todos', error);
  // });

  db.collection('Users').find({}).count().then((count) => {
    console.log(`Total number of users: ${count}`);
  }, (error) => {
    console.log('Unable to fetch users', error);
  });


  db.collection('Users').find({name:'Josh'}).toArray().then((docs) => {
    console.log('List of users named Josh\n');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (error) => {
    console.log('Unable to fetch todos', error);
  });


  client.close();

});
