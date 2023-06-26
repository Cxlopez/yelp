require("dotenv").config();
const express = require("express");


const app = express();

app.get("/getResaurants", (req, res) => {
  res.json({
    status: "sucess",
    restaurant: "mcdonalds"
  });
})

const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})