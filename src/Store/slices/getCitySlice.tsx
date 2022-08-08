import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "history";
import { api } from "../../API/axios";
import endPoints from "../../API/endPoints";
const initialState: any = {};

export const getCityAction = createAsyncThunk('getCityAction', async (id: any) => {
    const response = await api.post(endPoints.GET_CITY, id)
        .then((res) => {
            return res.data
        })
    return response;
})
const getCitySlice = createSlice({
    name: "getCityAction",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getCityAction.fulfilled, (state: any, action: any) => {
            state.getCityData = action.payload;
        })

    }

})
const getCityReducer = getCitySlice.reducer
export default getCityReducer;

