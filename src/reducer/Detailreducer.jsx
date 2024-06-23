const initialState = { game: {platforms:[]}, screen: {results:[]},isloading:true ,
} ;

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_DETAIL":
      console.log("Action payload:", action.payload);
      return {
        ...state,
        game: action.payload.game,
        screen: action.payload.screen,
        isloading:false
      };
      case"LOADING_DETAIL":return{
        ...state,
        isloading:true
      }


    
    default:
      return state;
  }
};

export default detailReducer;

