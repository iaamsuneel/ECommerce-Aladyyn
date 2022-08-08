import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../API/axios";
import endPoints from "../../API/endPoints";
type Homedata = {
	getHomeData: any;
}
const initialState: Homedata = {
	getHomeData: {},
};

export const Homedata = createAsyncThunk('Homedata', async () => {
	const response = await api.get(endPoints.GET_HOME_PAGE).then(
		res => {
			//console.log(JSON.stringify(res))
			return res.data
		}
	)
	return response
}

)
const getHomeSlice = createSlice({
	name: 'getHomeData',
	initialState,
	reducers: {

	},
	extraReducers: (builder) => {
		builder.addCase(Homedata.fulfilled, (state: any, action: any) => {

			state.getHomeData = action.payload
			
		})
	}
});
// export const getHomeData  = (state: RootState) => state.getHomeData.getHomeData;
const homepagereducer = getHomeSlice.reducer;
export default homepagereducer;

