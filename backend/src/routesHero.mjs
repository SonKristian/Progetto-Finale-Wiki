import supereroi from "../db/superhero.json" assert {type : "json"}

let superheroArr = Object.entries(supereroi)

export const getGender = (req, res) =>{
     const result = superheroArr.filter( a => a.biography.publisher )
     console.log(result)
     res.send(result)
}