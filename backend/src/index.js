import express from "express";
import cors from "cors";
import bodyParser from 'body-parser'
import axios from "axios"
import * as hero from './routesHero.mjs'
import * as newhero from './routesNewhero.mjs'
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Benvenuto nella Wiki Spotlight sporco nergolox!')
})

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
  console.log(`Example app listening on port ${port}`)
})