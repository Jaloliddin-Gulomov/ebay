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
        case "REMOVE_PRODUCT":
            const id = action.id
            const indexOfRemoveProduct = state.cartProducts.findIndex(product => product.id === id);
            if(indexOfRemoveProduct >= 0){
                state.cartProducts.splice(indexOfRemoveProduct, 1)
            }
            return{
                cartProducts: state.cartProducts
            }
        default:
            return state
    }
}

export default cartReducer