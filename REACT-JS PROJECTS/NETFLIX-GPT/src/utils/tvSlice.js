import { createSlice } from "@reduxjs/toolkit";

const tvSlice = createSlice({
    name: "tv",
    initialState: {
        popularTvShows: null,
    },
    reducers: {
        addPopularTvShows: (state, action) => {
            state.popularTvShows = action.payload;
        },
    }
})

export const { addPopularTvShows } = tvSlice.actions;
export default tvSlice.reducer;