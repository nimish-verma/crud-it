// console.log("hello world this is index js");
// npm run serve
// to use it from the package.json file

const express = require("express");
const app = express();
// Using Node.js `require()`
const mongoose = require("mongoose");

//app listen allows the server to listen on a specific port
// app.get allows to get a specific route
// req and res allow to get the request and response from the server
app.get("/", (req, res) => {
  res.send("hello from node api");
  //   to see it stop the running server and run it again
});

// npm i nodemon -D
// to install kinda live server, so that we dont have to stop and run the server again and again

// i4OckhKzwEkVqh01;
// admin;

// Nu43bcfYamKde8fH
// nim
mongoose
  .connect(
    "mongodb+srv://nim:Nu43bcfYamKde8fH@basic-crud-backend.lhioyux.mongodb.net/?retryWrites=true&w=majority&appName=basic-crud-backend"
  )
  .then(() => {
    console.log("connected to db");
    app.listen(3000, () => {
      console.log("server started on port 3000");
    });
  })
  .catch(() => {
    console.log("error connecting to db, but why ??");
  });
