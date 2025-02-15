import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { moviesReducers } from "./movieSlice";
import { gptReducer } from "./gptSlice";


const netflixStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducers,
        gpt: gptReducer
    }
});

export default netflixStore;
