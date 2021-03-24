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
        type: String, requuired: true
    }, 
    password: {
        type: String, required: true
    }, 
    id: {
        type: String
    }
}, {
    collection: 'users' 
})

module.exports = mongoose.model('User', userSchema);