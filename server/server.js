require("dotenv").config();
const express = require("express");
const morgan = require("morgan")
const app = express();

//middlewares 
app.use(morgan("dev"));

// app.use((req, res, next) => {
//   console.log("I'm your middleware!");
//   next();
// }) <-- cusotm middleware 

// Get all restaurants
app.get("/api/v1/restaurants", (req, res) => {
  console.log("route handler ran");
  res.status(200).json({
    status: "sucess",
    data: {
      restaurant: ["mcdonalds", "wendys"],

    }
  });
})

// Get a restaurant
app.get("api/v1/restaurants/:restaurantid", (req, rest) => {
  console.log(req.params);
})

//Create a restaurant

app.post("/api/v1/restaurants", (req, res) => {
  console.log(req);
})


const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})