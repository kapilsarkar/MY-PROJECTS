import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
    name: "tv",
    initialState: {
        popularTvShows: null,
        trailerVideo: null,
        topRatedTvShows: null,
        onTheAir: null,
    },
    reducers: {
        addPopularTvShows: (state, action) => {
            state.popularTvShows = action.payload;
        },
        addTopRatedTvShows: (state, action) => {
            state.topRatedTvShows = action.payload;
        },
        addOnTheAir: (state, action) => {
            state.onTheAir = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
    }
})

export const { addPopularTvShows, addTrailerVideo, addTopRatedTvShows, addOnTheAir } = tvSlice.actions;
export default tvSlice.reducer;