exports.foodTable = async (ctx) =>{
  ctx.body = await shoppingList(ctx.request.body)
}

const shoppingList = ({TargetCalories}) => {
  const foodList = {
  }

  return foodList
}

// what needs to be done
// return a list of edible foods
// something that you could cook maybe match a recipe?
// Just do the pyramid
// collect each item from your database that is within some range at random to generate this list
// eg we find foods that add up to the calorie goal
// just by searching for the calorie, without regards to fats/carbs/proteins , but we make it a requirement
// that the foods must belong to a certain group.

// Find food items that match the specifications of the calorie goal ( just calories...)

0.1-0.3g of Oils
2-3 Servings of Milk, Yogurt and Cheese
2-3 servings of Meat 
