
// Contact Model
const mongoose = require("mongoose");

// Setup schema
const ContactSchema = mongoose.Schema({
    name : {
        type : String,
        required : false
    },
    email : {
        type : String,
        required : false
    },
    gender : {
        type : String
    },
    phone : {
        type : String
    },
    create_date : {
        type : Date,
        default : Date.now
    }
});

/// Export Contact Model
const Contact = module.exports = mongoose.model('contact',ContactSchema);
module.exports.get = function (callback,limit){
    Contact.find(callback).limit(limit);
}