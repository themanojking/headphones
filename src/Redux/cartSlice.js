// import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

// const cartslice = createSlice({
//     name:'cart',
//     initialState,
//     reducers:{
//         add: (state,action) => {
//             const existingItem = state.findIndex(item => item.id === action.payload.id);
//               if(existingItem === -1) {
//                 state.push(action.payload)
//               }
//         },
//         remove: (state,action) => {
//             return state.filter(item =>item.id !== action.payload);
//         },
//     }
//  });

//  export const { add,remove } = cartslice.actions;
//  export default cartslice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// Load cart from localStorage
const loadCart = () => {
    const savedCart = localStorage.getItem("shoppingCart");
    return savedCart ? JSON.parse(savedCart) : [];
};

// Save cart to localStorage
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
                saveCart(state); // Save after adding
            }
        },
        remove: (state, action) => {
            const updatedCart = state.filter(item => item.id !== action.payload);
            saveCart(updatedCart); // Save after removing
            return updatedCart;
        },
    }
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
