import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../API/axios";
import endPoints from "../../API/endPoints";

const initialState: any = {};

export const getCountryAction = createAsyncThunk('getCountryAction', async () => {
    const response = await api.get(endPoints.GET_COUNTRY)
        .then((res) => {
            console.log(res.data)
            return res.data;
        })
    return response
})
const getCountrySlice = createSlice({
    name: 'getAllCountryData',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getCountryAction.fulfilled, (state: any, action: any) => {
            state.getAllCountryData = action.payload
            console.log("hello", action.payload)
        })
    }
});
const getCountryReducer = getCountrySlice.reducer;
export default getCountryReducer;