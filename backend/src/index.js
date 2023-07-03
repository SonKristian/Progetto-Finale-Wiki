import express from "express";
import cors from "cors";
import bodyParser from 'body-parser'
import axios from "axios"
import jwt  from 'jsonwebtoken';
import 'dotenv/config'
// import mongoose from "mongoose";
import supereroi from "../db/superhero.json" assert {type : "json"}
import * as hero from '../routes/routesHero.mjs'
import * as newhero from '../routes/routesNewhero.mjs'
import * as auth from "../routes/routesAuth.mjs"
const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(express.json());
app.use(cors());

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}
// const connect = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_DB);
//     console.log("Connected to mongoDB");
//   } catch (error) {
//     throw error;
//   }
// };

//in questo caso se si disconnette prova a connettersi di nuovo
// mongoose.connection.on("disconnected", () => {
//   console.log("mongoDB disconnected");
// });

app.get('/', (req, res) => {
  res.send('Benvenuto nella Wiki Spotlight!')
})

// app.get('/data', (req, res) => {
//   const page = parseInt(req.query.page) || 1; // Recupera il parametro di query "page" (default: 1)
//   const itemsPerPage = 24;
//   const startIndex = (page - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   // Esegui la sottostruttura dell'oggetto JSON originale utilizzando gli indici calcolati
//   const slicedJson = Object.values(supereroi).slice(startIndex, endIndex);

//   res.send(slicedJson);
// });


//login - register
app.post("/register", auth.register)
app.post("/login", auth.login)

//middleware di prova
app.get("/prova", authenticateToken, auth.prova)

//crud on the DB superhero.json
app.get("/genere", hero.getAllGenres)
app.get("/genere/:nome", hero.getHeroGenre)
app.get("/eroi/:id", hero.getSingleHero)
app.get("/eroi", hero.getAllHero)

//search
app.post('/search/:nome', hero.search);



//crud for creating hero

//create
app.post("/newhero", authenticateToken, newhero.createHero)
//update
app.put("/newhero/:id", authenticateToken, newhero.heroUpdate)
//get
app.get("/newhero/:id", authenticateToken, newhero.getHeroesIdName)
//delete
app.delete("/newhero/:id", authenticateToken, newhero.heroDelete)

app.listen(port, () => {
  // connect();
  console.log(`Connceted to backend ${port}`)
})