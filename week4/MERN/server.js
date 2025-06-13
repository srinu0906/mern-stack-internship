const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors()); // Corrected
app.use(express.json()); // To parse JSON bodies

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/pokemonDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((err) => console.error("MongoDB connection error:", err));

// Schema & Model
const pokemonSchema = new mongoose.Schema({
    name: String,
    type: String,
    image: String,
});

const Pokemon = mongoose.model("Pokemon", pokemonSchema);

// POST route - Create a Pokemon
app.post('/api/pokemon', async (req, res) => {
    try {
        const newPokemon = new Pokemon(req.body);
        const savedPokemon = await newPokemon.save();
        res.json({ message: "Pokemon saved successfully", data: savedPokemon });
    } catch (error) {
        res.status(500).json({ error: "Failed to save Pokemon", details: error });
    }
});

// GET route - Fetch all Pokemons
app.put('/api/pokemon/:id', async (req, res) => {
    try {
        console.log("id",req.params);
        res.json(req.params)

        // const updated = await Pokemon.findById
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch Pokemons", details: error });
    }
});



const PORT = 5000;
app.listen(PORT, () => {
    console.log("Server is running on port:", PORT);
});
