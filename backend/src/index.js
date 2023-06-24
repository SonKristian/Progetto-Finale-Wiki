import express from "express";
import cors from "cors";
import bodyParser from 'body-parser'
import axios from "axios"
import mongoose from "mongoose";
import * as hero from '../routes/routesHero.mjs'
import * as newhero from '../routes/routesNewhero.mjs'
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(express.json());
app.use(cors());

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log("Connected to mongoDB");
  } catch (error) {
    throw error;
  }
};

//in questo caso se si disconnette prova a connettersi di nuovo
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

app.get('/', (req, res) => {
  res.send('Benvenuto nella Wiki Spotlight!')
})

//middlewares
app.use((err, req, res, next)=>{
    const errorStauts = err.status || 500
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStauts).json({
        success : false,
        status : errorStauts,
        message: errorMessage,
        stack: err.stack,
    })
})

//login - register
app.post("/register", register)

//crud on the DB superhero.json
app.get("/genere", hero.getGender)

app.get("/prova", async (req, res) =>{
const response = await axios.get(`https://superheroapi.com/api/235074712596162/search/Spider-Man`)
const data = response.data
console.log(data)
res.send(data)
})

//crud for creating hero
//create
app.post("/newhero", newhero.createHero)

app.listen(port, () => {
  connect();
  console.log(`Connceted to backend ${port}`)
})