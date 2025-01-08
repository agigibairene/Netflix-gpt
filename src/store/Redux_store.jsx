import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";


const netflixStore = configureStore({
    reducer: {userReducer}
});

export default netflixStore;