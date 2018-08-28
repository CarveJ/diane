const initialState = {
  calories:{},
  macros:{}
}

export default function calorieApp(state = initialState, action) {

  switch (action.type) {
    case 'GET_CALORIES':
      return {
        ...state,
        calories: {
          ...action.apiInformation
        }
      }
    case 'SET_MACROS':
      return {
        ...state,
        macros:{
          ...action.sliderInformation
        }
      }
  default:
    return state;
  }

}
