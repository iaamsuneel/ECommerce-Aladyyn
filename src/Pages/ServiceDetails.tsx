import { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import ReactStars from 'react-stars'
import Slider from "react-slick";
import ServiceDescription from "../Components/ServiceDescription";
import ServiceGalary from "../Components/ServiceGalary";
import { getAnotherServiceAction } from "../Store/slices/anotherServiceSlice";
import { getServiceDetilsAction } from "../Store/slices/serviceDatilsSlice";
import { useAppDispatch, useAppSelector } from "../Store/storeHooks";
import RecommendedServices from "../Components/RecommededServices";
import { getRecommendedServiceData } from "../Store/slices/recommendedServiceSlice";
import { api } from "../API/axios";
import endPoints from "../API/endPoints";
const ServiceDetails = () => {
    const [dynamicRating, setDynamicRating] = useState<any>()
    const [review, setReview] = useState<any>()
    console.log("dynamicRating", dynamicRating, review)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const { serviceId, sellerId } = useParams()
    const getAnotherServiceData = useAppSelector((state) => state.anotherServiceReducer?.getAnotherServiceData)
    const serviceDetailsData = useAppSelector((state: any) => state.getServiceDetailsReducer?.getServiceDetailsData)
    console.log("getAnotherServiceData", serviceDetailsData)
    const categoryId = serviceDetailsData?.data?.categoryId
    const subcategoryId = serviceDetailsData?.data?.subcategoryId
    console.log("first", categoryId, subcategoryId)
    useEffect(() => {
        dispatch(getServiceDetilsAction(serviceId))
        dispatch(getAnotherServiceAction({ serviceId, sellerId }))
        if (subcategoryId) {
            dispatch(getRecommendedServiceData({ serviceId, categoryId, subcategoryId }))
        }
    }, [subcategoryId])
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        arrows: true
    }
    const userRatingService = {
        count: 5,
        size: 25,
        edit: true,
        value: dynamicRating,
        activeColor: "#ffd700",
        onChange: (e: any) => {
            setDynamicRating(e)
        }
    }
    const ratingAndReviewUser = (e: any) => {
        e.preventDefault()
        var token = localStorage.getItem("token")
        console.log("ghghgh")
        if (token) {
            api.post(endPoints.USER_ADD_REVIEW_RATING, { serviceId: serviceId, rating: dynamicRating, review: review })
        }
        else {
            navigate('/sign-in')
        }

    }

    //console.log("serviceId", serviceId, sellerId)
    return (<>
        <section className="edit-information profile listing after-fix">
            <div className="Toastify"></div>
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item"><a href="/category/61c1de0dee489740f70f9b74/Beauty">Beauty</a></li>
                        <li className="breadcrumb-item"><a href="/category/particular/61c1de0dee489740f70f9b74/61c1e2e1eec4c2436578e292">Face</a></li>
                        <li className="breadcrumb-item active" aria-current="page">This is new service</li>
                    </ol>
                </nav>
                <div className="tabbing-select" ><strong className="profile-link" ><i className="icon-arrow"></i>Go to Seller Profile</strong></div>
                <div /* className="tabbing-head listing" */>
                    <Tabs id="controlled-tab-example" className="mb-3"   >
                        <Tab eventKey="home" title="Description">
                            <ServiceDescription />
                        </Tab>
                        <Tab eventKey="profile" title="Gallery">
                            <ServiceGalary />
                        </Tab>
                    </Tabs>

                </div>
                <div className="simple-sliders">
                    <div className="slider-heading">
                        <h2>Other Services from This Seller</h2>
                    </div>
                    <div className="slider-wrap">
                        <Slider {...settings}>
                            {getAnotherServiceData?.data?.map((item: any, index: any) => {
                                return <div key={index} >
                                    <div className="slick-track" >
                                        <div aria-hidden="false" >
                                            <div>
                                                <div className="slide">
                                                    <div className="card-wrap">
                                                        <a className="service-block" href="/service-detail/626a75dd8befe7cc3580950b/620a38d001342d68491aed08">
                                                            <div className="service-image"><img src="https://css7941-api.thesst.com/uploads/service/16506271627483D-Wallpaper-Robo.jpg" alt="service-image" /></div>
                                                            <div className="service-card">
                                                                <div className="service-name">{item.title}</div>

                                                                <div className="location">{item?.addressData[0]?.countryName} {item?.addressData[0]?.addressLine1}  {item?.addressData[0]?.addressLine2} </div>
                                                                <div className="address">{item?.addressData[0]?.cityName}</div>
                                                                <div className="seller-rating">
                                                                    <div className="rating-wrap">
                                                                        <div className="rating-image">
                                                                            <ReactStars
                                                                                count={5}
                                                                                size={25}
                                                                                value={item?.averageRating}
                                                                                edit={false}
                                                                                activeColor="#ffd700"
                                                                            />
                                                                        </div>
                                                                        <div className="rating-number">{item?.totalReview} reviews</div>
                                                                    </div>
                                                                </div>
                                                                <div className="services-block">
                                                                    <div className="price">{item?.price}</div>
                                                                    <button className="wishlist-btn"><i className="icon-heart"></i></button>
                                                                </div>
                                                            </div>
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                            }
                        </Slider>
                    </div>
                </div>
                <RecommendedServices />
                <div className="reviews">
                    <div className="review-head">
                        <h2>Reviews</h2>
                    </div>
                    <div className="reviews-wrap"></div>
                    <div className="add-review">
                        <div className="review-logo">
                            <div className="text-image">G</div>
                        </div>
                        <div className="add-form">
                            <form onSubmit={ratingAndReviewUser}>
                                <div className="form-wrap">
                                    <div className="textarea-wrap">
                                        <textarea className="textarea" placeholder="Write a review" onChange={(e) => setReview(e.target.value)}></textarea></div>
                                    <div className="rate-service">
                                        <h4>Rate the service:</h4>
                                        <div className="rate-image">
                                            <div className="rating-image">
                                                <ReactStars {...userRatingService} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <input type="submit" className="btn" value="Add a Review" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    </>)
}
export default ServiceDetails;