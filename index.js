const express = require("express"),
  mongoose = require("mongoose"),
  bodyParser = require("body-parser"),
  cors = require('cors'),
  cookieParser = require('cookie-parser'),
  app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());
app.use("/api",
  require('./controllers/PortfolioController'),
  require('./controllers/MenuController'),
  require('./controllers/LoginController'),
  require('./controllers/AuthController'),
  require('./controllers/SkillController'),
  require('./controllers/ServicesController'),
  require('./controllers/FeedbackController')
);


mongoose.connect("mongodb://localhost/react-db", {useUnifiedTopology: true, useNewUrlParser: true});

app.listen(4000, () => {
  console.log("SERVER STARTED!");
});

