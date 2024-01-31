import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TextState {
    value: string;
    color: string;
    size: string;
}

const initialState: TextState = {
    value: '',
    color: 'black',
    size: '16px'
}
                                                                                                                                                                                                                                                                                                                                                                    
const textSlice = createSlice({
    name: 'text',
    initialState,
    reducers: {
        setTextAndStyle: (state, action: PayloadAction<{ text: string; color: string; size: string }>) => {
            state.value = action.payload.text;
            state.color = action.payload.color;
            state.size = action.payload.size;
        }
    }
});

export const { setTextAndStyle} = textSlice.actions;
export const selectText = (state: {text: TextState}) => state.text.value;
export const selectColor = (state: {text: TextState}) => state.text.color;
export const selectSize = (state: {text: TextState}) => state.text.size;

export default textSlice.reducer;