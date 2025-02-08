import { createSlice } from "@reduxjs/toolkit";

const initialState = { nowPlayingMovies: null};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        addNowPlayingMovies(state, action){
            state.nowPlayingMovies = action.payload;
        }
    },
});

export const { addNowPlayingMovies } = movieSlice.actions;
export const moviesReducers = movieSlice.reducer;