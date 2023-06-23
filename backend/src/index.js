import express from "express";
import cors from "cors";
import bodyParser from 'body-parser'
import * as hero from './routesHero.mjs'
import * as newhero from './routesNewhero.mjs'
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Benvenuto nella Wiki Spotlight sporco nergolox!')
})

//crud on the DB superhero.json

app.get("/genere", hero.getGender)


//crud for creating hero
//create
app.post("/newhero", newhero.createHero)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})