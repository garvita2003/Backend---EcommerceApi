const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require('./routes/user.js');
const authRoute = require("./routes/auth.js");
const prodRoute = require("./routes/product.js");
const cartRoute = require("./routes/cart.js");
const orderRoute = require("./routes/order.js");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("Database successfully connected"))
    .catch((err) => {console.log(err);});

app.use(express.json()); //can pass any json files

app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/products",prodRoute);
app.use("/api/carts",cartRoute);
app.use("/api/orders",orderRoute);


app.listen(process.env.PORT || 5000, ()=> {
    console.log(`Backend Server is running in PORT ${process.env.PORT || 5000}`)
})