const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const orderSchema = new Schema(
    {
      first_name: {
        type: String,
      },
      last_namae: {
        type: String,
        unique: true,
      },
      email: {
        type: String,
        require: true,
      },
      phone: {
        type: Number,
        require: true,
      },
      address: {
        type: String,
        require: true,
      },
      apartment: {
        type: String,
        require: true,
      },
      city: {
        type: String,
        require: true,
      },
      zip_code: {
        type: Number,
        require: true,
      },
      country: {
        type: String,
        require: true,
      },
     
    },
    {
      timestamps: true,
    }
  );

  module.exports = Orders = model("Orders", orderSchema) ;