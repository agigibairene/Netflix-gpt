import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { moviesReducers } from "./movieSlice";


const netflixStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducers
    }
});

export default netflixStore;
