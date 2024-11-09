const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

// Enabiling CORS and parse JSON request bodies
app.use(cors());
app.use(bodyParser.json());

// Connecting to my local MongoDB
mongoose.connect("mongodb://localhost:27017/mystockappdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Define the schema
const stockSchema = new mongoose.Schema({
    company: String, // Fixed typo from "comapny" to "company"
    description: String,
    initial_price: Number,
    price_2002: Number,
    price_2007: Number,
    symbol: String,
});

// Define the model
const Stock = mongoose.model("Stock", stockSchema);

// Define a route to get stocks data
app.get("/api/stocks", async(req, res) => {
    try {
        const stocks = await Stock.find();
        res.json(stocks);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

app.post("/api/watchlist", async(req, res) => {
    try {
        const {
            company,
            description,
            initial_price,
            price_2002,
            price_2007,
            symbol,
        } = req.body;

        const stock = new Stock({
            company,
            description,
            initial_price,
            price_2002,
            price_2007,
            symbol,

        });
        await stock.save();
        res.json({ message: "Stock is added to your watchlist successfully Arunava" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }


});

// Start the server
app.listen(PORT, () => {
    console.log(`AS'Server is running on port ${PORT}`);
});