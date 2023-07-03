import axios from "axios";
import fs from 'node:fs/promises';
import newHeroes from "../db/newhero.json" assert {type : "json"}

const DB_PATH_NEWHERO = "./db/newhero.json"

export let nextId = Object.keys(newHeroes).reduce(
    (biggest, id) => (biggest > parseInt(id, 10) ? biggest : parseInt(id, 10)),
    0
  );
  
export const createHero = async (req, res) =>{
    nextId++;
    let newHero = {
      [nextId]: { ...req.body }
    };
    // console.log(nextId)
    // console.log(req.body)
    let allNewHero = { ...newHeroes, ...newHero };
  
    await fs.writeFile(DB_PATH_NEWHERO, JSON.stringify(allNewHero, null, "  "));
    res.status(200).send({
        message: "A new Hero has been created",
      }).end();
}

export const getHeroesIdName = (req, res) => {
  let newHeroesOnly = Object.keys(newHeroes)
    if (newHeroesOnly.includes(req.params.id)) {
      res.send("ok");
  }
  res.status(200).send({
    message: "newHereos has not been found",
  }).end();
};


export const heroUpdate = async (req, res) => {
  let updatedHereos = newHereos[req.params.id];
  if (updatedHereos) {
    let addHeroes = { ...updatedHereos };
    let newestHereos = { ...addHeroes, ...req.body };
    newHereos[req.params.id] = newestHereos;
    
    await fs.writeFile(DB_PATH_NEWHERO, JSON.stringify(newHereos, null, "  "));
    res.send(newHereos);
  } else {
    res.status(200).send({
      data: {}, error: true, message: "Hero hasn't been found",
    });
  }
};


export const heroDelete = async (req, res) => {
  let delnewHero = newHeroes[req.params.id]
    if (delnewHero) {
      delete newHeroes[req.params.id]


      await fs.writeFile(DB_PATH_NEWHERO, JSON.stringify(newHeroes, null, '  '))
      res.status(200).send('Hero has been deleted').end()
        
    } else {
        res.status(200).send({
        data: {}, error: true, message: 'Hero has not been found'
        })
    }
};
