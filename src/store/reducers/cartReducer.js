import * as actionTypes from "../actions/actions";

const cartReducer = (state = [], action) => {
    let updatedCart;
    let updatedItemIndex;

    switch (action.type) {
        case actionTypes.ADD_SHOES:
            updatedCart = [...state];

            updatedItemIndex = updatedCart.findIndex(
                (item) => item.id === action.payload.id
            );

            if (updatedItemIndex < 0) {
                updatedCart.push({
                    ...action.payload,
                    quantity: 1
                });
            } else {
                const updatedItem = {
                    ...updatedCart[updatedItemIndex],
                }
                updatedItem.quantity++;
                updatedCart[updatedItemIndex] = updatedItem;
            }
            return updatedCart;


        case actionTypes.REMOVE_SHOES:
            updatedCart = [...state];

            updatedItemIndex = updatedCart.findIndex(
                (item) => item.id === action.payload
            )
            const updatedItem = {
                ...updatedCart[updatedItemIndex]
            }
            updatedItem.quantity--;

            if (updatedItem.quantity <= 0) {
                updatedCart.splice(updatedItemIndex, 1);
            } else {
                updatedCart[updatedItemIndex] = updatedItem;
            }
            return updatedCart;
        default:
            return state;

    }
}

export default cartReducer;