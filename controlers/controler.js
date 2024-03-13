const User = require("../models/model");
const Product = require("../models/model");
const Categories = require("../models/categorySchema");
const Blogs = require("../models/blogsSchema");
const Orders = require("../models/orderSchema");

const getProducts = async (req, res) => {
    try {
      const productsList = await Product.find();
      res.json(productsList);
    } catch (error) {
      console.log("error", error);
    }
  };
  const getCategories = async (req, res) => {
    try {
      const categoryList = await Categories.find();
      res.json(categoryList);
    } catch (error) {
      console.log("error", error);
    }
  };
  const getCategoriesByID = async (req, res) => {
    try {
      const categoryId = req.params.id
      const category = await Categories.findById(categoryId);
      res.json(category);
    } catch (error) {
      console.log("error", error);
    }
  };
  const getProductsByCategory = async (req, res) => {
    try {
      const categoryId = req.params.id
      const categoryList = await Categories.findById(categoryId);
      const product =  await Product.find({product_category : categoryList.category_id}) ; 
      res.json(product);
    } catch (error) {
    }
  }
  const getProductsById = async (req, res) => {
    try {
      const productId = req.params.id
      const product = await Product.findById(productId);
      console.log(product)
      res.json(product);
    } catch (error) {
    }
  }
  const getBlogs = async (req ,res) =>{
    try {
      const blogs = await Blogs.find();
      res.json(blogs);
    } catch (error) {
      console.log("error", error);
    }
  }
  const checkout = async (req ,res) => {
    try {
      const name = req.params.first_name ; 
      const last_name = req.params.last_name ;
      const email = req.params.email ;
      const phone = req.params.phone ;
      const address = req.params.address ;
      const apartment = req.params.apartment ;
      const city = req.params.city ;
      const zip_code = req.params.zip_code ;
      const country = req.params.country ;
      const order = new Orders( name, last_name , email ,phone ,address ,city ,zip_code ,country);
      const newOrder = await order.save();
      return res.status(201).json(newOrder);
    } catch (error) {
      console.log(error)
    }

     

  }
  module.exports = {
    getProducts,
    getCategories,
    getProductsByCategory ,
    getCategoriesByID ,
    getProductsById ,
    getBlogs ,
    checkout , 
  };
  