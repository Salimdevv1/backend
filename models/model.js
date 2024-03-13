const mongoose = require("mongoose");

const { Schema, model } = mongoose;


const productShema = new Schema(
    {
      product_name: {
        type: String,
      },
      product_description: {
        type: String,
      },
      product_category: {
        type: Number,
      },
      product_price: {
        type: Number,
      },
      product_img: {
        type: String,
      },
      brand_name: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
);

module.exports = Product = model("Product", productShema) ;
