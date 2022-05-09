import mongoose from "mongoose";
const {Schema} = mongoose ;
//model or we call it the contact schema ==structure
const ContactSchema = new Schema({
    name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
      },
      phone: {
        type : Number,
        required: true,
      },
      adress : String ,
    });
const Contact = mongoose.model("contact", ContactSchema);
export default Contact ; 