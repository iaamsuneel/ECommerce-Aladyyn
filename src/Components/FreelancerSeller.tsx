import { yupResolver } from "@hookform/resolvers/yup"
import { stat } from "fs";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import * as yup from "yup";
import { getCityAction } from "../Store/slices/getCitySlice";
import { getStateAction } from "../Store/slices/getStateSlice";
import { sellerEnquiryAction } from "../Store/slices/SellerEnquirySlice";
import { useAppDispatch, useAppSelector } from "../Store/storeHooks";
const FreelancerSeller = () => {
    const [countryId, setCountryId] = useState<any>()
    const [stateId, setStateId] = useState<any>()
    const [cityId, setCityId] = useState<any>()
    const [pickImage, setPickImage] = useState<any>()
    const [imagePreview, setImagePreview] = useState<any>()
    const dispatch = useAppDispatch()
    const getStateData = useAppSelector((state: any) => state.getStateReducer?.getStateData)
    const getCountryData = useAppSelector((state: any) => state.getCountryReducer?.getAllCountryData)
    const getCityData = useAppSelector((state: any) => state.getCityReducer?.getCityData)
    /*  console.log("getCityData", getCityData) */
    const schema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required(),
        phone: yup.number().required(),
        postcode: yup.number().required(),
        addressLine1: yup.string().required(),
        addressLine2: yup.string().required(),
        privacyPolicy: yup.bool()
            .oneOf([true], 'Please check the privacy policy')
    })
    type inputs = {
        firstName: String,
        lastName: string,
        email: string,
        phone: Number,
        dob: any,
        addressLine1: string,
        addressLine2: string,
        comment: string,
        postcode: Number,
        proofOfIdentity: any,
        privacyPolicy: boolean

    }
    const { register, handleSubmit, formState: { errors } } = useForm<inputs>({
        resolver: yupResolver(schema)
    });
    const submit = (data: any) => {
        console.log("freelancerSellerPayload", data)
        const freelancerSellerPayload = new FormData()
        freelancerSellerPayload.append('type', 'Freelancer')
        freelancerSellerPayload.append('firstName', data.firstName)
        freelancerSellerPayload.append('lastName', data.lastName)
        freelancerSellerPayload.append('cityId', cityId)
        freelancerSellerPayload.append('stateId', stateId)
        freelancerSellerPayload.append("comment", data.comment)
        freelancerSellerPayload.append('countryId', countryId)
        freelancerSellerPayload.append("addressLine1", data.addressLine1)
        freelancerSellerPayload.append("addressLine2", data.addressLine2)
        freelancerSellerPayload.append('email', data.email)
        freelancerSellerPayload.append('postcode', data.postcode)
        freelancerSellerPayload.append("phone", data.phone)
        freelancerSellerPayload.append('proofOfIdentity', pickImage)
        freelancerSellerPayload.append('privacyPolicy', data.privacyPolicy)
        freelancerSellerPayload.append('dob', '2022-7-31')
        dispatch(sellerEnquiryAction(freelancerSellerPayload))
    }
    const imageUpload = (e: any) => {
        setPickImage(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
        console.log("first")
    }
    const selectedCountry = (e: any) => {
        setCountryId(e.target.value)
        dispatch(getStateAction({ countryId: e.target.value }))
    }
    const selectedStateId = (e: any) => {
        setStateId(e.target.value)
        dispatch(getCityAction({ countryId: countryId, stateId: e.target.value }))
    }
    const selectedCity = (e: any) => {
        setCityId(e.target.value)
    }
    return (<>
        <div className="freelancer-tab">
            <div className="Toastify"></div>
            <form onSubmit={handleSubmit(submit)}>
                <div className="card inputs-wrapper">
                    <div className="row input-block">
                        <div className="col-md-6 col-lg-4 input-wrapper required"><label className="input-label">first name</label>
                            <div className="input-wrap ">
                                <input {...register('firstName')} type="text" className="form-control" name="firstName"
                                    placeholder="First Name" /></div>
                            {errors.firstName && <span className="error">Please enter first name</span>}
                        </div>
                        <div className="col-md-6 col-lg-4 input-wrapper required"><label className="input-label">Last name</label>
                            <div className="input-wrap ">
                                <input {...register("lastName")} type="text" name="lastName" className="form-control"
                                    placeholder="Last Name" /></div>
                            {errors.lastName && <span className="error">Please enter first name</span>}
                        </div>
                        <div className="col-md-6 col-lg-4 input-wrapper required"><label className="input-label">Email address</label>
                            <div className="input-wrap "><input {...register("email")}
                                type="text" name="email" className="form-control"
                                placeholder="example@aladyyn.pro" /></div>
                            {errors.email && <span className="error">Please enter last Name</span>}
                        </div>
                    </div>
                    <div className="inputs-heading">Freelancer Information</div>
                    <div className="row input-block">
                        <div className="col-md-6 col-lg-4 input-wrapper required text-fix"><label className="input-label">Date of
                            Birth</label>
                            <div className="input-wrap ">
                                <div className="react-datepicker-wrapper">
                                    <div className="react-datepicker__input-container"><input type="date" placeholder="dd-mm-yyyy"
                                        className="form-control date-input" /></div>
                                </div><input {...register('dob')} type="hidden" name="dob" />
                            </div>
                            <span className="error">{/* {errors.dob?.message} */}</span>
                        </div>
                        <div className="col-md-6 col-lg-4">
                            <div className="input-wrapper required"><label className="input-label">Phone Number</label>
                                <div className="input-wrap "><input   {...register('phone')} type="text" name="phone" className="form-control"
                                    placeholder="Mobile" /></div>
                                {errors.phone && <span className="error">Please enter your phone</span>}
                            </div>
                        </div>
                    </div>
                    <div className="input-wrapper img-input-fix has-input-file"><label className="">Proof of Identify</label>
                        <div className="row input-block">
                            <div className="col-lg-8 input-wrapper">
                                <div className="img-input-wrapper">
                                    <div className="img-input"><i className="icon-plus"></i>Upload<input {...register('proofOfIdentity')} onChange={imageUpload} name="proofOfIdentity"
                                        type="file" accept="image/*" /></div><span className="img-info">Upload scanned copy of
                                            passport, nationalID, driver’s license etc.</span>
                                </div>
                                <img src={imagePreview} />
                            </div>
                        </div>
                    </div>
                    <div className="inputs-heading">Business Address</div>
                    <div className="row input-block">
                        <div className="col-md-6 input-wrapper required"><label className="input-label">address line 1</label>
                            <div className="input-wrap "><input {...register('addressLine1')} type="text" className="form-control" name="addressLine1"
                                placeholder="Address" /><span className="input-info">Building number and Street</span></div>
                        </div>
                        <div className="col-md-6 input-wrapper"><label className="input-label">address line 2</label>
                            <div className="input-wrap "><input {...register('addressLine2')} type="text" name="addressLine2" className="form-control"
                                placeholder="Address" /><span className="input-info">Room/Block/Apartments</span></div>
                        </div>
                        <div className="col-md-6 input-wrapper required"><label className="input-label">Country</label>
                            <div className="input-wrap ">
                                <select onChange={selectedCountry} name="countryId" className="form-control drop-down" id="countryId">
                                    {
                                        getCountryData?.data?.map((item: any, index: any) => {
                                            <option value="" selected >Please select country</option>
                                            return < option value={item?._id} >{item?.name}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 input-wrapper required"><label className="input-label">State / Region</label>
                            <div className="input-wrap "><select onChange={selectedStateId} className="form-control drop-down" name="stateId">
                                {
                                    getStateData?.data?.map((item: any) => {
                                        <option value="" >Please select state</option>
                                        return <option value={item?._id}>{item?.name}</option>
                                    })
                                }
                            </select>
                            </div>
                        </div>
                        <div className="col-md-6 input-wrapper"><label className="input-label">City</label>
                            <div className="input-wrap"><select onChange={selectedCity} className="form-control drop-down" name="cityId">
                                <option value="">Please select city</option>
                                {
                                    getCityData?.data?.map((item: any) => {
                                        return <option value={item?._id}>{item?.name}</option>

                                    })
                                }
                            </select></div>
                        </div>
                        <div className="col-md-6 input-wrapper required"><label className="input-label">ZIP / Postal Code</label>
                            <div className="input-wrap "><input {...register('postcode')} type="text" name="postcode" className="form-control"
                                placeholder="Zip Code" /></div>
                        </div>
                    </div>
                    <div className="row input-block">
                        <div className="col-12 input-wrapper required mb-0 textarea-info-wrapper"><label
                            className="input-label">Comment</label>
                            <div className="input-wrap "><textarea {...register('comment')} className="form-control" name="comment"
                                placeholder="Please enter your comment"></textarea></div><label
                                    className="textarea-info input-label input-info position-static">Comment should not exceed 300
                                characters.</label>
                        </div>
                    </div>
                    <div className="form-check"><input {...register("privacyPolicy")} type="checkbox" name="privacyPolicy" id="selectCheckbox"
                        className="form-check-input " /><label className="form-check-label">Please accept our <a
                            className="term-conditions" href="/terms-and-conditions" target="_blank">terms and
                            conditions</a></label>
                        <div className="invalid-feedback"></div>
                        <span className="error">{errors.privacyPolicy?.message} </span>
                    </div>
                </div>
                <div className="btn-wrap"><input className="btn" type="submit" value="submit" /></div>
            </form>
        </div >
    </>)
}
export default FreelancerSeller;