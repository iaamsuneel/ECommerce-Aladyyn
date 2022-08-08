import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { api } from "../../API/axios"
import endPoints from "../../API/endPoints"
type allCategoriesData = {
    getAllCategoriesData: any;
}
const initialState: allCategoriesData = {
    getAllCategoriesData: {},
}

export const allCategoriesData = createAsyncThunk('allCategoriesData', async () => {
    const response = await api.get(endPoints.GET_ALLCATEGORIES)
        .then((res) => {
            console.log(res.data)
            // console.log(JSON.stringify(res))
            return res.data;
        })

    return response;
}
)
const allCategorySlice = createSlice({
    name: 'getAllCategoriesData',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(allCategoriesData.fulfilled, (state: any, action: any) => {

            state.getAllCategoriesData = action.payload

        })
    }
});
const allCategoryReducer = allCategorySlice.reducer;
export default allCategoryReducer;