import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../API/axios";
import endPoints from "../../API/endPoints";


type subCategoryService = {
    getSubCategoryData: any;
}
const initialState: subCategoryService = {
    getSubCategoryData: {},
}
export const getSubCategoryData = createAsyncThunk('getSubCategoryData', async (id: any) => {
    const response = await api.get(endPoints.GET_SUBCATEGORY_SERVICE + `?categoryId=${id}`)
        .then((res) => {
            console.log(res)
            return res.data;
        })
    return response;
})
const getSubCategorySlice = createSlice({
    name: 'getSubCategoryData',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getSubCategoryData.fulfilled, (state: any, action: any) => {
            state.getSubCategoryData = action.payload
        })
    }
});
const getSubCategoryReducer = getSubCategorySlice.reducer;
export default getSubCategoryReducer;