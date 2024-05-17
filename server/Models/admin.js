const mongoose = require('mongoose');
const { Schema, models } = mongoose;
const userSchema = new Schema(

    {
      
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
       
    }
    ,{
        timestamps:true,
        
    }
);

const Admin = models.admin || mongoose.model("Admin",userSchema);
module.exports = Admin;