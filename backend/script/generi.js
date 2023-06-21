import supereroi from "../db/superhero.json" assert {type : "json"}

let superheroArr = Object.values(supereroi)
// Set per memorizzare i publisher distinti
const publisherDistinti = new Set();

// Ciclo forEach per scorrere gli oggetti di oggetti
for (let i = 0; i < 731; i++) {
    let y= superheroArr[i].biography.publisher
    console.log(y)
    console.log(i)
    const element = y
    publisherDistinti.add(element)
}

// Array finale contenente i publisher distinti
// const publisherArray = Array.from(publisherDistinti);

console.log(publisherDistinti)

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
  'Captain Marvel',
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
  'Ant-Man',
  'Shueisha',
  'Atlas',
  'Hawkeye',
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