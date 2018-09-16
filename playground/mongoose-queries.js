const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {Users} = require('./../server/models/users');

let id = '5b866311fdc23032acb00085';

if(!ObjectID.isValid(id)) {
    console.log('ID is not valid!');
} else {
    Users.findById(id).then((user) => {
        if (!user) {
            return console.log('User not found');
        }
        console.log('User by id', user);
    }).catch((e) => console.log('error.'));
}

// require user model
// user.findById
// check if there's a user
// if user print to the screen
// handle any errors 


// let id = '5b9ccede567ffd61cdbf7f3911';

// if (!ObjectID.isValid(id)) {
//     console.log('ID is not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => console.log(e));

