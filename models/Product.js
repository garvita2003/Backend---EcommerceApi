const mongoose = require("mongoose"); 

//create users schema
const ProductSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            unique: true
        },

        desc:{
            type: String,
            required: true
        },

        categories:{
            type:Array
        },

        size:{
            type:String
        },

        color:{
            type:String
        },

        price:{
            type:Number,
            required:true
        },

        img:{
            type:String,
            required:true
        }
    },

    { timestamps: true} //incase of mongoose we use to get the actually date and update it everytime we use this command
);

module.exports = mongoose.model("Product",ProductSchema);