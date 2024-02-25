const mongoose = require("mongoose"); 

//create users schema
const OrderSchema = new mongoose.Schema(
    {
        userId:{
            type: String,
            required: true
        },

        products: [
            {
                productId : {
                    type: String,
                },
                 quantity : {
                    type:Number,
                    default:1
                 },
            },
        ],

        amount : {
            type: Number,
            required: true
        },

        address : {
            type: Object,
            required: true
        },

        status : {
            type: String,
            default : "pending"
        },
    },

    { timestamps: true} //incase of mongoose we use to get the actually date and update it everytime we use this command
);

module.exports = mongoose.model("Order",OrderSchema);