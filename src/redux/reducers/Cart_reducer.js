


const initialState = {
  cartItems: []
}


const reducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {

    case "ADD": {

      let ItemAajouter = state.cartItems.find(item => item.id === action.data.id)
       

      if (ItemAajouter) {

        let Itemquantity = state.cartItems.filter(item => item.id === action.data.id)
        Itemquantity[0].quantity += 1; 
        let itemsfiltered = state.cartItems.filter(item => item.id !== action.data.id)
       
        return {
          ...state,
          cartItems:  [...itemsfiltered, Itemquantity[0]]
        }
      }
      else {
        let newItem={...action.data,quantity:1} 

        return {
          ...state,
          cartItems: [...state.cartItems, newItem],
          
         
        }

      }
    }

    default:
      return state;
  }
};


export default reducer;