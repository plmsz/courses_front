const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
    numberOfCakes: 10
};

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: (state) => {
            state.numberOfCakes--;
        },
        restocked: (state, action) => {
            state.numberOfCakes += action.payload;
        }
    }
});

module.exports = cakeSlice.reducer;
module.exports.cakeActions = cakeSlice.actions;
