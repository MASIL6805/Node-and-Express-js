const express = require('express');
const { handleGenerateNewShortURL, handleGetAnalytics } = require("../controllers/url");

const router = express.Router();

// Generate new short URL
router.post("/", handleGenerateNewShortURL);

// Analytics route
router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
