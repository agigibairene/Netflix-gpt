import { createSlice } from "@reduxjs/toolkit";

const initialState = {showGptSearch: false};


const gptSlice = createSlice({
    name: "GPT",
    initialState,
    reducers: {
        toggleGptSearchView(state){
           state.showGptSearch = !state.showGptSearch
        }
    }
});

export const { toggleGptSearchView } = gptSlice.actions;
export const gptReducer = gptSlice.reducer;
