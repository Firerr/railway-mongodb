import 'dotenv/config'

import express from "express";
import mongoose from 'mongoose';

const app = express();

// const PORT = process.env.PORT || 3333;
const { 
  PORT = 3333,
  MONGODB_URI="mongodb://127.0.0.1/c18"
} = process.env;

try {
  const conn = await mongoose.connect(MONGODB_URI);
  console.log("connected", conn);

  // this is for errors after a connection has been established
  mongoose.connection.on("error", (err) => {
    console.log(err);
  });
} catch (error) {
  // this is for connection error
  console.log(error);
}

// functionality
app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // parse application/json

const carSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  bhp: {
    type: Number,
    required: true,
    max: 10000
  },
  avatar_url: {
    type: String,
    default: "https://static.thenounproject.com/png/449586-200.png",
  },
});

const Car = mongoose.model('Car', carSchema);
Car.

app.get('/api/v1/cars', function(req, res){
  return res.json(cars);
});

app.post("/api/v1/cars", function(req, res) {
  console.log(req.body);
  cars.push(req.body);
  return res.sendStatus(201);
});


app.listen(PORT, () => {
  console.log(`server listening on http://localhost:${PORT}`); //log a message when it is listening
});