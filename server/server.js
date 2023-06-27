require("dotenv").config();
const express = require("express");
const db = require("./db");
const morgan = require("morgan")
const app = express();

//middlewares 
app.use(express.json());

// Get all restaurants
app.get("/api/v1/restaurants", async (req, res) => {

  const result = await db.query("SELECT * FROM restaurants")
  console.log(result);
  res.status(200).json({
    status: "sucess",
    data: {
      restaurant: ["sushi go", "osmos"],

    }
  });
})

// Get a restaurant
app.get("api/v1/restaurants/:id", (req, rest) => {
  console.log(req.params);

  res.status(200).json({
    status: "success",
    data: {
      restaurant: "sushi go"
    }
  })
})

//Create a restaurant

app.post("/api/v1/restaurants", (req, res) => {
  console.log(req.body);

  res.status(201).json({
    status: "success",
    data: {
      restaurant: "mcdonalds"
    }
  })
})

//Update restaurant
app.put("/api/v1/restaurants/:id", (req, res) => {
  console.log(req.params.id);

  res.status(200).json({
    status: "success",
    data: {
      restaurant: "mcdonalds"
    }
  })
})

// Delete restaurant
app.delete("/api/v1/restaurants/:id", (req, res) => {
  res.status(204).json({
    status: "success"
  })
})


const port = process.env.PORT || 4001;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})