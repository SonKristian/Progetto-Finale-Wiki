import supereroi from "../db/superhero.json" assert { type: "json" };
import utenti from "../db/utenti.json" assert {type : "json"}
import generi from "../db/generi.json" assert { type: "json" };
import axios from "axios";

const DB_PATH_AUTH = "./db/utenti.json"

export const getAllGenres = (req, res) => {
  res.send(generi);
};

export const getHeroGenre = async (req, res) => {
  let genre = Object.values(supereroi);
  let allgen = genre.filter((e) => e.biography.publisher == req.params.nome);
  console.log(genre);
  res.send(allgen);
};

export const search = async (req, res) => {
  const nome = encodeURIComponent(req.params.nome);
  const accessToken = "235074712596162"; // Sostituisci con il tuo access token

  const response = await axios.get(
    `https://superheroapi.com/api/${accessToken}/search/${nome}`
  );
  const data = response.data.results;
  console.log(data);
  res.send(data);
};

export const getSingleHero = (req, res) => {
  let hero = Object.entries(supereroi);
  console.log(hero[req.params.id - 1][1]);
  // console.log(singleHero);
  res.send(hero[req.params.id - 1][1]);
};

export const getAllHero = (req, res) => {
  res.send(supereroi);
};

export const favorites = async (req, res) => {
  const utente = Object.values(utenti);

  const favorites = [];

  utente.forEach((utente) => {
  favorites.push(...utente.favorites);
  });

  res.json(favorites);
}