let intialstate ={
posts:[],
photos:[]
}
const reducer = (state=intialstate,action)=>{
    switch (action.type) {
        case "POST":
          return {
            ...state,
            posts:action.payload,
          };
          case "PHOTO":
          return {
            ...state,
            photos:action.payload,
          };
        default:
          return state;
      }
}
export default reducer;