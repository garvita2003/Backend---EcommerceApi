const jwt = require("jsonwebtoken");

const verifyToken = (req,res,next) => {
    const authHeader = req.headers.token;
    if(authHeader){
        const token = authHeader.split(" ")[1]; //Since we are giving space between Bearer and token in Postman PUT operation
        jwt.verify(token, process.env.JWT_SEC, (err,user) => {
            if(err) return res.status(403).json("Token is not valid"); //access to particular resource is restricted - 403
            req.user = user;
            //Leave the function and go back to the same router
            next();
        });
    }
    else{
        //Authentication error - 401
        return res.status(401).json("You are not Authenticated");
    }
}


const verifyTokenAndAuthorization = (req,res,next) => {
    verifyToken(req,res,() => {
        //Decide token belong to - admin, client or not
        if(req.user.id === req.params.id || req.user.isAdmin) { //same user and access also there
            next()
        }
        else{
            res.status(403).json("Not Authorized to do the following actions")
        }
    });
};


const verifyTokenAndAdmin = (req,res,next) => {
    verifyToken(req,res,() => {
        if(req.user.isAdmin) { 
            next()
        }
        else{
            res.status(403).json("Not Authorized to do the following actions")
        }
    });
};

module.exports = {verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin};