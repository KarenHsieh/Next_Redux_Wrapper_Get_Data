

const initState = {
  results: {}
}

function resultsReducer (state = initState, action) {
  // console.log('========= [resultsReducer Start] =========');
  // console.log(state);
  // console.log(action.payload);
  // console.log('========= [resultsReducer End] =========');
  // console.log('========================================');
  
  switch (action.type) {
    // case 'GET_PRODUCTS': {
    //   return {
    //     ...state,
    //     results: action.payload.results,
    //   }
    // },
    case 'FETCH_DATA_SUCCESS': {
      return {
        ...state,
        results: action.payload.results,
      }
    }

    default:
      return state
  }
}

export default resultsReducer;