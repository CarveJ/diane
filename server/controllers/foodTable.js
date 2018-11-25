const { macroToGrams } = require('./helperFunctions/macroToGrams')
const { findFMI } = require('./helperFunctions/findFMI')
const { addToFoodList } = require('./helperFunctions/addItemToFoodList')

exports.foodTable = async (ctx) => {
  ctx.body = await shoppingList( ctx.request.body )
}

const shoppingList = async ({targetCalories, macros}) => {
  let { protein, carbs, fats } = macros

  protein = macroToGrams(protein,targetCalories,4)
  carbs = macroToGrams(carbs,targetCalories,4)
  fats = macroToGrams(fats,targetCalories,8)



  let foodList = {
    "Dairy":[],
    "Spices and Herbs":[],
    "Oils":[],
    "Meat":[],
    "Vegetables":[],
    "Nuts and Seeds":[],
    "Cereal Grains and Pasta":[],
    score: {
      calories:0,
      protein:0,
      carbs:0,
      fats:0
    }
  }

  const offSet = {
    calories:0,
    protein:0,
    carbs:0,
    fats:0
  }

  const offSetCalculator = () => {
    const score = foodList.score
    offSet.calories = targetCalories - score.calories
    offSet.protein = protein - score.protein
    offSet.carbs = carbs - score.carbs
    offSet.fats = fats - score.fats
  }


  offSetCalculator()
  let count = 0
  while(offSet.calories !== 0 && count < 50){
    //assign an empty variable
    let aFood
    // fetch a fooditem from the database that matches the offset foodRequirements
    //use await as we want the next operation to depend on this one
    await findFMI(offSet).then( foodItem => {
      aFood = foodItem
    })

    //update the foodlist with the new fooditem
    if(aFood !== undefined && aFood !== null){
      foodList = addToFoodList(aFood,foodList)
    }
    //update the offSet with the items in the foodList
    offSetCalculator()
    count++
  }

  return foodList
}
