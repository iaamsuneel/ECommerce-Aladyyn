import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../API/axios";
import endPoints from "../../API/endPoints";

export const sellerEnquiryAction = createAsyncThunk('sellerEnquiryAction', async (payload: any) => {
    const response = await api.post(endPoints.POST_FREELENCER_ENQUIRY, payload)
        .then((res) => {
            return res.data
        })
    return response
})