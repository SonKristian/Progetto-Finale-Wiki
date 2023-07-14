import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import jwt from "jsonwebtoken";
import "dotenv/config";
// import mongoose from "mongoose";
import * as hero from "../routes/routesHero.mjs";
import * as newhero from "../routes/routesNewhero.mjs";
import * as auth from "../routes/routesAuth.mjs";
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
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

app.get("/", (req, res) => {
  res.send("Benvenuto nella Wiki Spotlight!");
});

//login - register
app.post("/register", auth.register);
app.post("/login", auth.login);

//middleware di prova
// app.get("/prova", authenticateToken, auth.prova)

//crud on the DB superhero.json
app.get("/genere", hero.getAllGenres);
app.get("/genere/:nome/page/:page", hero.getHeroGenre);
app.get("/eroi/:id", hero.getSingleHero);
app.get("/eroi/page/:page", hero.getAllHero);

//favorite  ---- get
app.get("/favorite/:username", authenticateToken, hero.getFavorites);
//delete
app.delete("/favorite/:username", authenticateToken, hero.deleteFavorite);
//put
app.post("/favorite/:username", authenticateToken, hero.createFavorites);

//search
app.post("/search/:nome", hero.search);

//crud for creating hero --- create
app.post("/newhero", authenticateToken, newhero.createHero);
//update
app.put("/newhero/:id", authenticateToken, newhero.heroUpdate);
//get
app.get("/newhero", authenticateToken, newhero.getAllNewHero);
//get for name
app.get("/newhero/:id", authenticateToken, newhero.getHeroesIdName);
//all hero for user
app.get("/allnewheroes/:username", authenticateToken, newhero.getHeroesForUser);
//delete
app.delete("/newhero/:id", authenticateToken, newhero.heroDelete);

app.listen(port, () => {
  // connect();
  console.log(`Connceted to backend ${port}`);
});
