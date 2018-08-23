//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err,client) => {
    if (err) {
      return console.log('Unable to connect to Mongo db server.');
    }
  console.log('Connected successfully to server.');
  const db = client.db('TodoApp');

  //delete many
  // db.collection('Todos').deleteMany({text:'eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // db.collection('Users').deleteMany({name:'Josh'}).then((result) => {
  //   console.log(result);
  // });


  //delete one
  // db.collection('Todos').deleteOne({text: 'eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  //find one and delete
  // db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
  //   console.log(result);
  // });

//Show me all the users with age:1
  db.collection('Users').find({}).toArray().then((results) => {
    console.log('\nDocuments before deleting from the database\n', results);
  },(error) => {
    console.log('Unable to fetch users', error);
  });

//Delete first user with age:1
  db.collection('Users').findOneAndDelete({_id: new ObjectID('5b7d79bd53087ba08c1933d1')}).then((result) => {
    console.log('\nThis document has been deleted.');
    console.log(result);
  });

//Show me the users with age:1 after delting 1.
  db.collection('Users').find({}).toArray().then((results) => {
    console.log('\nDocuments after deleting from the database\n', results);
  },(error) => {
    console.log('Unable to fetch users', error);
  });




  client.close();

});
