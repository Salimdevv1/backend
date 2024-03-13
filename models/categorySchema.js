const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const categorySchema = new Schema(
    {
      category_name: {
        type: String,
      },
      category_id: {
        type: Number,
        unique: true,
      },
      category_img: {
        type: String,
        require: true,
      },
     
    },
    {
      timestamps: true,
    }
  );

  module.exports = Categories = model("Categories", categorySchema) ;