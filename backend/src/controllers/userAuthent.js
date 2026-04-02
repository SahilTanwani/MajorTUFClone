const redisClient = require("../config/redis");
const User =  require("../models/user")
const validate = require('../utils/validator');
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const Submission = require("../models/submission")


const register = async (req,res)=>{
    
    try{
        // validate the data;
        validate(req.body); 
        const {firstName, emailId, password}  = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({emailId});
        if(existingUser) {
            return res.status(409).json({
                error: "User already exists with this email"
            });
        }

        req.body.password = await bcrypt.hash(password, 10);
        req.body.role = 'user'
    
        const user = await User.create(req.body);
        const token = jwt.sign({_id:user._id , emailId:emailId, role:'user'},process.env.JWT_KEY,{expiresIn: 60*60});
        
        const reply = {
            firstName: user.firstName,
            emailId: user.emailId,
            _id: user._id,
            role:user.role,
        }
    
        res.cookie('token',token,{
            maxAge: 60*60*1000,
            httpOnly: true,
            secure: false, // Set to true in production with HTTPS
            sameSite: 'lax'
        });
        
        res.status(201).json({
            user:reply,
            message:"Registration Successfully"
        })
    }
    catch(err){
        console.error("Registration error:", err.message);
        res.status(400).json({
            error: err.message
        });
    }
}


const login = async (req,res)=>{

    try{
        const {emailId, password} = req.body;

        if(!emailId)
            throw new Error("Invalid Credentials");
        if(!password)
            throw new Error("Invalid Credentials");

        const user = await User.findOne({emailId});

        // Check if user exists BEFORE comparing password
        if(!user) {
            throw new Error("Invalid Credentials");
        }

        const match = await bcrypt.compare(password,user.password);

        if(!match)
            throw new Error("Invalid Credentials");

        const reply = {
            firstName: user.firstName,
            emailId: user.emailId,
            _id: user._id,
            role:user.role,
        }

        const token =  jwt.sign({_id:user._id , emailId:emailId, role:user.role},process.env.JWT_KEY,{expiresIn: 60*60});
        
        res.cookie('token',token,{
            maxAge: 60*60*1000,
            httpOnly: true,
            secure: false, // Set to true in production with HTTPS
            sameSite: 'lax'
        });
        
        res.status(200).json({
            user:reply,
            message:"Login Successfully"
        })
    }
    catch(err){
        console.error("Login error:", err.message);
        res.status(401).json({
            error: "Invalid Credentials"
        });
    }
}


// logOut feature

const logout = async(req,res)=>{

    try{
        const {token} = req.cookies;
        
        if (!token) {
            return res.status(400).json({
                error: "Not logged in"
            });
        }
        
        const payload = jwt.decode(token);

        // Add token to Redis blacklist
        await redisClient.set(`token:${token}`,'Blocked');
        await redisClient.expireAt(`token:${token}`,payload.exp);

        // Clear the cookie properly
        res.cookie("token", "", {
            expires: new Date(0),
            httpOnly: true,
            secure: false,
            sameSite: 'lax'
        });
        
        res.status(200).json({
            message: "Logged Out Successfully"
        });

    }
    catch(err){
        console.error("Logout error:", err.message);
        res.status(503).json({
            error: "Error during logout"
        });
    }
}


const adminRegister = async(req,res)=>{
    try{
        // validate the data;
    //   if(req.result.role!='admin')
    //     throw new Error("Invalid Credentials");  
      validate(req.body); 
      const {firstName, emailId, password}  = req.body;

      req.body.password = await bcrypt.hash(password, 10);
    //
    
     const user =  await User.create(req.body);
     const token =  jwt.sign({_id:user._id , emailId:emailId, role:user.role},process.env.JWT_KEY,{expiresIn: 60*60});
     res.cookie('token',token,{maxAge: 60*60*1000});
     res.status(201).send("User Registered Successfully");
    }
    catch(err){
        res.status(400).send("Error: "+err);
    }
}

const deleteProfile = async(req,res)=>{
  
    try{
       const userId = req.result._id;
      
    // userSchema delete
    await User.findByIdAndDelete(userId);

    // Submission se bhi delete karo...
    
    // await Submission.deleteMany({userId});
    
    res.status(200).send("Deleted Successfully");

    }
    catch(err){
      
        res.status(500).send("Internal Server Error");
    }
}


module.exports = {register, login,logout,adminRegister,deleteProfile};