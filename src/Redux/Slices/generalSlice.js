import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filterData: {
        cityName: "",
        startDate: "",
        endDate: "",
        adultNum: 1,
        childrenNum: 0,
        roomNum: 1,
        petFriendly: false,
        childrenAges: [],
    },
};

export const generalSlice = createSlice({
    name: "generalSlice",
    initialState,
    reducers: {
        saveFilterData: (state, action) => {
            state.filterData[action.payload.name] = action.payload.value;
        },
    },
});

export const { saveFilterData } = generalSlice.actions;

export default generalSlice.reducer;
