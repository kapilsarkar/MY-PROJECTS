import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
    name: "tv",
    initialState: {
        popularTvShows: null,
        trailerVideo: null,
    },
    reducers: {
        addPopularTvShows: (state, action) => {
            state.popularTvShows = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
    }
})

export const { addPopularTvShows, addTrailerVideo } = tvSlice.actions;
export default tvSlice.reducer;