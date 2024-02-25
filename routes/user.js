const router = require("express").Router();
const { verifyTokenAndAuthorization } = require("./verifyToken");
const { verifyTokenAndAdmin } = require("./verifyToken");
const User = require('../models/User.js');
const CryptoJs = require("crypto-js");


//UPDATE 
//conatins params id => :id
router.put("/:id", verifyTokenAndAuthorization, async (req,res) => {
    if(req.body.password){
        //Encrypt the password of the user using crypto-js AES Algorithm using secret key to encrpt and decrpyt
        req.body.password = CryptoJs.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    }

    //Update the user
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            //update
            $set : req.body
        }, {new: true}
        );
        res.status(200).json(updatedUser)
    }
    catch(err){
        res.status(500).json(err);
    }
});


//DELETE
router.delete("/:id", verifyTokenAndAuthorization, async (req, res) => {
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User has been Deleted");
    }
    catch(err){
        res.status(500).json(err);
    }
})


//GET USER
router.get("/find/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        //Inorder to not get the personal password but the other information of the user - using rest operator
        const { password, ...others } = user._doc;

        res.status(200).json(others);
    }
    catch(err){
        res.status(500).json(err);
    }
})


//GET ALL USERS
router.get("/", verifyTokenAndAdmin, async (req, res) => {
    try{
        //find all the users present in the database
        const query = req.query.new;
        const users = query ? await User.find().sort({ _id: -1}).limit(1) : await User.find();
        res.status(200).json(users);
    }
    catch(err){
        res.status(500).json(err);
    }
});


//GET USERS STATS
router.get("/stats",verifyTokenAndAdmin, async (req,res) => {
    //return total number of users per month
    const date = new Date();
    //to get previous year same date
    const lastYear = new Date(date.setFullYear(date.getFullYear() -1 ));
    
    try{
        const data = await User.aggregate([
            {$match : {createdAt: {$gte: lastYear}}},
            {
                $project:{

                    month: {$month: "$createdAt"},
                },
            },
            {
                $group:{
                    _id:"$month",
                    total: {$sum: 1}
                }
            }
        ]);
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json(err);
    }
})


module.exports = router;