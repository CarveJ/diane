const initialState = {
  personalData:{
    gender: 'Female',
    age: '50',
    bodyweight:'60',
    height:'160',
    activityLevel: 'Programmer',
    goal:'Lose 10%'
  },
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
    case 'ADD_PERSONAL_DATA':
      console.log('ADD_PERSONAL_DATA')
      return {
        ...state,
        personalData:action.data
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
