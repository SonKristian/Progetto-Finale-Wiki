import supereroi from "../db/superhero.json" assert {type : "json"}
import fs from 'node:fs/promises';
const DB_PATH_HERO = "./superhero2.json"

let superheroArr = Object.values(supereroi)
// Set per memorizzare i publisher distinti
const publisherDistinti = new Set();

// Ciclo forEach per scorrere gli oggetti di oggetti

// for (let i = 0; i < 731; i++) {
//     let y= superheroArr[i].biography.publisher
//     // console.log(y)
//     // console.log(i)
//     const element = y
//     publisherDistinti.add(element)
// }

// console.log(publisherDistinti)

// console.log(superheroArr.filter(el => el.biography.publisher == "Marvel Comics"))

let obj = []

const marvel = new Set(['Ms Marvel II',  'Anti-Vision',   'Speed Demon',   'Phoenix',   'Rune King Thor',   'Thunderbird II',   'Vindicator II',  'Sharon Carter',   'Archangel',   'Angel Salvadore',   'Penance II',   'Jean Grey',   'Toxin',
'Angel',  'Speedball',   'She-Thing',   'Power Man',])
const dc = new Set(["Arsenal", "Batman II",   'Spectre',   'Black Racer',   'Nightwing',   'Flash IV',   'Superman Prime One-Million',   'Power Woman',   'Red Hood',   'Blaquesmith',   'Tempest',   'Aztar',   'Speedy',
])

for (let i = 0; i < 731; i++) {
  let y = superheroArr[i].biography.publisher;
  let newObj = { ...superheroArr[i] };

  if (dc.has(y)) {
    newObj.biography.publisher = "DC Comics";
    obj.push(newObj);
  }else if(marvel.has(y)){
    newObj.biography.publisher = "Marvel Comics";
    obj.push(newObj);
  }
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
/*
Set(67) {
  'Marvel Comics',
  'Dark Horse Comics',
  'DC Comics',
  'NBC - Heroes',
  'Wildstorm',
  'Image Comics',
  'null',
  'Oracle',
  'Hawkfire',
  'Huntress',
  'Misfit',
  'Spoiler',
  'Icon Comics',
  'SyFy',
  '',
  'Hanna-Barbera',
  'Vertigo II',
  'George Lucas',
  'Meltdown',
  'Gemini V',
  'Team Epic TV',
  'South Park',
  'HarperCollins',
  'ABC Studios',
  'Universal Studios',
  'Star Trek',
  'IDW Publishing',
  'Impulse',
  'Shueisha',
  'Sony Pictures',
  'J. K. Rowling',
  'Titan Books',
  'Liberty Belle II',
  'Rebellion',
  'Microsoft',
  'Boom-Boom',
  'J. R. R. Tolkien'
}
*/