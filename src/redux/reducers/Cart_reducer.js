


const initialState = {
    cartItems: []
  }


  const reducer = (state = initialState, action) => {
  console.log(action)
    switch (action.type) {
      case "ADD":
        return {
          
        };
      
      default:
        return state;
    }
  };
  

export default reducer;