import { createSlice } from "@reduxjs/toolkit";


const loadCart = () => {
    const savedCart = localStorage.getItem("shoppingCart");
    return savedCart ? JSON.parse(savedCart) : [];
};


const saveCart = (cart) => {
    localStorage.setItem("shoppingCart", JSON.stringify(cart));
};

const initialState = loadCart();

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        add: (state, action) => {
            const existingItem = state.find(item => item.id === action.payload.id);
            if (!existingItem) {
                state.push(action.payload);
                saveCart(state); 
            }
        },
        remove: (state, action) => {
            const updatedCart = state.filter(item => item.id !== action.payload);
            saveCart(updatedCart); 
            return updatedCart;
        },
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
