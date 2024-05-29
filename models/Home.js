const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  masjid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Masjid',
    required: true,
  },
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
}, { timestamps: true });

const Home = mongoose.model('Home', homeSchema);

module.exports = Home;
