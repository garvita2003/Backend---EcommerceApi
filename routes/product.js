const router = require("express").Router();
const { verifyTokenAndAdmin } = require("./verifyToken");
const Product = require("../models/Product.js");


//CREATE
//only admin can create product so used admin and token verification
router.post("/", verifyTokenAndAdmin, async (req,res) => {
    const newproduct = new Product(req.body);

    try{
        const savedProduct  =await newproduct.save();
        res.status(200).json(savedProduct);
    }
    catch(err){
        res.status(500).json(err);
    }
})


//UPDATE 
//conatins params id => :id
router.put("/:id", verifyTokenAndAdmin, async (req,res) => {
    //Update the product
    try{
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            //update
            $set : req.body
        }, {new: true}
        );
        res.status(200).json(updatedProduct);
    }
    catch(err){
        res.status(500).json(err);
    }
});


//DELETE
router.delete("/:id", verifyTokenAndAdmin, async (req, res) => {
    try{
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).json("Product has been Deleted");
    }
    catch(err){
        res.status(500).json(err);
    }
})


//GET PRODUCT
router.get("/find/:id", async (req, res) => {
    try{
        const prod = await Product.findById(req.params.id);
        res.status(200).json(prod);
    }
    catch(err){
        res.status(500).json(err);
    }
})


//GET ALL PRODUCTS
router.get("/", async (req, res) => {
    const qNew = req.query.new;
    const qCategory = req.query.category;
    try{

        let products;
        if(qNew){
            products = await Product.find().sort({createdAt: -1}).limit(1);
        }
        else if(qCategory){
            products = await Product.find({ categories : {
                $in : [qCategory],
            },
        });
        }
        else{
            products = await Product.find();
        }
        res.status(200).json(products);
    }
    catch(err){
        res.status(500).json(err);
    }
});


module.exports = router