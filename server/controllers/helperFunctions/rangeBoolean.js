const rangeBoolean = ( addRanged , fallInRange) => {
  let floor,ceiling
  floor = addRanged*0.9
  ceiling = addRanged*1.1
  return fallInRange >= floor && fallInRange <= ceiling
}

exports.rangeBoolean = rangeBoolean
