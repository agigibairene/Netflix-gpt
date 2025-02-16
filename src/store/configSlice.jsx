import { createSlice } from "@reduxjs/toolkit";

const initialState = {lang: "en"};
const configSlice = createSlice({
    name: "configSlice",
    initialState,
    reducers: {
        changeLanguage(state, action){
            state.lang = action.payload;
        }
    }
});

export const { changeLanguage } = configSlice.actions;
export const configureReducer = configSlice.reducer;
