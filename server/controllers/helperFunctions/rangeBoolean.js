const exportObj ={}

exportObj.rangeBoolean = ( addRanged , fallInRange, leeway) => {
  let floor,ceiling
  let min = 1-leeway
  let max = 1+leeway
  floor = addRanged*min
  ceiling = addRanged*max
  return fallInRange >= floor && fallInRange <= ceiling
}

exportObj.foodStructure = ({calories,proteins,carbs,fats})=>{
  //create a function that identifies what combination of food can exist based on the criteria entered
  //eg offSet Calories (-400,-80)
}

module.exports = exportObj
