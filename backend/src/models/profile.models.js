import mongoose, { Schema } from "mongoose"

const profileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    socialLinks:{
        type:String,
        required:true
    },
    avatar:{
        type:String,
        required:true
    }

},{timestamps:true})


export const Profile = mongoose.model("Profile", profileSchema)