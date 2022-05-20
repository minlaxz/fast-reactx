import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        countPlus: (state) => {
            state.value += 1
        },
        countMinus: (state) => {
            state.value -= 1
        }
    }
});

export const { countPlus, countMinus } = counterSlice.actions;
export default counterSlice.reducer;
