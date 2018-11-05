const baseUrl = 'http://localhost:3001'

export default state => next => action => {
  if(action.type === 'GET_CALORIES') {
    const endpoint = baseUrl + '/calories'
    next({
      ...action,
      type:`${action.type}_REQUESTED`
    })

    fetch(endpoint,{
      method:'POST',
      body: JSON.stringify(action.apiInformation),
      headers:{
        'Content-Type':'application/json'
      }
    }).then(res => res.json())
    .then(data => {
      state.dispatch({
        ...action,
        type:`${action.type}_SUCCESS`,
        data
      })
    })
    .catch(err =>{
      state.dispatch({
        ...action,
        type:`${action.type}_FAILURE`,
        err
      })
    })

  }
  return next(action)
}
