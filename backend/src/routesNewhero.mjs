import axios from "axios";
import fs from 'node:fs/promises';
import newHeroes from "../db/newhero.json" assert {type : "json"}

let DB_PATH_NEWHERO = "../db/newhero.json"

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