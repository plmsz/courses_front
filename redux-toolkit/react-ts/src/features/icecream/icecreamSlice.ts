import { createSlice, PayloadAction  } from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

type InitialState = {
    numberOfIceCreams: number
}

const initialState : InitialState= {
    numberOfIceCreams: 20,
};

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state : InitialState) => {
            state.numberOfIceCreams--;
        },
        restocked: (state : InitialState, action : PayloadAction<number>) => {
            state.numberOfIceCreams += action.payload;
        }
    },
    // extraReducers: {  // promotion buy a cake and get a ice cream, to modified the ice cream its necessary a extra reducer
    //     ['cake/ordered']: (state) => {
    //         state.numberOfIceCreams--;
    //     }
    // }
    extraReducers: builder => {
        builder.addCase(cakeOrdered, state => {
            state.numberOfIceCreams--;
        });
    }
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions
