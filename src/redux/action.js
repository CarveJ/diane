export const postData = (info)=> {
  return({
    type: 'POST_DATA',
    info: info
  })
}

export function GetCalories(apiInformation){
  return {
    type: 'GET_CALORIES',
    apiInformation
  }
}

export function SetMacros(sliderInformation){
  return {
    type: 'SET_MACROS',
    sliderInformation
  }
}

export const AddPersonalData = (data)=>({
  type:'ADD_PERSONAL_DATA',
  data
})
