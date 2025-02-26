import { createSlice } from "@reduxjs/toolkit";

const initialState = {showGptSearch: false, gptMovies: [], movieNames: []};


const gptSlice = createSlice({
    name: "GPT",
    initialState,
    reducers: {
        toggleGptSearchView(state){
           state.showGptSearch = !state.showGptSearch
        },
        addGptMovieResults(state, actions){
            const {movieNames, gptMovies} = actions.payload
            state.gptMovies = [...gptMovies];
            state.movieNames = [...movieNames];
        },
    }
});

export const { toggleGptSearchView, addGptMovieResults } = gptSlice.actions;
export const gptReducer = gptSlice.reducer;
