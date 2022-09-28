import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
// import dotenv from 'dotenv';
// dotenv.config();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home");
});
// Dependencies to install:
// $ npm install node-fetch --save

import fetch from 'node-fetch';

app.post("/", function (req, res) {

  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: 'Bearer pk_prod_F16REY55S74Y5NPG2WFR6X3CPM5T'
    },
    body: JSON.stringify({
      "message": {
        "to": {
        
          "email": req.body.body
        },
        "content": {
          "title": req.body.subject,
          "body": req.body.content
        },
        "routing":{
          "method": "single",
          "channels": ["email"]
        }
      }
    })
  };
  fetch('https://api.courier.com/send', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
  
 res.redirect("/");
});




app.listen(4000, function () {
  console.log("server is starting on port 4000");
});

