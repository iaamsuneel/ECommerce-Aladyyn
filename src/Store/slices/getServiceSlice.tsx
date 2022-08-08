import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../API/axios";
import endPoints from "../../API/endPoints";
const initialState: any = {}
export const getServiceAction = createAsyncThunk("getServiceAction", async ({ catId, subCatId }: { catId: any, subCatId: any }) => {
    const response = await api.post(endPoints.GET_SERVICE +`?categoryId=${catId}&subcategoryId=${subCatId}`,{country:'india'})
        .then((res) => {
            return res.data
        })
    return response;

})
const getServiceSlice = createSlice({
    name: 'getServiceSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getServiceAction.fulfilled, (state: any, action: any) => {
            state.getServiceData = action.payload
        })
    }
})
const getServiceReducer = getServiceSlice.reducer
export default getServiceReducer;