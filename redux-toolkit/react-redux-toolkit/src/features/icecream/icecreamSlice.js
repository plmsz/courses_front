import { createSlice } from '@reduxjs/toolkit';
import { ordered as cakeOrderer } from '../cake/cakeSlice';

const initialState = {
    numberOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfIceCreams--;
        },
        restocked: (state, action) => {
            state.numberOfIceCreams += action.payload;
        }
    },
    // extraReducers: {  // promotion buy a cake and get a ice cream, to modified the ice cream its necessary a extra reducer
    //     ['cake/ordered']: (state) => {
    //         state.numberOfIceCreams--;
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeOrderer, (state) => {
            state.numberOfIceCreams--;
        });
    }
});

export default iceCreamSlice.reducer;
export { ordered, restocked }  = cakeSlice;
