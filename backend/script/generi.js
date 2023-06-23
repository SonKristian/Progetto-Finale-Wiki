import supereroi from "../db/superhero.json" assert {type : "json"}

let superheroArr = Object.values(supereroi)
// Set per memorizzare i publisher distinti
const publisherDistinti = new Set();

// Ciclo forEach per scorrere gli oggetti di oggetti

for (let i = 0; i < 731; i++) {
    let y= superheroArr[i].biography.publisher
    // console.log(y)
    // console.log(i)
    const element = y
    publisherDistinti.add(element)
}

console.log(publisherDistinti)

// console.log(superheroArr.filter(el => el.biography.publisher == "Marvel Comics"))

// let obj = []

// const marvel = new Set([])
// const dc = new Set([])

// for (let i = 0; i < 731; i++) {
//   let y = superheroArr[i].biography.publisher;
//   let newObj = { ...superheroArr[i] };

//   if (marvel.has(y)) {
//     newObj.biography.publisher = "Marvel Comics";
    
//   }
//   obj.push(newObj);

// }
// console.log(obj)

/*
Set(67) {
  'Marvel Comics',
  'Dark Horse Comics',
  'DC Comics',
  'NBC - Heroes',
  'Sharon Carter',
  'Wildstorm',
  'Archangel',
  'Tempest',
  'Image Comics',
  'Toxin',
  'Angel',
  'Speedy',
  'null',
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
  'HarperCollins',
  'ABC Studios',
  'Universal Studios',
  'Star Trek',
  'IDW Publishing',
  'Black Racer',
  'Speed Demon',
  'Impulse',
  'Shueisha',
  'Sony Pictures',
  'J. K. Rowling',
  'Flash IV',
  'Titan Books',
  'Phoenix',
  'Liberty Belle II',
  'Power Woman',
  'Rebellion',
  'Power Man',
  'Microsoft',
  'Boom-Boom',
  'She-Thing',
  'Batman II',
  'Speedball',
  'Jean Grey',
  'Red Hood',
  'J. R. R. Tolkien',
  'Ms Marvel II',
  'Aztar',
  'Penance II',
  'Arsenal',
  'Superman Prime One-Million',
  'Angel Salvadore',
  'Rune King Thor',
  'Blaquesmith',
  'Vindicator II',
  'Anti-Vision',
  'Thunderbird II'
}
*/