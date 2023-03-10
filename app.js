const express = require("express");
const MongoConnect = require("./config/db");
const routes = require("./routes");
const cors = require("cors");

app = express();

app.use(cors());

require("dotenv").config();

//Connect to mongo
MongoConnect();

app.use("/api", routes);
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Application is running on: ${PORT}`);
});
