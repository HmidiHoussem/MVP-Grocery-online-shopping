const express = require("express");
var app = express();
var router = express.Router();

app.use(express.static(__dirname));
app.use(express.static(__dirname + "/../client"));

router.get("/", (req, res) => {
  res.sendFile("/../client/index.html", { root: __dirname });
});

/*
router.get("/test", function (req, res) {
  console.log("Router Working");
  res.send("welcome in my first server");
  res.end();
});
router.get("/hello", (req, res) => {
  res.send("Hello, welcome in my first server");
});
router.post("/hi", (req, res) => {
  console.log("hi test");
  res.end(`You are now logged `);
});
*/

app.use("/", router);

let port = 3000;
app.listen(port, () => console.log(`server works on port ${port}`));
