const initialState = {
  calories:{},
  macros:{},
  loading: false,
  showData: false
}

export default function calorieApp(state = initialState, action) {

  switch (action.type) {
    case 'GET_CALORIES_REQUESTED':
      console.log('GET_CALORIES_REQUESTED')
      return {
        ...state,
        loading: true
      }
    case 'GET_CALORIES_SUCCESS':
      console.log('GET_CALORIES_SUCCESS')
      return {
        ...state,
        calories:{
          ...action.data,
        },
        loading: false,
        showData: true
      }
    case 'GET_CALORIES_FAILURE':
      console.error(action.err)
      return {
        ...state,
        loading: false
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
