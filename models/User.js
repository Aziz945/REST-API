const mongoose = require('mongoose');

const {Schema,model} = mongoose;

const UserSchema = new Schema({
    name:{type:String, required:true},
    email:{type:String},
    phone : String

    
});

module.exports = User = mongoose.model("user",UserSchema);