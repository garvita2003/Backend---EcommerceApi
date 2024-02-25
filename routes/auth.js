const router = require("express").Router();
const User = require("../models/User.js");
const CryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register a new user
router.post("/register", async (req,res) => {
    const newUser = new User(
        {
            username: req.body.username,
            email: req.body.email,
            //MongoDB Authentication using crypto algorithm
            //Encrypt the password of the user using crypto-js AES Algorithm using secret key to encrpt and decrpyt
            password: CryptoJs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString()
        }
    );

    //Save the new user information in the database DB using async function - Promise
    try{
        const savedUser = await newUser.save();
        // use 201 as status - successfully added
        res.status(201).json(savedUser);
    }
    catch(err){
        // use status 500  - error
        res.status(500).json(err);
    }
});

//Login an existing user
router.post("/login", async(req,res) => {
    try{
        //find the one match only using FindOne
        const user = await User.findOne({username: req.body.username});
        !user && res.status(401).json("Wrong Credentails. Retry!")

        //Decrypt the password saved in DB
        const hashedPassword = CryptoJs.AES.decrypt(user.password, process.env.PASS_SEC);
        const originalPassword = hashedPassword.toString(CryptoJs.enc.Utf8);

        originalPassword!==req.body.password && res.status(401).json("Wrong Password!");

        //Assign user the web token after successful login
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, 
        process.env.JWT_SEC,
        {expiresIn:"11d"}
        );

        //Inorder to hide the password
        const { password, ...others } = user._doc;

        res.status(200).json({...others, accessToken});
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router