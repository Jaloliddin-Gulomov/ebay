const initialState = {
    cartProducts: []
}

const cartReducer = (state = initialState, action) => {
    console.log(action)
    switch(action.type){
        case "CART_PRODUCT":
        return{
            cartProducts: [...state.cartProducts, action.product]
        }
        default:
            return state
    }
}

export default cartReducer