const express = require("express");
const itemRoutes = require("./routes/item.routes");
const conn = require("./database-mysql/index");
const axios = require("axios");

// TODO: Update this
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
var items = require("./database-mysql");
// var items = require('./database-mongo');

const app = express();
const PORT = process.env.PORT || 3000;

const path = require("path");

// app.use(express.static(path.join(__dirname, +".../client/public")));

app.use(express.static(__dirname + "/../client/public"));

app.get("/test", (req, res) => {
  res.send("test");
});

// get all the list request
app.get("/allItems", (req, res) => {
  let sql = `SELECT * from shopList`;
  conn.query(sql, (err, shopList) => {
    if (err) {
      console.error("Request failed");
    } else {
      res.status(200).send(shopList);
    }
  });
});

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/api/items", itemRoutes);

app.listen(PORT, function () {
  console.log(`listening on port ${PORT}!`);
});
