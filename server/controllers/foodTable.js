const model = require('../models/index')
const helper = require('./helperFunctions/rangeBoolean')
const rangeBoolean = helper.rangeBoolean

exports.foodTableCalculator = async (ctx) => {
  ctx.body = await calculateFoodRequirements(ctx.request.body)
}

// ctx.request.body contains macros and calories calculateFoodRequirements

const calculateFoodRequirements = async (info) => {

  const DairyFoods = await model.find({foodGroup:'Dairy'});
  const SpicesAndHerbsFoods = await model.find({foodGroup:'Spices and Herbs'});
  const OilsFoods = await model.find({foodGroup:'Oils'});
  const MeatFoods = await model.find({foodGroup:'Meat'});
  const VegetablesFoods = await model.find({foodGroup:'Vegetables'});
  const NutsAndSeedsFoods = await model.find({foodGroup:'Nuts and Seeds'});
  const CerealsAndPastaFoods = await model.find({foodGroup:'Cereal Grains and Pasta'});

  const findFoodWithThisValue = async ({calories=0 , proteins=0, carbs=0, fats=0}) => {
    const foodcheck = await model.find({
      calories,
      proteins,
      carbs,
      fats
    })
    return foodcheck
  }


  const DairyFoodsLength = DairyFoods.length
  const SpicesAndHerbsFoodsLength =  SpicesAndHerbsFoods.length
  const OilsFoodsLength = OilsFoods.length
  const MeatFoodsLength = MeatFoods.length
  const VegetablesFoodsLength = VegetablesFoods.length
  const NutsAndSeedsFoodsLength = NutsAndSeedsFoods.length
  const CerealsAndPastaFoodsLength = CerealsAndPastaFoods.length

  const calorieGoal = info.calories.TargetCalorie

  const proteinCalories = calorieGoal * (info.macros.Protein/100)
  const carbsCalories = calorieGoal * (info.macros.Carbohydrate/100)
  const fatsCalories = calorieGoal * (info.macros.Fats/100)

  const gramsOfProtein = Math.round(proteinCalories / 4)
  const gramsOfCarbs = Math.round(carbsCalories / 3.75)
  const gramsOfFats = Math.round(fatsCalories / 9)

  const foodList = {
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

  const checkList = {
    calories: Math.round(calorieGoal),
    caloriesMax: Math.round(calorieGoal)+50,
    caloriesMin: Math.round(calorieGoal)-50,
    protein: gramsOfProtein,
    proteinMax: gramsOfProtein +15,
    proteinMin: gramsOfProtein -15,
    carbs: gramsOfCarbs,
    carbsMax: gramsOfCarbs+15,
    carbsMin: gramsOfCarbs-15,
    fats: gramsOfFats,
    fatsMax: gramsOfFats+10,
    fatsMin: gramsOfFats-10,
  }

  let randomNumber = (length) => {
    return Math.floor(Math.random()*length)
  }

  const addItemToFoodList = (foodObj) => {
    for( let key in foodList ) {
      if ( key === foodObj.foodGroup) {
        foodList[key].push(foodObj)
        if ( foodObj.calories !== 0) {
          foodList.score.calories += foodObj.calories
        }
        if ( foodObj.calories !== 0) {
          foodList.score.protein += foodObj.protein
        }
        if ( foodObj.carbs !== 0) {
          foodList.score.carbs += foodObj.carbs
        }
        if ( foodObj.fats !== 0) {
          foodList.score.fats += foodObj.fats
        }
      }
    }
  }


  const minusItemToFoodList = (foodObj) => {
    for( let key in foodList ) {
      if (key === foodObj.foodGroup) {
        for (let i=0; i<foodList[key].length; i++) {
          if (foodList[key][i].foodName === foodObj.foodName) {
            foodList.score.calories -= foodObj.calories
            foodList.score.protein -= foodObj.protein
            foodList.score.carbs -= foodObj.carbs
            foodList.score.fats -= foodObj.fats
            foodList[key].splice([i],1)
          }
        }
      }
    }
  }

  function RepsMOFO(x, iterateFunction ) {
    for (let i=0; i<x; i++) {
      addItemToFoodList(iterateFunction())
    }
  }

  function adjustFoodItem(x, foodObj ) {
    const copy = foodObj
    copy.calories = Math.round(copy.calories*x)
    copy.protein = Math.round(copy.protein*x)
    copy.carbs = Math.round(copy.carbs*x)
    copy.fats = Math.round(copy.fats*x)
    copy.quantity = Math.round(copy.quantity*x)
    return copy
  }

  const randomFoodItem = (num, foodType ) => {
    return adjustFoodItem(num, foodType[randomNumber(foodType.length)])
  }

  const DairyFoodItem = () => {
    return adjustFoodItem((Math.random()*0.8).toFixed(1), DairyFoods[randomNumber(DairyFoodsLength)])
  }

  const SpicesAndHerbsFoodItem = () => {
      return adjustFoodItem(0.1, SpicesAndHerbsFoods[randomNumber(SpicesAndHerbsFoodsLength)])
  }

  const OilsFoodItem = () => {
      return adjustFoodItem( (Math.random()*0.4).toFixed(1) + 0.1, OilsFoods[randomNumber(OilsFoodsLength)])
    }

  const MeatFoodItem = () => {
    return adjustFoodItem(((Math.random()*2).toFixed(1)), MeatFoods[randomNumber(MeatFoodsLength)])
  }

  const VegetablesFoodItem = () => {
    return adjustFoodItem((Math.random()*1.5).toFixed(1), VegetablesFoods[randomNumber(VegetablesFoodsLength)])
  }

  const NutsAndSeedsFoodItem = () => {
    return adjustFoodItem((Math.random()*1).toFixed(1), NutsAndSeedsFoods[randomNumber(NutsAndSeedsFoodsLength)])
  }

  const CerealsAndPastaFoodItem = () => {
    return adjustFoodItem((Math.random()*1.5).toFixed(1), CerealsAndPastaFoods[randomNumber(CerealsAndPastaFoodsLength)])
  }

  const arrayOfItemFunctions =[ DairyFoodItem, SpicesAndHerbsFoodItem, OilsFoodItem, MeatFoodItem, VegetablesFoodItem, NutsAndSeedsFoodItem, CerealsAndPastaFoodItem ]

  RepsMOFO(1, DairyFoodItem);
  RepsMOFO(4, SpicesAndHerbsFoodItem);
  RepsMOFO(1, OilsFoodItem);
  RepsMOFO(1, MeatFoodItem);
  RepsMOFO(3, VegetablesFoodItem);
  RepsMOFO(1, NutsAndSeedsFoodItem);
  RepsMOFO(1, CerealsAndPastaFoodItem);

  const randomSelection = () => {
    return Math.floor(Math.random()*7)
  }

  const arrayOfFoodGroup = ["Dairy", "Spices and Herbs", "Oils", "Meat", "Vegetables","Nuts and Seeds", "Cereal Grains and Pasta"]

  const offSet = {
    calories:0,
    protein:0,
    carbs:0,
    fats:0
  }

  const offSetCalculator = () => {
    if (foodList.score.calories < checkList.caloriesMin) offSet.calories = (checkList.caloriesMin - foodList.score.calories).toFixed(0)
    if (foodList.score.calories > checkList.caloriesMax) offSet.calories = (checkList.caloriesMax - foodList.score.calories).toFixed(0)

    if (foodList.score.protein < checkList.proteinMin) offSet.protein = (checkList.proteinMin - foodList.score.protein).toFixed(0)
    if (foodList.score.protein > checkList.proteinMax) offSet.protein = (checkList.proteinMax - foodList.score.protein).toFixed(0)

    if (foodList.score.carbs < checkList.carbsMin) offSet.carbs = (checkList.carbsMin - foodList.score.carbs).toFixed(0)
    if (foodList.score.carbs > checkList.carbsMax) offSet.carbs = (checkList.carbsMax - foodList.score.carbs).toFixed(0)

    if (foodList.score.fats < checkList.fatsMin) offSet.fats = (checkList.fatsMin - foodList.score.carbs).toFixed(0)
    if (foodList.score.fats > checkList.fatsMax) offSet.fats = (checkList.fatsMax - foodList.score.carbs).toFixed(0)
  }


  //rangeBoolean Takes to arguments which will create and a range of values for arg
  // one in which arg two must fall into that will satisfy it.

  const checkFood = (criteria,foodItem,rangeAllowance) => {
    const arrayOfObjKeys = Object.keys(criteria)

    const check = arrayOfObjKeys.reduce((accum,name,index)=>{
      if (rangeBoolean(criteria[name] ,foodItem[name] ,rangeAllowance)) {
        return accum + 1
      }
      return accum
    },0)

    if (check === arrayOfObjKeys.length) {
      return true
    }
    return false
  }


  const findItemInFoodListWithThisReq = async (offSetGoal) => {
      const result = []

      let rangeNum = 0.1

      const filteredGoals = Object.keys(offSetGoal).reduce( (accum,item,i) => {
        if (offSetGoal[item] < 0) {
          accum[item] = offSetGoal[item]*-1
          return accum
        }
        return accum
      },{})

      const findFoods = (criteriaGoals, rangeAllowance) => {
        Object.keys(foodList).map( (foodGroup,index) => {
          if ( Array.isArray(foodList[foodGroup]) ) {
              foodList[foodGroup].map( (food, index) => {
                if(checkFood(criteriaGoals,food,rangeAllowance)) {
                  result.push(food)
                }
              })
          }
        })
      }

      while( result.length === 0 ) {
        console.log(rangeNum,'start of loop')
        findFoods(filteredGoals, rangeNum)
        console.log(filteredGoals,'filteredGoals')
        console.log(result)
        rangeNum += 0.05
        rangeNum.toFixed(2)
        console.log(rangeNum,'end of loop')
      }


    }

      // we must find the food item that minimizes the offset value.

  offSetCalculator()

  const optimizeCalories = () => {
    if(offSet.calories > 0) {
      findFoodWithThisValue(offSet.calories)
    }

    else if (offSet.calories < 0) {
      findItemInFoodListWithThisReq(offSet)
    }

  }
  optimizeCalories()

  return foodList
}
