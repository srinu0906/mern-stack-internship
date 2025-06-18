//todo)) Make a proper backend with server and database connection
const express = require('express');
const app = express();
// import mongoose 🐀
const mongoose = require('mongoose');
// import our domain security middleware 🥷🏻
const cors = require('cors');
// cors -> Cross Origin Resource Sharing and using this middleware we can check whether our target domain (frontend) is specified or not
app.use(cors()); // for using middlewares we use app.use()
app.use(express.json()); // for parsing json

// Mongodb connection -> Code is connected to Database
mongoose.connect('mongodb://localhost:27017/pokemondb');
//* todo)) design a blueprint for our database -> how our database should look like
//* SCHEMA -> BLUEPRINT
const pokemonSchema = new mongoose.Schema({
  name: String,
  type: String,
  image: String,
});

// finalizing the blueprint
const Pokemon = mongoose.model('Pokemon', pokemonSchema);
// now our database is ready to use

//* ROUTES
//* CREATE DATA -> create pokemon -> http POST method
app.post('/api/pokemon', async (req, res) => {
  // form in the frotend app -> in which user types -> req.body
  const newPokemon = new Pokemon(req.body);
  const savedPokemon = await newPokemon.save();
  res.json({ message: 'Pokemon Saved successfully', data: savedPokemon });
});

//* READING DATA -> get pokemon data -> http GET method
app.get('/api/pokemon', async (req, res) => {
  const data = await Pokemon.find({}); // return all the pokemons data
  res.json({ message: 'List of pokemons is here', data: data });
});

// update by finding the pokemon id
// {id: 327234709232039 }
app.put('/api/pokemon/:id', async (req, res) => {
  console.log('id', req.params.id); //! req.params -> whateever you write in url and the key is what you give in app.put
  const updated = await Pokemon.findByIdAndUpdate(req.params.id, req.body);
  res.json({ updatedData: updated });
});

// delete by finding the pokemon id
app.delete('/api/pokemon/:id', async (req, res) => {});

const PORT = 5000;
app.listen(PORT, () => {
  console.log('Server is running on port: ' + PORT);
});
