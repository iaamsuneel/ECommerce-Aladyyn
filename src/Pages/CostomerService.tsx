import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import * as yup from "yup";
import { customerServiceData } from "../Store/slices/customerServiceSlice";
import { useAppDispatch } from "../Store/storeHooks";
const CustomerService = () => {
    const [image, setImage] = useState<any>()
    const [imagePreview, setImagePreview] = useState<any>()
    
    const dispatch = useAppDispatch()
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
    const schema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        phone: yup.string().required(),
        email: yup.string().required(),
        typeOfIssue: yup.string().required(),
        comment: yup.string().required()
    });
    type inputs = {
        firstName: String,
        lastName: string,
        phone: Number,
        email: string,
        typeOfIssue: String,
        comment: String,
    }
    const { register, handleSubmit, formState: { errors } } = useForm<inputs>({
        resolver: yupResolver(schema)
    });
   
    const submit = (data: any) => {
        const contactPayload = new FormData()
        contactPayload.append('firstName', data.firstName)
        contactPayload.append('lastName', data.lastName)
        contactPayload.append('email', data.email)
        contactPayload.append('phone', data.phone)
        contactPayload.append('comment', data.comment)
        contactPayload.append('typeOfIssue', data.typeOfIssue)
        contactPayload.append('attachment', image)

        dispatch(customerServiceData(contactPayload ))
    }
    const imagePre = (e: any) => {
        console.log("imageeee", e)
        setImage(e.target.files[0])
        setImagePreview(URL.createObjectURL(e.target.files[0]))
    }
    return (<>
        <section className="customer-service">
            <div className="">
                <div className="Toastify"></div>
            </div>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a role="button" >Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Customer Service</li>
                    </ol>
                </nav>
                <h1>Customer Service</h1>
                <div className="card">
                    <form onSubmit={handleSubmit(submit)}>
                        <div className="inputs-wrapper">
                            <div className="row">
                                <div className="col-md-6 col-xl-4 input-wrapper required"><label className="input-label">
                                    firstName</label>
                                    <div className="input-wrap ">
                                        <input {...register('firstName')} type="text" className="form-control" name="firstName"
                                            placeholder="First Name" /></div>
                                    {errors.firstName && <span className="error">Please enter first name</span>}
                                </div>
                                <div className="col-md-6 col-xl-4 input-wrapper required"><label className="input-label">
                                    lastName</label>
                                    <div className="input-wrap ">
                                        <input {...register('lastName')} type="text" className="form-control" name="lastName"
                                            placeholder="Last Name" /></div>
                                    {errors.lastName && <span className="error">Please enter last name</span>}
                                </div>
                                <div className="col-md-6 col-xl-4 input-wrapper required"><label className="input-label">Email
                                    address</label>
                                    <div className="input-wrap ">
                                        <input {...register('email')} type="email" name="email" className="form-control"
                                            placeholder="example@aladyyn.pro" /></div>
                                    {errors.email && <span className="error">please enter email </span>}
                                </div>
                                <div className="col-md-6 col-xl-4 input-wrapper required"><label className="input-label">Phone
                                    Number</label>
                                    <div className="input-wrap ">
                                        <input {...register('phone')} type="text" name="phone" className="form-control"
                                            placeholder="Phone Number" /></div>
                                    {errors.phone && <span className="error">Please enter mobile</span>}
                                </div>
                                <div className="col-md-6 col-xl-4 input-wrapper required"><label
                                    className="input-label text-transform-initial">Type of Issue</label>
                                    <div className="select-wrap price-select input-wrap ">
                                        <select {...register('typeOfIssue')}
                                            className="react-select-container form-control drop-down" name="typeOfIssue">
                                            <option value="">Please Select issue</option>
                                            <option value="option 1">option 1</option>
                                            <option value="option 2">option 2</option>
                                        </select></div>
                                    {errors.typeOfIssue && <span className="error">Please select issue</span>}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 input-wrapper required textarea-info-wrapper textarea-info-wrapper"><label
                                    className="input-label">Comment</label>
                                    <div className="input-wrap "><textarea {...register('comment', { required: true, maxLength: 300 })}
                                        className="form-control" name="comment"
                                        placeholder="Tell us more about the services you provide"></textarea><label
                                            className="textarea-info comment-info input-label required input-info position-static">Comment
                                            should not exceed 300 characters.</label></div>
                                </div>
                                {errors.comment && <span className="error">please enter comment</span>}
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-xl-4 input-wrapper has-input-file"><label className="">Upload File</label>
                                    <div className="img-input-wrapper">
                                        <div className="img-input w-100"><i className="icon-plus" ></i>Upload<input onChange={imagePre} name="attachment"
                                            type="file" accept="image/*" /></div>
                                    </div>
                                    <div><img src={imagePreview} /></div>
                                </div>
                            </div>
                        </div>
                        <div className="btn-wrap"><button type="button" className="btn secondary-btn">Cancel</button><button
                            type="submit" className="btn">submit</button></div>
                    </form>
                    <ToastContainer autoClose={7000} />
                </div>
                <div className="card">
                    <div className="contact-block">
                        <div className="contact-wrap">
                            <div className="contact-head"><i className="icon-mail"></i><span className="text">Email</span></div>
                            <div className="contact-link"><a href="mailto:aladyyn.info@gmail.com">aladyyn.info@gmail.com</a></div>
                        </div>
                        <div className="contact-wrap">
                            <div className="contact-head"><i className="icon-dialer"></i><span className="text">Phone Number</span></div>
                            <div className="contact-link"><a href="tel:0123456789" className="tel-link">+1 (012) 34-56-789</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}
export default CustomerService;