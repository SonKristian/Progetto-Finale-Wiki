import supereroi from "../db/superhero.json" assert {type : "json"}

let superheroArr = Object.values(supereroi)
// Set per memorizzare i publisher distinti
const publisherDistinti = new Set();

// Ciclo forEach per scorrere gli oggetti di oggetti
// for (let i = 0; i < 731; i++) {
//     let y= superheroArr[i].biography.publisher
//     console.log(y)
//     console.log(i)
//     const element = y
//     publisherDistinti.add(element)
// }

// Array finale contenente i publisher distinti
// const publisherArray = Array.from(publisherDistinti);


// console.log(superheroArr.filter(el => el.biography.publisher == "Marvel Comics"))
let obj = []

const marvel = new Set(['Ant-Man', 'Hawkeye', 'Captain Marvel',])
const dc = new Set([])

for (let i = 0; i < 731; i++) {
  let y = superheroArr[i].biography.publisher;
  let newObj = { ...superheroArr[i] };

  if (marvel.has(y)) {
    newObj.biography.publisher = "Marvel Comics";
    
  }
  obj.push(newObj);

}
console.log(obj)
/*
Set(90) {
  'Marvel Comics',
  'Dark Horse Comics',
  'DC Comics',
  'NBC - Heroes',
  'Sharon Carter',
  'Wildstorm',
  'Archangel',
  'Tempest',
  'Image Comics',
  'Giant-Man',
  'Toxin',
  'Angel',
  'Speedy',
  'null',
  'Goliath',
  'Spectre',
  'Oracle',
  'Hawkfire',
  'Huntress',
  'Misfit',
  'Spoiler',
  'Nightwing',
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
  'Binary',
  'HarperCollins',
  'ABC Studios',
  'Universal Studios',
  'Star Trek',
  'Evil Deadpool',
  'IDW Publishing',
  'Deadpool',
  'Black Racer',
  'Speed Demon',
  'Impulse',
  'Shueisha',
  'Atlas',
  'Sony Pictures',
  'J. K. Rowling',
  'Batgirl III',
  'Flash IV',
  'Titan Books',
  'Phoenix',
  'Liberty Belle II',
  'Power Woman',
  'Rebellion',
  'Iron Lad',
  'Power Man',
  'Microsoft',
  'Boom-Boom',
  'Batgirl V',
  'She-Thing',
  'Batman II',
  'Batgirl',
  'Speedball',
  'Jean Grey',
  'Luke Cage',
  'Robin II',
  'Robin III',
  'Red Hood',
  'Red Robin',
  'J. R. R. Tolkien',
  'Spider-Carnage',
  'Venom III',
  'Ms Marvel II',
  'Aztar',
  'Penance II',
  'Arsenal',
  'Scarlet Spider',
  'Superman Prime One-Million',
  'Angel Salvadore',
  'Rune King Thor',
  'Warpath',
  'Anti-Venom',
  'Scorpion',
  'Blaquesmith',
  'Vindicator II',
  'Anti-Vision',
  'Thunderbird II'
}
*/