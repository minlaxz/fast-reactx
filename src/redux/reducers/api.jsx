import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoading: false,
    data: null,
    error: null
};

export const apiSlice = createSlice({
    name: "apifetcher",
    initialState,
    reducers: {
        fetchRequest: (state) => {
            state.isLoading = true;
        },
        fetchSuccess: (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
            state.error = null;
        },
        fetchFailure: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
            state.data = null;
        },
        fetchReset: (state) => {
            state.isLoading = false;
            state.error = null;
            state.data = null;
        }
    }
});

export const { fetchRequest, fetchSuccess, fetchFailure, fetchReset } = apiSlice.actions;
export default apiSlice.reducer;
