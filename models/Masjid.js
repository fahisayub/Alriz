const mongoose = require('mongoose');

const masjidSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  committeeMembers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  }],
}, { timestamps: true });

const Masjid = mongoose.model('Masjid', masjidSchema);

module.exports = Masjid;
