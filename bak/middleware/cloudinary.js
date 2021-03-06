const cloudinary = require("cloudinary").v2;
require("dotenv").config();
// console.log("Key", process.env.CLOUDINARY_API_KEY);
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SCERET,
});

module.exports = cloudinary;
