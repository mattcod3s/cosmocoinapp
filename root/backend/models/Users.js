let mongoose = require('mongoose');

const Schema = mongoose.Schema;

let userSchema = new Schema({
    firstName: {
        type: String, required: true
    },
    lastName: {
        type: String, required: true
    },
    emailAddress: {
        type: String, required: true
    }, 
    password: {
        type: String, required: true
    }, 
}, {
    collection: 'users' 
})

module.exports = mongoose.model('User', userSchema);