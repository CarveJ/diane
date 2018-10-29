const foodTable = require('./foodTable')
exports.foodTableCalculator = foodTable.foodTableCalculator

exports.calorieCalculator = async (ctx) => {
  ctx.body = await calorieInformation(ctx.request.body)
}


const calorieInformation = (info) => {
  let REE;
  let TEE;
  let calorieGoal
  let check;

  if (info.gender === 'Female') {
    REE = 10*info.bodyweight + 6.25*info.height -5*info.age - 161
  }

  if (info.gender === 'Male') {
    REE = 10*info.bodyweight + 6.25*info.height -5*info.age + 5
  }

  if (info.activityLevel === 'Codeworks Programmer') {
    check = 1.4
  }
  if (info.activityLevel === 'Office Worker') {
    check = 1.6
  }
  if (info.activityLevel === 'Normal Person') {
    check = 1.9
  }
  if (info.activityLevel === 'Regular Exercise') {
    check = 2.1
  }
  if (info.activityLevel === 'Savage') {
    check = 2.4
  }

  TEE = REE * check

  if( info.goal === 'Get sexy') {
    calorieGoal = TEE + 250;
  }
  if( info.goal === 'Maintenece' ){
    calorieGoal = TEE
  }

  if( info.goal === 'Lose 10%' ){
    calorieGoal = TEE*0.9;
  }

  if( info.goal === 'Lose 15%' ){
    calorieGoal = TEE*0.85;
  }

  if( info.goal === 'Lose 20%' ){
    calorieGoal = TEE*0.8
  }

  return {
    BMR: REE,
    CalorieExpenditure: TEE,
    TargetCalorie: calorieGoal
  }
}
