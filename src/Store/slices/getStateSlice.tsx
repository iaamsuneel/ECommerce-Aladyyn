import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../API/axios";
import endPoints from "../../API/endPoints";

const initialState: any = {};
export const getStateAction = createAsyncThunk('getStateAction', async (id: any) => {
    const response = await api.post(endPoints.GET_STATE, id)
        .then((res) => {
            console.log("stateData", res.data)
            return res.data
        })
    return response
})
const getStateSlice = createSlice({
    name: 'getStatedata',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getStateAction.fulfilled, (state: any, action: any) => {
            state.getStateData = action.payload
        })
    }
})
const getStateReducer = getStateSlice.reducer;
export default getStateReducer;