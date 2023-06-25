import supereroi from "../db/superhero.json" assert {type : "json"}
import fs from 'node:fs/promises';
const DB_PATH_HERO = "./superhero2.json"

let superheroArr = Object.values(supereroi)
// // Set per memorizzare i publisher distinti
// const publisherDistinti = new Set();

// // Ciclo forEach per scorrere gli oggetti di oggetti

// for (let i = 0; i < 731; i++) {
//     let y= superheroArr[i].biography.publisher
//     // console.log(y)
//     // console.log(i)
//     const element = y
//     publisherDistinti.add(element)
// }

// console.log(publisherDistinti)

// console.log(superheroArr.filter(el => el.biography.publisher == "Marvel Comics"))


// SCRIPT PER CAMBIO GENERE

let obj = []

const marvel = new Set(['Ms Marvel II',  'Anti-Vision',   'Speed Demon',   'Phoenix',   'Rune King Thor',   'Thunderbird II',   'Vindicator II',  'Sharon Carter',   'Archangel',   'Angel Salvadore',   'Penance II',   'Jean Grey',   'Toxin',
'Angel',  'Speedball',   'She-Thing',   'Power Man',   'Gemini V',])
const dc = new Set(["Arsenal", "Batman II",   'Spectre',   'Black Racer',   'Nightwing',   'Flash IV',   'Superman Prime One-Million',   'Power Woman',   'Red Hood',   'Blaquesmith',   'Tempest',   'Aztar',   'Speedy',
'Liberty Belle II',  'Impulse',   'Hawkfire',   'Huntress',   'Oracle',   'Misfit', 
'Spoiler',   'Vertigo II',])
const image = new Set([  'Meltdown',   'Boom-Boom',])

for (let i = 0; i < 731; i++) {
  let y = superheroArr[i].biography.publisher;
  let newObj = { ...superheroArr[i] };

  // if (dc.has(y)) {
  //   newObj.biography.publisher = "DC Comics";
      if(marvel.has(y)){
      newObj.biography.publisher = "Marvel Comics";
  //   obj.push(newObj);
    //    if(image.has(y)){
    // newObj.biography.publisher = "Image Comics";
  //   obj.push(newObj);
  }
  obj.push(newObj);
}
// console.log(obj)
if(obj){
let obj1 = {}

for (let i = 0; i < 731; i++) {
  obj1 = {...obj1, 
    [i+1]:{
    ...obj[i]
  }}
}
fs.writeFile(DB_PATH_HERO, JSON.stringify(obj1, null, "  "));
console.log(obj1)
} 