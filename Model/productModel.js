const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    productName:{
        type:String,
        unique: true,
        required: [true, "product name is required"],
    },
    productCategory:{
        type:String,
        required: [true, "product category is required"],
    },
    imageUrl:{
        type:String,
    },
    productDiscription:{
        type:String,
        required: [true, "product discription is required"],
    }
},
{
    timestamps: true, 
  }
)

module.exports = mongoose.model('product',productSchema)