const mongoose = require('mongoose');

const mealAssignmentSchema = new mongoose.Schema({
  home: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Home',
    required: true,
  },
  mealType: {
    type: String,
    enum: ['breakfast', 'lunch', 'dinner'],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

const MealAssignment = mongoose.model('MealAssignment', mealAssignmentSchema);

module.exports = MealAssignment;
