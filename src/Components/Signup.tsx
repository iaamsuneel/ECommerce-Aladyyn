import { Link } from "react-router-dom"
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { api } from "../API/axios";
import endPoints from "../API/endPoints";

const Signup = () => {
    type Inputs = {
        firstName: string,
        lastName: string,
        phone: Number,
        email: string,
        password: string,
        re_password: string,
        privacyPolicy: boolean,
        type: string,

    };
    const schema = yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        phone: yup.number().required(),
        email: yup.string().required(),
        password: yup.string().required('Password is required'),
        re_password: yup.string()
            .oneOf([yup.ref('password'), null], 'Passwords must match'),
        privacyPolicy: yup.bool()
            .oneOf([true], 'Please check the privacy policy')
    }).required();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        data.type = "User"
        api.post(endPoints.POST_USER_SIGNUP, data)
            .then((res) => res.data
            ).catch((e) => e.error)


    }

    return (<>
        <section className="create-account">
            <div className="Toastify"></div>
            <div className="container">
                <div className="card">
                    <h2>Create Account</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row inputs-wrapper">
                            <div className="col-md-6 pr-fix input-block">
                                <div className="input-wrapper required"><label>First Name</label>
                                    <div className="input-wrap "><input {...register("firstName", { required: true })}
                                        type="text" className="form-control"
                                        placeholder="First Name" name="firstName" /></div>
                                    {errors.firstName && <span className="error">Please enter first name</span>}

                                </div>
                            </div>
                            <div className="col-md-6 pl-fix input-block">
                                <div className="input-wrapper required"><label>Last Name</label>
                                    <div className="input-wrap "><input {...register("lastName", { required: true })}
                                        name="lastName"
                                        type="text" className="form-control"
                                        placeholder="Last Name" /></div>
                                    {errors.lastName && <span className="error">Please enter last name</span>}

                                </div>
                            </div>
                        </div>
                        <div className="row inputs-wrapper">
                            <div className="col-12 input-block">
                                <div className="input-wrapper required"><label /* for="user-id" */>Mobile Number</label>
                                    <div className="input-wrap "><input {...register("phone", { required: true })}
                                        name="phone"
                                        type="text" className="form-control" placeholder="Phone"
                                    />

                                    </div>
                                    {errors.phone && <span className="error">Please enter phone number</span>}
                                </div>

                            </div>
                            <div className="col-12 input-block">
                                <div className="input-wrapper required"><label /*  for="user-id" */>Email Address</label>
                                    <div className="input-wrap "><input {...register("email", { required: true })}
                                        name="email"
                                        type="text" className="form-control" placeholder="Email" /></div>
                                    {errors.email && <span className="error">Please enter email address</span>}

                                </div>
                            </div>
                            <div className="col-12 input-block">
                                <div className="input-wrapper required"><label /* for="password" */>Password</label>
                                    <div className="input-wrap "><input {...register("password", { required: true })}
                                        name="password"
                                        type="password" className="form-control"
                                        placeholder="***********" />
                                        <div className="toggle-wrap"><i className="icon-eye "></i></div>
                                        {errors.password && <span className="error">Please enter password</span>}

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 input-block">
                                <div className="input-wrapper required"><label /* for="password" */>Confirm Password</label>
                                    <div className="input-wrap "><input {...register("re_password", { required: true })}
                                        name="re_password"
                                        type="password" className="form-control"
                                        placeholder="************" />
                                        <div className="toggle-wrap"><i className="icon-eye "></i></div>
                                        {errors.re_password && <span className="error">Please enter confirm password</span>}

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 mb-2 mb-md-0">
                                <div className="form-check contain-checkbox">
                                    <input  {...register('privacyPolicy')}

                                        type="checkbox"
                                        id="selectCheckbox" className="form-check-input " /><label className="form-check-label">By signing
                                            in you agree to the <a href="/user-terms-conditions" target="_blank">Terms and
                                                Conditions</a> of Aladyyn</label>
                                    <div className="invalid-feedback"></div>
                                </div>
                                {errors.privacyPolicy?.message}

                            </div>
                        </div>
                        <div className="btn-wrap">
                            <button type="submit" className="btn w-100"  >Create Account</button>
                        </div>


                    </form>
                    <div className="row">
                        <div className="col-12">
                            <div className="signin-with text-center my-3">or continue with</div>
                            <div className="signin-options text-center"><button className="google-login">
                                <div><i className="icon-google"></i><span className="text">Google</span></div>
                            </button><Link className="fb-login" to="/create-account"><i className="icon-fb"></i><span
                                className="text">Facebook</span></Link></div>
                        </div>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="signin-wrap">Already have an account?<Link className="signin-link" to="/sign-in">Sign In</Link></div>
                </div>
            </div>
        </section>
    </>)
}
export default Signup