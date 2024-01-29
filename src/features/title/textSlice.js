import { createSlice } from "@reduxjs/toolkit";

const textSlice = createSlice({
    name: 'text',
    initialState: {
        value: '',
        color: 'black',
        size: '16px'
    },
    reducers: {
        setTextAndStyle: (state, action) => {
            state.value = action.payload.text;
            state.color = action.payload.color;
            state.size = action.payload.size;
        }
    }
});

export const { setTextAndStyle} = textSlice.actions;
export const selectText = (state) => state.text.value;
export const selectColor = (state) => state.text.color;
export const selectSize = (state) => state.text.size;

export default textSlice.reducer;