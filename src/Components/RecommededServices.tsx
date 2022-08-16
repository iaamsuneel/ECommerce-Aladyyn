import Slider from "react-slick";
import ReactStars from 'react-stars'
import { useAppSelector } from "../Store/storeHooks";

const RecommendedServices = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true
    }
    const getRecommendentServiceData = useAppSelector((state) => state.getRecommendedServiceReducer?.getRecommendentServiceData)
    console.log("getRecommendentServiceData", getRecommendentServiceData)
    return (<>
        <div className="simple-sliders recommend">
            <div className="slider-heading">
                <h2>Recommended Services</h2>
            </div>
            <div className="slider-wrap">
                <Slider {...settings}>
                    {getRecommendentServiceData?.data?.map((item: any, index: any) => {
                        //<button type="button" data-role="none" className="slick-arrow slick-prev slick-disabled" > Previous</button>
                        return <div key={index} className="slick-list">
                            <div className="slick-track" >
                                <div>
                                    <div className="slide">
                                        <div className="card-wrap">
                                            <strong className="service-block" >
                                                <div className="service-image"><img src="https://css7941-api.thesst.com/uploads/service/164914500961000-2019-honda-cb300r-main.jpg" alt="service-image" /></div>
                                                <div className="service-card">
                                                    <div className="service-name">{item.title}</div>
                                                    <div className="location">{item?.addressData[0]?.countryName} {item?.addressData[0]?.addressLine1}  {item?.addressData[0]?.addressLine2}</div>
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
                                                        <div className="price">
                                                        {item?.maxPrice ? <span> ₹ {item?.maxPrice}.00 - {item?.minPrice}.00</span> : <span>₹{item?.price}.00</span>}
                                                        </div>
                                                        <button className="wishlist-btn"><i className="icon-heart"></i></button>
                                                    </div>
                                                </div>
                                            </strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        // <button type="button" data-role="none" className="slick-arrow slick-next" > Next</button>
                    })
                    }
                </Slider>
            </div>
        </div>

    </>)
}
export default RecommendedServices;