import { DECREMENT, INCREMENT } from "../actions/actions"
const initialState = {
    cart: [],
   fakeData:[{
    food:'Veg Grill Sandwitch',
    energy:'1000 cal',
    price:'1500',
    img: "https://i.ibb.co/D9b5HJ5/Vegetabe-Grilled-Sandwich-Recipe.jpg", 
    item:1
    
    },{
      food:'Chicken Grill Sandwitch',
      energy:'1000 cal',
      price:'1500',
      img: "https://i.ibb.co/DGzzCMQ/download.jpg",
      item:1
    }]
}
const cartReducers = (state = initialState, action) =>{
  
    switch(action.type){
        case INCREMENT:
            const newItem = {
            }
            const newCart = [...state.cart, newItem];
            return {...state, cart: newCart};

        case DECREMENT:
            const cartId = action.cartId;
            const remainingCart = state.cart.filter(item => item.cartId !== cartId);
            return {...state, cart: remainingCart}

        default:
            return state;
    }
}

export default cartReducers;