const initState = {
   recommends : null,
   newDisneys : null,
   originals : null,
   trending : null,
}


const moviesReducers = (state = initState, action) => {

switch(action.type){
  case "FETCH_MOVIES" :
    return {
            ...state,
            recommends : action.payload.recommends,
            newDisneys : action.payload.newDisneys,
            originals : action.payload.originals,
            trending : action.payload.trending,
          
    }

    default: 
    return {...state}
}


}

export default moviesReducers;