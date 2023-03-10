// DB configuration connection comes here
const mongoose = require("mongoose");

const MongoConnect = () => {
  return mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("MongoDB Connected");
  });
};

module.exports = MongoConnect;
