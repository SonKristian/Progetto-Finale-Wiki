import express from "express";
import cors from "cors";
import bodyParser from 'body-parser'
import * as eroi from './routesHero.mjs'
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Benvenuto nella Wiki Spotlight sporco nergolox!')
})

app.get("/genere", eroi.getGender)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})