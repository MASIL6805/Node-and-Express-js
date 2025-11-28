const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const {connectToMongoDB}= require('./connect');
const {restrictToLoggedinUsersOnly,checkAuth}=require('./middlewares/auth');
const URL = require('./models/url');

//routes
const urlRoute = require('./routes/url');
const staticRoute= require('./routes/staticRouter');
const userRoute= require('./routes/user');


const app = express();
const PORT = 8001;

connectToMongoDB('mongodb://127.0.0.1:27017/short-url')
    .then(() => {
        console.log('Connected to MongoDB');
    });


app.set('view engine', 'ejs');
app.set("views",path.resolve("./views"));
//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());


// app.get ("/test", async(req, res) => {
//   const allUrls = await URL.find({});
//   return res.render('home',{urls:allUrls});
// });



app.use("/url",restrictToLoggedinUsersOnly, urlRoute);
app.use("/signup", userRoute);
app.use("/user", userRoute);
app.use("/",checkAuth,staticRoute);

app.get("/url/:shortId", async (req, res) => {
    const  shortId  = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      {
        shortId,
      },
      {
        $push: {
          visitHistory: {
            timestamp: Date.now(),
          },
        },
      },
      { new: true }
    );
    res.redirect(entry.redirectUrl);
    });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});