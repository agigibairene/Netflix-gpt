import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";


const netflixStore = configureStore({
    reducer: {
        user: userReducer
    }
});

export default netflixStore;
