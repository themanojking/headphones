import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartslice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        add: (state,action) => {
            const existingItem = state.findIndex(item => item.id === action.payload.id);
              if(existingItem === -1) {
                state.push(action.payload)
              }
        },
        remove: (state,action) => {
            return state.filter(item =>item.id !== action.payload);
        },
    }
 });

 export const { add,remove } = cartslice.actions;
 export default cartslice.reducer;