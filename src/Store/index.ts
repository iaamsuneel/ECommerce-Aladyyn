import { configureStore } from "@reduxjs/toolkit";
import allCategoryReducer from "./slices/allCategorySlice";
import anotherServiceReducer from "./slices/anotherServiceSlice";
import getCountryReducer from "./slices/countrySlice";
import getCityReducer from "./slices/getCitySlice";
import homepagereducer from "./slices/getHomeSlice";
import getServiceReducer from "./slices/getServiceSlice";
import getStateReducer from "./slices/getStateSlice";
import getServiceDetailsReducer from "./slices/serviceDatilsSlice";
import getSubCategoryReducer from "./slices/subCategorySlice";

export const store = configureStore({
    reducer: {
        HomepageReducer: homepagereducer,
        allCategoryReducer: allCategoryReducer,
        getSubCategoryReducer: getSubCategoryReducer,
        getCountryReducer: getCountryReducer,
        getStateReducer: getStateReducer,
        getCityReducer: getCityReducer,
        getServiceReducer: getServiceReducer,
        getServiceDetailsReducer: getServiceDetailsReducer,
        anotherServiceReducer: anotherServiceReducer
    }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

