const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const blogsSchema = new Schema(
    {
      title: {
        type: String,
      },
      description: {
        type: String,
        unique: true,
      },
      type: {
        type: String,
        unique: true,
      },
      img_url: {
        type: String,
        require: true,
      },
     
    },
    {
      timestamps: true,
    }
  );

  module.exports = Blogs = model("Blogs", blogsSchema) ;