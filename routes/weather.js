// routes/weather.js besttt
/*const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const apiKey = "90d8e7e188a59da7cbbd150886fe7949"; // Replace with your actual API key
    const city = req.query.city;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const weatherData = response.data;

    res.status(200).json({ weatherData });
  } catch (error) {
    console.error("Weather API error:", error);
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

module.exports = router;*/
/*
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const apiKey = "90d8e7e188a59da7cbbd150886fe7949"; // Replace with your actual API key
    const city = req.query.city;

    if (!city) {
      return res.status(400).json({ error: "City parameter is missing" });
    }

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );

    const weatherData = response.data;
    res.status(200).json({ weatherData });
  } catch (error) {
    console.error("Weather API error:", error);
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

module.exports = router;
*/
// routes/weather.js
const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const apiKey = "90d8e7e188a59da7cbbd150886fe7949"; // Replace with your actual API key
    const city = req.query.city;

    if (!city) {
      return res.status(400).json({ error: "City parameter is missing" });
    }

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    );
    const weatherData = response.data;
    console.log("Weather Data:", weatherData);

    res.status(200).json({ weatherData });
  } catch (error) {
    console.error("Weather API error:", error);
    res.status(500).json({ error: "Error fetching weather data" });
  }
});

module.exports = router;
