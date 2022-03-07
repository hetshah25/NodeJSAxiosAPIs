const axios = require("axios");
const express = require("express");

const PORT = 8080;

const app = express();

app.listen(PORT, () => {
  console.log(`Running this application on the Port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello there!! 1234");
});

app.get("/store", (req, res) => {
  res.send("This is store page");
});

axios
  .get("https://reqres.in/api/users/2")
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    console.log(err);
  });

axios
  .post("https://reqres.in/api/users", {
    name: "morpheus",
    job: "leader",
  })
  .then((result) => {
    console.log(result.data);
  })
  .catch((err) => {
    console.log(err);
  });
