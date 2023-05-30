import { Schema, model, models } from 'mongoose';

const productsSchema = new Schema({
    title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  img: {
    type: String,
    required: true
  },
  categories:{
    type:String
  },
  price: {
       type: Number, 
       required: true,
      },
   inStock: {
       type: Number,
       required: true,   
      },
    
},{
    timestamps:true
})

const Products = models.products || model('products', productsSchema); //create user database.if not created yet,then create new database called user

export default Products;