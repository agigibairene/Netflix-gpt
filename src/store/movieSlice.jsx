import { createSlice } from "@reduxjs/toolkit";

const initialState = { nowPlayingMovies: null, trailerVideo: null, popularMovies: null};

const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        addNowPlayingMovies(state, action){
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo(state, action){
            state.trailerVideo = action.payload;
        },
        addPopularMovies(state, action){
            state.popularMovies = action.payload;
        }
    },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies } = movieSlice.actions;
export const moviesReducers = movieSlice.reducer;