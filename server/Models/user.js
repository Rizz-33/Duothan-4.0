const mongoose = require('mongoose');
const { Schema, models } = mongoose;
const userSchema = new Schema(

    {
        firstname:
        {
            type:String,
            required:true
        },
        lastname:
        {
            type:String,
            required:true
        },
        email:
        {
            type:String,
            required:true
        },
        password:
        {
            type:String,
            required:true
        },
        username:
        {
            type:String,
            required:true
        },
        mobile:
        {
            type:String,
            required:true
        },
        dtp:
        {
            type:String,
            required:true
        }
    }
    ,{
        timestamps:true,
        
    }
);

const User = models.User || mongoose.model("User",userSchema);
module.exports = User;