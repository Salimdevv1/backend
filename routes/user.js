/* eslint-disable no-undef */
const express = require("express");

const {
  getProducts ,
  getCategories ,
  getProductsByCategory ,
  getCategoriesByID ,
  getProductsById ,
  getBlogs,
  checkout
} = require("../controlers/controler");
// const { uservalidator, validate } = require("../middlewares/validators");

const router = express.Router();

router.get("/all", getProducts);
router.get("/all/categories" , getCategories)
router.get('/all/categories/category/:id' , getProductsByCategory)
router.get('/all/categories/category/name/:id' , getCategoriesByID)
router.get('/all/categories/category/product/:id' , getProductsById)
router.get('/all/blogs' ,getBlogs)
router.post('/all/checkout/:first_name/:last_name/:email/:phone/:address/:apartment/:city/:zip_code/:country' , checkout)


module.exports = router;
