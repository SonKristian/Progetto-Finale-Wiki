import supereroi from "../db/superhero.json" assert { type: "json" };
import utenti from "../db/utenti.json" assert { type: "json" };
import generi from "../db/generi.json" assert { type: "json" };
import fs from "node:fs/promises";
import axios from "axios";

const DB_PATH_USER = "./db/utenti.json";

export const getAllGenres = (req, res) => {
  res.send(generi);
};

export const getHeroGenre = async (req, res) => {
  const cardsPerPage = 24;
  const currentPage = parseInt(req.params.page);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  let genre = Object.values(supereroi);
  let allgen = genre.filter((e) => e.biography.publisher == req.params.nome);
  let slicegen = allgen.slice(startIndex, endIndex);
  console.log(
    "current " + currentPage + "start " + startIndex + "end " + endIndex
  );
  res.send(slicegen);
};
export const search = async (req, res) => {
  const nome = encodeURIComponent(req.params.nome);
  const accessToken = "235074712596162"; // Sostituisci con il tuo access token
  
  const response = await axios.get(
    `https://superheroapi.com/api/${accessToken}/search/${nome}`
  );
  const data = response.data.results;
  
  if (!data || data === "" || data === null || data === undefined)  {
    res.status(404).send({
      message : "not found"
    });
    console.log(data);
  } else {
    res.send(data);
  }
};


export const getSingleHero = (req, res) => {
  let hero = Object.entries(supereroi);
  // console.log(hero[req.params.id - 1][1]);
  // console.log(singleHero);
  res.send(hero[req.params.id - 1][1]);
};

export const getAllHero = (req, res) => {
  const cardsPerPage = 24;
  const currentPage = parseInt(req.params.page);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;

  const superArray = Object.values(supereroi);
  const superSlice = superArray.slice(startIndex, endIndex);

  res.send(superSlice);
};

export const createFavorites = async (req, res) => {
  const user = req.params.username;
  const id = req.body.id;
  if (utenti[user]) {
    utenti[user].favorites.push(parseInt(id));
  }

  await fs.writeFile(DB_PATH_USER, JSON.stringify(utenti, null, "  "));

  res.send("Added to favorites");
  // } catch {
  //   res.status(200).send({
  //     data: {},
  //     error: true,
  //     message: "Favorite cannot be added",
  //   });
  // }
};

export const deleteFavorite = async (req, res) => {
  const userId = req.params.username;
  const id = req.headers["id"];
  console.log(id);
  const user = utenti[userId];
  console.log(user);
  if (user && user.favorites.includes(parseInt(id))) {
    const index = user.favorites.indexOf(parseInt(id));

    user.favorites.splice(index, 1);

    await fs.writeFile(DB_PATH_USER, JSON.stringify(utenti, null, "  "));
    res.status(200).send("Favorite has been deleted").end();
  } else {
    res.status(404).send({
      data: {},
      error: true,
      message: "User or favorite not found",
    });
  }
};

export const getFavorites = async (req, res) => {
  const { username } = req.params;

  const user = utenti[username];

  if (user) {
    const favoriteItems = user.favorites.map((favId) => {
      const hero = supereroi[favId];
      const url = supereroi[favId].image.url
      return {
        id: favId,
        image: url,
        name: hero ? hero.name : 'Unknown', // Assumendo che il nome sia presente nel file supereroi.json
      };
    });

    res.json(favoriteItems);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
