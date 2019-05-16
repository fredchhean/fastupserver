const express = require("express");
const router = express.Router(); 
const fileUploader = require("../../config/cloudinary");


router.post("/upload-image", fileUploader.single("avatarFile"),
    (req,res,next) => {
        console.log("new file upload", req.file)
        const { originalname, secure_url, format, width, height } = req.file;
        res.json({
            imageName: originalname,
            imageUrl: secure_url,
            format,
            width,
            height,
          });
    }
)


module.exports  = router; 