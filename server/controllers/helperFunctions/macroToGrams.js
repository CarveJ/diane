const macroToGrams = (macro,calories,factor) => {
  let contribution = (macro/100)*calories
  return contribution/factor
}

exports.macroToGrams = macroToGrams
