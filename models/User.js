const mongoose = require("mongoose"); 

//create users schema
const UserSchema = new mongoose.Schema(
    {
        username:{
            type: String,
            required: true,
            unique: true
        },

        email:{
            type: String,
            required: true,
            unique: true
        },

        password:{
            type:String,
            required:true
        },

        isAdmin:{
            type: Boolean,
            default: false
        },
    },
    { timestamps: true} //incase of mongoose we use to get the actually date and update it everytime we use this command
);

module.exports = mongoose.model("User",UserSchema);