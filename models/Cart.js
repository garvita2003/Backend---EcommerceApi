const mongoose = require("mongoose"); 

//create users schema
const CartSchema = new mongoose.Schema(
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
    },

    { timestamps: true} //incase of mongoose we use to get the actually date and update it everytime we use this command
);

module.exports = mongoose.model("Cart",CartSchema);