const addToFoodList = (foodItem, foodList) => {
  const { foodGroup } = foodItem

  Object.keys(foodList).filter( flKey => {
    if(flKey === foodGroup){
      foodList[foodGroup].push(foodItem)
    }
  })

  Object.keys(foodList.score).map(scoreKey => {
     foodList.score[scoreKey] += foodItem[scoreKey]
  })

  return foodList
}

exports.addToFoodList = addToFoodList
