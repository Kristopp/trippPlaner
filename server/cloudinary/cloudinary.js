require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.REACT_APP_CLOUDINARY_NAME,
    api_key: process.env.REACT_APP_CLOUDINARY_API,
    api_secret: process.env.REACT_APP_CLOUDINARY_KEY,
});

module.exports = { cloudinary };