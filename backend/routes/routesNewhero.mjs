import axios from "axios";
import fs from "node:fs/promises";
import newHeroes from "../db/newhero.json" assert { type: "json" };
import utenti from "../db/utenti.json" assert { type: "json" };

const DB_PATH_NEWHERO = "./db/newhero.json";
const DB_PATH_USER = "./db/utenti.json";

export let nextId = Object.keys(newHeroes).reduce(
  (biggest, id) => (biggest > parseInt(id, 10) ? biggest : parseInt(id, 10)),
  0
);

export const createHero = async (req, res) => {
  try {
    nextId++;
    const user = req.headers.user;
    const newHero = {
      [nextId]: { ...req.body },
    };

    const allNewHero = { ...newHeroes, ...newHero };

    if (!utenti[user].heroescreated) {
      utenti[user].heroescreated = [];
    }

    utenti[user].heroescreated.push(nextId);

    await fs.writeFile(DB_PATH_NEWHERO, JSON.stringify(allNewHero, null, "  "));
    await fs.writeFile(DB_PATH_USER, JSON.stringify(utenti, null, "  "));

    res.status(200).send({
      message: "A new Hero has been created",
    });
  } catch (error) {
    console.error("Error creating hero:", error);
    res.status(500).send("Error creating hero");
  }
};

export const getHeroesIdName = (req, res) => {
  const heroName = req.params.id.toLowerCase();

  const foundHero = Object.entries(newHeroes).find(([heroId, heroData]) => {
    return heroData.name.toLowerCase() === heroName;
  });

  if (foundHero) {
    res.send(foundHero[1]);
  } else {
    res.status(404).send({
      message: "Hero not found",
    });
  }
};

export const heroUpdate = async (req, res) => {
  const heroName = req.params.id.toLowerCase();

  const foundHero = Object.entries(newHeroes).find(([heroId, heroData]) => {
    return heroData.name.toLowerCase() === heroName;
  });

  const id = foundHero[0]
  console.log(id)

  let updatedHereos = newHeroes[id];
  if (updatedHereos) {
    
    let newestHereos = { ...req.body };
    newHeroes[id] = newestHereos;

    await fs.writeFile(DB_PATH_NEWHERO, JSON.stringify(newHeroes, null, "  "));
    res.send(newHeroes[id]);
  } else {
    res.status(200).send({
      data: {},
      error: true,
      message: "Hero hasn't been found",
    });
  }
};

export const heroDelete = async (req, res) => {
  const heroName = req.params.id.toLowerCase();

  const deleteHero = Object.entries(newHeroes).find(([heroId, heroData]) => {
    return heroData.name.toLowerCase() === heroName;
  });

  let delHero = deleteHero[0];
  let delnewHero = newHeroes[delHero];
  if (delnewHero) {
    delete newHeroes[delHero];

    await fs.writeFile(DB_PATH_NEWHERO, JSON.stringify(newHeroes, null, "  "));
    res.status(200).send("Hero has been deleted").end();
  } else {
    res.status(200).send({
      data: {},
      error: true,
      message: "Hero has not been found",
    });
  }
};
