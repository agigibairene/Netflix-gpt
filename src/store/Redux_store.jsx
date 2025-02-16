import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import { moviesReducers } from "./movieSlice";
import { gptReducer } from "./gptSlice";
import { configureReducer } from "./configSlice";


const netflixStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducers,
        gpt: gptReducer,
        config: configureReducer,
    }
});

export default netflixStore;
