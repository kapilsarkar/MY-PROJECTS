import { createSlice } from "@reduxjs/toolkit";

const trendingSlice = createSlice({
    name: "trending",
    initialState: {
        nowTrending: null,
    },
    reducers: {
        addNowTrending: (state, action) => {
            state.nowTrending = action.payload;
        },
    }
})
export const { addNowTrending } = trendingSlice.actions;
export default trendingSlice.reducer;