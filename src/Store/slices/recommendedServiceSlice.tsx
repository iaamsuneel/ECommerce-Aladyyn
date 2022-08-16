import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../API/axios";
import endPoints from "../../API/endPoints";
const initialState: any = {}

export const getRecommendedServiceData = createAsyncThunk('getRecommendedService', async ({ serviceId, categoryId, subcategoryId }: { serviceId: any, categoryId: any, subcategoryId: any }) => {
    const response = await api.get(endPoints.GET_RECOMMENDED_SERVICE +
        `?serviceId=${serviceId}&categoryId=${categoryId}&subcategoryId=${subcategoryId}&country='india'`)
        .then((res) => {
            return res.data
        })
    return response;
})
const recommendedServiceSlice = createSlice({
    name: 'recommendendSlice',
    initialState,
    reducers: {},

    extraReducers: (builder) => {
        builder.addCase(getRecommendedServiceData.fulfilled, (state: any, action: any) => {
            state.getRecommendentServiceData = action.payload
        })
    }
}
)
const getRecommendedServiceReducer = recommendedServiceSlice.reducer
export default getRecommendedServiceReducer