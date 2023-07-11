import supereroi from "../db/superhero.json" assert { type: "json" };
import utenti from "../db/utenti.json" assert {type : "json"}
import generi from "../db/generi.json" assert { type: "json" };
import axios from "axios";

const DB_PATH_AUTH = "./db/utenti.json"

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
  let slicegen = allgen.slice(startIndex, endIndex)
  console.log("current " + currentPage + "start " + startIndex + "end " + endIndex);
  res.send(slicegen);
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

export const updatefavorites = async (req, res) => {
  const heroName = req.headers.id

  const foundFavorite = Object.entries(utenti).find(([heroId, favData]) => {
    return favData.id === heroName;
  });

  const id = foundFavorite[0]
  console.log(id)

  let updatedFavorites = utenti[id];
  if (updatedFavorites) {
    
    let newestFavorites = { ...req.body };
    utenti[id] = newestFavorites;

    await fs.writeFile(DB_PATH_AUTH, JSON.stringify(utenti, null, "  "));
    res.send(utenti[id]);
  } else {
    res.status(200).send({
      data: {},
      error: true,
      message: "Favorite hasn't been found",
    });
  }
}

export const deleteFavorite = async (req, res) => {
  const heroName = req.headers.id.toLowerCase();

  const deleteFavorite = Object.entries(utenti).find(([heroId, favData]) => {
    return favData.name.toLowerCase() === heroName;
  });

  let delFav = deleteFavorite[0];
  let delnewfav = utenti[delFav];
  if (delnewfav) {
    delete utenti[delFav];

    await fs.writeFile(DB_PATH_AUTH, JSON.stringify(utenti, null, "  "));
    res.status(200).send("Favorite has been deleted").end();
  } else {
    res.status(200).send({
      data: {},
      error: true,
      message: "Favorite has not been found",
    });
  }
}

export const getFavorites = async (req, res) => {
  const { username } = req.params;

  const user = utenti[username];

  if (user) {
    const favoriteItems = user.favorites.map((favId) => {
      return user.heroescreated.find((heroId) => heroId === favId);
    });

    res.json(favoriteItems);
  } else {
    res.status(404).json({ message: "User not found" });
  }
};
