//const {nanoid} = require("nanoid");
const shortId = require("shortid");
const URL = require("../models/url");

async function handleGenerateNewShortURL(req,res) {

     console.log("Body received:", req.body); // add this line for debugging

    const body = req.body;
    if(!body.url) {
        return res.status(400).json({error: "URL is required"});
    }
    const shortID = shortId.generate();
    await URL.create({
        shortId: shortID,
        redirectUrl: body.url,
        visitHistory: [],
        createdBy:req.user._id,
    });

    return res.render('home',{id:shortID});
   // return res.json({id: shortID}); 
}


async function handleGetAnalytics(req,res) {
    const shortID = req.params.shortId;
    const result=await URL.findOne({
        shortId: shortID
    });
    return res.json({
        totalClicks: result.visitHistory.length,
        analytics: result.visitHistory
    });
}

module.exports = {
    handleGenerateNewShortURL,
    handleGetAnalytics,
};