import express from "express";
import cors from "cors";
import bodyParser from 'body-parser'
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
  res.send('Benvenuto nella Wiki Spotligh sporco nergolox!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})