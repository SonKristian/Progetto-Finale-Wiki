import fs from "node:fs/promises";
import newHeroes from "../db/newhero.json" assert { type: "json" };
import utenti from "../db/utenti.json" assert { type: "json" };

const DB_PATH_NEWHERO = "./db/newhero.json";
const DB_PATH_USER = "./db/utenti.json";

export const getNextId = (heroesArray) => {
  let maxId = 0;

  for (const newHeroes of heroesArray) {
    const heroId = Object.keys(newHeroes)[0];
    const id = parseInt(heroId);

    if (!isNaN(id) && id > maxId) {
      maxId = id;
    }
  }

  return maxId + 1;
};

export let nextId;

export const createHero = async (req, res) => {
  try {
    const heroesArray = Object.values(newHeroes);
    const nextId = getNextId(heroesArray);
    const user = req.headers.user;
    const newHero = { [nextId]: { ...req.body, id: nextId } };

    newHeroes.push(newHero);

    if (!utenti[user].heroescreated) {
      utenti[user].heroescreated = [];
    }

    utenti[user].heroescreated.push(nextId);

    await fs.writeFile(DB_PATH_NEWHERO, JSON.stringify(newHeroes, null, "  "));
    await fs.writeFile(DB_PATH_USER, JSON.stringify(utenti, null, "  "));

    res.send(newHeroes).end();
  } catch (error) {
    console.error("Error creating hero:", error);
    res.status(500).send("Error creating hero");
  }
};

export const getHeroesIdName = (req, res) => {
  const heroName = req.params.id;

  const foundHero = newHeroes.find((e) => Object.keys(e)[0] == heroName);

  if (foundHero) {
    res.send(foundHero);
  } else {
    res.status(404).send({
      message: "Hero not found",
    });
  }
};

export const getHeroesForUser = (req, res) => {
  const clientname = req.params.username;
  const arr_created = utenti[clientname].heroescreated;
  console.log("id", arr_created);
  const tosend = [];

  try {
    for (let i = 0; i < arr_created.length; i++) {
      const heroId = arr_created[i];
      console.log("heroid", heroId);
      const foundHero = newHeroes.find((e) => Object.keys(e)[0] == heroId);
      console.log("hero", foundHero);
      if (foundHero) {
        tosend.push(foundHero);
      }
    }

    console.log("tosend", tosend);
    res.json(tosend).status(200);
  } catch (error) {
    res.status(404).send({
      message: "Cannot get Hero for your user",
    });
  }
};

export const heroUpdate = async (req, res) => {
  const heroName = req.params.id;

  const foundHero = newHeroes.find((e) => Object.keys(e)[0] == heroName);

  const id = Object.keys(foundHero)[0];
  console.log(foundHero);

  if (id) {
    let newestHereos = { [id]: { ...req.body } };

    newHeroes[id - 1] = newestHereos;

    await fs.writeFile(DB_PATH_NEWHERO, JSON.stringify(newHeroes, null, "  "));

    res.status(200).send(newHeroes);
  } else {
    res.status(404).send({
      data: {},
      error: true,
      message: "Hero hasn't been found",
    });
  }
};

export const heroDelete = async (req, res) => {
  const heroName = req.params.id;

  const deleteHeroIndex = newHeroes.findIndex(
    (e) => Object.keys(e)[0] === heroName
  );

  if (deleteHeroIndex !== -1) {
    newHeroes.splice(deleteHeroIndex, 1);

    // Rimuovi l'eroe dall'array heroescreated dell'utente
    Object.values(utenti).forEach((user) => {
      const heroIndex = user.heroescreated.indexOf(parseInt(heroName));
      if (heroIndex !== -1) {
        user.heroescreated.splice(heroIndex, 1);
      }
    });

    await fs.writeFile(DB_PATH_NEWHERO, JSON.stringify(newHeroes, null, "  "));
    await fs.writeFile(DB_PATH_USER, JSON.stringify(utenti, null, "  "));
    res.status(200).send("Hero has been deleted").end();
  } else {
    res.status(404).send({
      data: {},
      error: true,
      message: "Hero has not been found",
    });
  }
};


export const getAllNewHero = async (req, res) => {
  if (newHeroes) {
    res.status(200).send(newHeroes);
  } else {
    res.status(404).send({message : "There are not heroes"});
  }
};
