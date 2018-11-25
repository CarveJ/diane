//find food matched item
const { foodDB } = require('../../models/index')

const randomQuantity = () =>{
  return Math.round((Math.random()*2)*100)
}

const adjustFoodItem = (foodItem, quantity) => {
  const factor = quantity/100
  let copy = foodItem
  copy.calories = Math.round(foodItem.calories * factor)
  copy.protein = Math.round(foodItem.protein * factor)
  copy.carbs = Math.round(foodItem.carbs * factor)
  copy.fats = Math.round(foodItem.fats * factor)
  copy.quantity = Math.round(foodItem.quantity * factor)
  return copy
}

//cdt = conditions , which are the calories,protein,carbs,fats conditions we neeed to
// i need to create this extra layer on the top of the database, because of the lack of flexibility
// of my databse where all foods are stored in units of 100g
// as I need to manipulate the quantity and thus calories & etcs and then check if they meet my conditions
//less than the conditions... (painful)

const findFoodThatMatchesRequirements = (foodObjArray, ...cdt)=>{
  const [calories,protein,carbs,fats] = cdt
  return foodObjArray.filter( foodObj => {
    if( foodObj.calories <= calories &&
        foodObj.protein <= protein &&
        foodObj.carbs <= carbs &&
        foodObj.fats <= fats
      ){
        return foodObj
      }
  })
}


const findFMI = async ({calories,protein,carbs,fats}) =>{
  const amount = randomQuantity()

  const result = await foodDB.find({
    calories:{$lte:calories},
    protein: {$lte:protein},
    carbs: {$lte:carbs},
    fats: {$lte:fats}
  })

  const ajFoods = result.map(foodItem => {
    return adjustFoodItem(foodItem, amount)
  })

  const filteredFoods = findFoodThatMatchesRequirements(ajFoods, calories,protein,carbs,fats)
  const pickRandom = Math.round(Math.random()*filteredFoods.length)
  console.log(pickRandom,'randomNumber', filteredFoods.length,'length')
  //picks a random food in the array of foods that match our conditions that are less <= to the value we want
  const chosenOne = filteredFoods[pickRandom]

  return chosenOne
}

exports.findFMI = findFMI
