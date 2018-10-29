const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const foodSchema = new Schema({
  foodName: String,
  calories: Number,
  protein: Number,
  carbs: Number,
  fats: Number,
  foodGroup: String,
  quantity: Number
})

const FoodInfo = mongoose.model('food', foodSchema);

module.exports = FoodInfo
