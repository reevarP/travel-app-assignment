import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userData: {},
};

export const persistSlice = createSlice({
    name: "persistSlice",
    initialState,
    reducers: {
        saveUserData: (state, action) => {
            state.userData = action.payload;
        },
    },
});

export const { saveUserData } = persistSlice.actions;

export default persistSlice.reducer;
