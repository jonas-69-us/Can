const express=require("express");
const multer=require("multer");
const axios=require("axios");
const FormData=require("form-data");

const app=express();

const upload=multer();


const BOT_TOKEN="7976476163:AAFqrGpau1GtiS0P6WVkBb4xiTVq2Yj1g-g";
const CHAT_ID="5239396446";


app.post("/upload",
upload.single("photo"),
async(req,res)=>{

    const form=new FormData();

    form.append(
        "chat_id",
        CHAT_ID
    );

    form.append(
        "photo",
        req.file.buffer,
        {
            filename:"capture.jpg"
        }
    );


    await axios.post(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendPhoto`,
      form,
      {
        headers:form.getHeaders()
      }
    );


    res.send("OK");

});


app.listen(3000);
