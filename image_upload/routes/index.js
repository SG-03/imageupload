const express=require('express');
const {upload,uploadImage}=require('../controllers/imageController')
const router=express.Router();

router.post('/upload',uploadImage,upload);

module.exports=router;