const mongoose = require("mongoose");
require("dotenv").config();

const connectdb = mongoose.connect(process.env.MONGODB_URL);

module.exports = {
  connectdb,
};
