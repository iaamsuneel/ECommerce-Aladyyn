import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../API/axios";
import endPoints from "../../API/endPoints";
const initialState: any = {};

export const getServiceDetilsAction = createAsyncThunk('getServiceDetilsAction', async (id: any) => {
    const response = await api.get(endPoints.GET_SERVICE_DETAILS + `?serviceId=${id}&country="india"`)
        .then((res) => {
            return res.data
        })
    return response
})
const getSericeDetailsSlice = createSlice({
    name: 'getServiceSlice',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getServiceDetilsAction.fulfilled, (state: any, action: any) => {
            state.getServiceDetailsData = action.payload;
        })
    }
})
const getServiceDetailsReducer = getSericeDetailsSlice.reducer;
export default getServiceDetailsReducer;
