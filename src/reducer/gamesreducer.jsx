const initstate = {
  userChoice: {
    age: null, // Initialize age to null
    showAdultGames: false,
  },
  populargames: [],
  newgames: [],
  upcoming: [],
  searched:[]
};

const gamereducer = (state = initstate, action) => {
  switch (action.type) {
    case "FETCH_GAMES":
      return { ...state ,
        populargames:action.payload.populargames,
        upcoming:action.payload.upcoming,
        newgames:action.payload.newgames
      };
      case"FETCH_SEARCHED":
      return{
           ...state,
           searched:action.payload.searched
      }
       case "CLEAR_SEARCHED":
        return{
          ...state,
          searched:[]
        }
        case 'SET_USER_CHOICE':
          return {
            ...state,
            userChoice: {
              age: action.payload.age,
              showAdultGames: action.payload.showAdultGames,
            },
          }
          case "SET_WARNING_MESSAGE":
      return {
        ...state,
        warningMessage: action.payload,
      };
    default:
      return { ...state };
  }
};
// const fetchgames=()=>{
//     return{
//     type:'FETCH_GAMES'
//     }
// }
export default gamereducer