import User from '../models/users.js'
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const generateToken = (userId) => {
    // Pass an object so decoded.id works in the middleware
    return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: '7d' });
}
export const registerUser = async (req, res) => {
    try{
        const {name, email, password} = req.body;
        if(!name || !email || !password || password.length < 8){
            return res.json({success:false,message:"All fields are required"});
        }
        const userExists = await User.findOne({email})
        if(userExists){
            return res.json({success:false,message:"User already exists"});
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });
        const token = generateToken(user._id.toString());
        res.json({success:true,token});
    } catch(error){
        // console.log(error.message);
        res.json({success:false,message:error.message});
    }
}

export const loginUser = async (req, res) => {
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
        if(!user){
            return res.json({success:false,message:"Invalid credentials"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.json({success:false,message:"Invalid credentials"});
        }
        const token = generateToken(user._id.toString());
        res.json({success:true,token});
    } catch(error){
        console.log(error.message);
        res.json({success:false,message:error.message});
    }
}

export const getUserData = async (req, res) => {
    try{
        const {user} = req;
        res.json({success:true,user});
    } catch(error){
        // console.log(error.message);
        res.json({success:false,message:error.message});
    }
}