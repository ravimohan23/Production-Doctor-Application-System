const mongoose = require('mongoose');
const doctorSchema = new mongoose.Schema({
    userId:{
        type:String,

    },
    firstName:{
       type:String,
       required: [true,'first name is required']
    },
    lastName:{
        type:String,
        required: [true,'last name is required']
    },
    phone:{
        type:String,
        required:[true,'phone no is required']
    },
    email:{
        type:String,
        required:[true,'email is required']
    },
    website:{
        type:String,
    },
    address:{
        type:String,
        required:[true,'address is required']
    },
    specialization:{
        type:String,
        reuired:[true,'specialization is reqired']
    },
    experience:{
        type:String,
        required:[true,'experince is required']
    },
    feesPerConsultation:{
        type:Number,
        required:[true,'fees is required']
    },
    status:{
        type:String,
        default:'pending'
    },
    timing:{
        type:Object,
        required:[true,'work timming is required']
    }




},{timestamps:true});
const doctorModel = mongoose.model('doctors',doctorSchema);
module.exports = doctorModel;