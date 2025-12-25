import userModel from "../models/userModel";

export const registeruser = async (req,res) =>{
    const {name,email,password,role,department} = req.body;
    if(!name || !email || !password){
        res.status(400).json({message:"Please fill all the fields"});
    }
    const exist = await userModel.findOne();
    if(!exist){
        res.json({message:"User already exists"});
    }
    const user = await userModel.create({
        name,
        email,
        password,
        role,
        department});
    res.json(user);
}