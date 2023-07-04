import bcrypt from 'bcryptjs';
import jwt  from 'jsonwebtoken';
import fs from 'node:fs/promises';
import utenti from "../db/utenti.json" assert {type : "json"}
const DB_PATH_AUTH = "./db/utenti.json"

export const register = async (req, res) => {
  let entries = Object.entries(req.body)
  let username = entries[0][0]
  let { email, password } = entries[0][1]
  console.log(entries[0][1]);
  
    
    const existingUserByUsername = Object.keys(utenti).find(
        (user) => user == username
      );
    
      if (existingUserByUsername) {
        return res.status(400).send('Username already exists');
      }
    
      // Controllo se esiste già un utente con la stessa email
      const existingUserByEmail = Object.values(utenti).find(
        (user) => user.email == email
      );
    
      if (existingUserByEmail) {
        return res.status(400).send('Email already exists');
      }
      
    const hashedPassword = await bcrypt.hash(password, 10);
  
    const updatedUsers = {
      ...utenti,
      ...{
        [username]: {
          email,
          password: hashedPassword,
          heroescreated : []
        },
      },
    };
  
    console.log(updatedUsers);
    await fs.writeFile(DB_PATH_AUTH, JSON.stringify(updatedUsers, null, '  '));
    res.send('ok').end();
  }
  
  
  export const login = async (req, res) => {
    try {
      const user = Object.values(utenti).find((usr) => usr.email === req.body.email);
      if (user) {
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (isPasswordValid) {
          const token = jwt.sign({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '12h' });
          const obj = { user: Object.keys(utenti).find((key) => utenti[key] === user) , token: token };
          res.send(obj);
        } else {
          console.log('Password non valida');
          return res.send('Password non valida');
        }
      } else {
        console.log('Utente non trovato');
        return res.send('Utente non trovato');
      }
    } catch (error) {
      console.error('Error generating token:', error);
      return res.status(500).send('Error generating token');
    }
  };
  

export const prova = (req, res) => {
  res.send("funge")
}