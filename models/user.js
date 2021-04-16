var mongoose = require('mongoose');
var schema = mongoose.Schema;
var UserSchema = new schema({
    name: {
        type: String,
        trim: true,
        default: null
    },
    email: {
        type: String,
        trim: true,
        default: null,
        index: true
    },
    mobile: {
        type: Number,
        default: null,
        required: true,
        unique: true,
        index: true
    },
    city: {
        type: String,
        trim: true,
        default: null
    },

  
});
module.exports = mongoose.model('User', UserSchema);
