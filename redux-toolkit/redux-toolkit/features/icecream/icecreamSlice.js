const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
    numberOfIceCreams: 20,
}

const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
        ordered: (state) => {
           state.numberOfIceCreams--
        },
        restocked: (state, action) => {
            state.numberOfIceCreams += action.payload
        }
    }
})

module.exports = iceCreamSlice.reducer
module.exports.iceCreamActions = iceCreamSlice.actions