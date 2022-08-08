import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../API/axios";
import endPoints from "../../API/endPoints";

const initialState: any = {}
export const getAnotherServiceAction = createAsyncThunk("getAnotherServiceAction", async (serviceId: any, sellerId: any) => {
    const response = await api.get(endPoints.GET_ANOTHER_SERVICE + `?serviceId=${serviceId}&sellerId=${sellerId}&country='india'`)
        .then((res) => {
            return res.data
        })
    return response
})
const anotherServiceSlice = createSlice({
    name: 'anotherServiceSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getAnotherServiceAction.fulfilled, (state: any, action: any) => {
            state.getAnotherServiceData = action.payload
        })
    }
})
const anotherServiceReducer = anotherServiceSlice.reducer
export default anotherServiceReducer;