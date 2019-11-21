const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();


app.use(bodyParser.json());
app.use("/api",
  require('./controllers/PortfolioController'),
  require('./controllers/MenuController')
);

mongoose.connect("mongodb://localhost/react-db", {useUnifiedTopology: true,  useNewUrlParser: true });

app.listen(4000, () => {
  console.log("SERVER STARTED!");
});

