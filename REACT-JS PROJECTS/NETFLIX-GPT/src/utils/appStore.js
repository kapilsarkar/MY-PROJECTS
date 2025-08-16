import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import tvReducer from "./tvSlice";
import trendingReducer from "./trendingSlice";
const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: moviesReducer,
        tv: tvReducer,
        trending: trendingReducer,
    }
})

export default appStore