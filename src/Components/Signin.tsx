import { Link, useNavigate } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import * as yup from "yup";
import { api } from "../API/axios";
import endPoints from "../API/endPoints";

const Signin = () => {
    const navigate = useNavigate()
    type Inputs = {
        email: string,
        password: string,
    };
    const schema = yup.object({
        email: yup.string().required(),
        password: yup.string().required(),
    }).required();
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>({
        resolver: yupResolver(schema)
    });
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        api.post(endPoints.POST_LOGIN, data)
            .then((response) => {
                toast(response.data.message)
                if (response.data.status === "success") {
                    localStorage.setItem('token', response.data.data.token)
                    console.log("login", response.data.data.token)
                    window.location.replace('/')
                }
                else {
                    navigate('/sign-in')
                }
            })
            .catch((e) => e.error)
        console.log(data);
    }
    return (<>
        <section className="sign-in">
            <div className="">
                <div className="Toastify"></div>
            </div>
            <div className="container">
                <div className="card">
                    <h2>Sign In</h2>
                    <form onSubmit={handleSubmit(onSubmit)} >
                        <div className="input-block"><label /* for="user-id" */ className="show-star">Email or phone number</label>
                            <div className="input-wrap">
                                <input {...register("email", { required: true })}
                                    name="email"
                                    className="form-control"
                                    placeholder="Email or Phone" /></div>
                            {errors.email && <span className="error">Please enter the valid email address</span>}

                        </div>
                        <div className="input-block"><label /* for="password" */ className="show-star">Password</label>
                            <div className="input-wrap">
                                <input {...register("password", { required: true })}
                                    name="password"
                                    type="password" className="form-control"
                                    placeholder="***********" />
                                <div className="toggle-wrap"><button className="toggle-btn hide" type="button"><i
                                    className="icon-eye"></i></button></div>
                                {errors.password && <span className="error">Please enter the password</span>}

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 mb-2 mb-md-0">
                                <div className="form-check"><input className="form-check-input" type="checkbox" value="" /><label
                                    className="form-check-label">Keep me signed in</label></div>
                            </div>
                            <div className="col-md-6 mb-2 mb-md-0 text-md-end"><a className="forgot-link"
                                href="/forgot-password">Forgot
                                Password?</a></div>
                        </div>
                        <div className="btn-wrap"><input value="Sign In" type="submit" className="btn w-100" /></div>
                        <ToastContainer autoClose={7000} />

                    </form>
                    <div className="signin-with">or continue with</div>
                    <div className="signin-options text-center"><button className="google-login">
                        <div><i className="icon-google"></i><span className="text">Google</span></div>
                    </button><a className="fb-login" href="/sign-in"><i className="icon-fb"></i><span
                        className="text">Facebook</span></a></div>
                </div>
                <div className="card text-center">
                    <div className="signup-wrap">Don’t have an account?<Link className="signup-link" to="/create-account">Sign
                        Up</Link>
                    </div>

                </div>
            </div>
        </section>
    </>)
}
export default Signin;