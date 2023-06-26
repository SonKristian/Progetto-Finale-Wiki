import supereroi from "../db/superhero.json" assert {type : "json"}
import generi from "../db/generi.json" assert {type : "json"}

export const getAllGenres = (req, res) =>{
     res.send(generi)
} 

export const getHeroGenre = async (req, res) => {
     let genre = Object.values(supereroi)
     let prova = genre.filter((e) => e.biography.publisher == req.params.nome)
     console.log(genre)
     res.send(prova)
}

export const getAllHeroes = (req, res) =>{

}