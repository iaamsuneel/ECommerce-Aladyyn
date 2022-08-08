import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { api } from "../../API/axios";
import endPoints from "../../API/endPoints";

export const customerServiceData = createAsyncThunk('customerServiceData', async (payload: any, navigate: any) => {

    const response = await api.post(endPoints.POST_CUSTOMER_SERVICE, payload)
        .then((res) => {
            toast(res.data.message)
            if (res.data.status === "success") {
                setTimeout(() => {
                    window.location.replace('/customer-service-success')
                }, 4000);
            }
        })
    setTimeout(() => {
        window.location.replace('/')
    }, 3000)
    return response
}
)



/* export const allCategoriesData = createAsyncThunk('allCategoriesData', async () => {
   const response = await api.get(endPoints.GET_ALLCATEGORIES)
       .then((res) => {
           console.log(res.data)
           // console.log(JSON.stringify(res))
           return res.data;
       })

   return response;
}
) */