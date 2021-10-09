import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching
    },
    reducers: {
        addProduct: (state, action) => {
            state.quantity += 1;
            state.products.push(action.payload) //payload is the new product
            state.total += action.payload.price * action.payload.quantity
        },
    },
});

export const { addProduct } = cartSlice.actions;
export default userSlice.reducer;