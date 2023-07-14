import axios from "axios";
import fs from "node:fs/promises";
import supereroi from "./superhero.json" assert { type: "json" };

const DB_PATH = "./superhero.json";

async function call(id) {
  try {
    let res = await axios.get(
      `https://www.superheroapi.com/api.php/235074712596162/${id}`
    );

    let newObj = {
      ...res.data,
    };

    console.log(newObj);
    supereroi[id] = newObj;
    await fs.writeFile(DB_PATH, JSON.stringify(supereroi, null, "  "));

    console.log("Dati salvati correttamente su superhero.json");
  } catch (error) {
    console.error(
      "Si è verificato un errore durante il salvataggio dei dati:",
      error
    );
  }
}

for (let i = 701; i < 751; i++) {
  call(i);
}
