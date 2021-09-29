export const initialState = {
    basket: (() => {
        const carts = localStorage.getItem('basket');
    const val = JSON.parse(carts)
    return val ? val : []
    })(),
    user: null
};



export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => item.price + amount, 0);
const reducer = (state, action) => {

     
    
    switch (action.type) {
        case "ADD_TO_BASKET": //logic to add item to basket 
        const cart = {
            ...state,
            basket: [...state.basket, action.item],
        };
        
        localStorage.setItem('basket', JSON.stringify(cart.basket))
       console.log(cart);
        return cart

        case "REMOVE_FROM_BASKET"://logic for removing item from basket
            const index = state.basket.findIndex(  //this will check all the items in the basket
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {  //if item exists in basket 
                newBasket.splice(index, 1); //removing item from basket
            } else {
                console.warn(`Cant remove product (id: ${action.id})as its not in basket!`)
            }
            const item = {
                ...state,
                basket: newBasket
            }

            // wont refresh  the items which r in shopping Cart
            localStorage.setItem('basket', JSON.stringify(item.basket))
            console.log(item);
            return item


        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            console.log('from default');
            return state;
    }
};
export default reducer;