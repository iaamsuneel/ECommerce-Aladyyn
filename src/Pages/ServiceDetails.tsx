import { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ServiceDescription from "../Components/ServiceDescription";
import ServiceGalary from "../Components/ServiceGalary";
import { getServiceDetilsAction } from "../Store/slices/serviceDatilsSlice";
import { useAppDispatch } from "../Store/storeHooks";
const ServiceDetails = () => {
    const dispatch = useAppDispatch()
    const { serviceId } = useParams()
    useEffect(() => {
        dispatch(getServiceDetilsAction(serviceId))
    }, [])
    console.log("serviceId", serviceId)
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
                        <div className="slick-slider slick-initialized" dir="ltr">
                            <button type="button" data-role="none" className="slick-arrow slick-prev slick-disabled" > Previous</button>
                            <div className="slick-list">
                                <div className="slick-track" >
                                    <div data-index="0" className="slick-slide slick-active slick-current" aria-hidden="false" >
                                        <div>
                                            <div className="slide">
                                                <div className="card-wrap">
                                                    <a className="service-block" href="/service-detail/626a75dd8befe7cc3580950b/620a38d001342d68491aed08">
                                                        <div className="service-image"><img src="https://css7941-api.thesst.com/uploads/service/16506271627483D-Wallpaper-Robo.jpg" alt="service-image" /></div>
                                                        <div className="service-card">
                                                            <div className="service-name">Subhro Test 100</div>
                                                            <div className="location">Afghanistan Badakhshan</div>
                                                            <div className="address">Adarsh nagar</div>
                                                            <div className="seller-rating">
                                                                <div className="rating-wrap">
                                                                    <div className="rating-image"><span ><span /><span><img src="/static/media/icon-star-empty.52a69168e7bc50857a6426be4eaee425.svg" className="icon" /></span><span  ><img src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg" className="icon" /></span></span><span ><span><img src="/static/media/icon-star-empty.52a69168e7bc50857a6426be4eaee425.svg" className="icon" /></span><span ><img src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg" className="icon" /></span></span><span ><span><img src="/static/media/icon-star-empty.52a69168e7bc50857a6426be4eaee425.svg" className="icon" /></span><span ><img src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg" className="icon" /></span></span><span ><span><img src="/static/media/icon-star-empty.52a69168e7bc50857a6426be4eaee425.svg" className="icon" /></span><span ><img src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg" className="icon" /></span></span><span><span><img src="/static/media/icon-star-empty.52a69168e7bc50857a6426be4eaee425.svg" className="icon" /></span><span><img src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg" className="icon" /></span></span><span /></div>
                                                                    <div className="rating-number">0 reviews</div>
                                                                </div>
                                                            </div>
                                                            <div className="services-block">
                                                                <div className="price">₹395.65</div>
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
                            <button type="button" data-role="none" className="slick-arrow slick-next" > Next</button>
                        </div>
                    </div>
                </div>
                <div className="simple-sliders recommend">
                    <div className="slider-wrap">
                        <div className="slick-slider slick-initialized">
                            <div className="slick-list">
                                <div className="slick-track" ></div>
                            </div>
                        </div>
                    </div>
                </div>
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
                            <form>
                                <div className="form-wrap">
                                    <div className="textarea-wrap"><textarea className="textarea" placeholder="Write a review"></textarea></div>
                                    <div className="rate-service">
                                        <h4>Rate the service:</h4>
                                        <div className="rate-image">
                                            <div className="rating-image"><span ><span ><span><img src="/static/media/icon-star-empty.52a69168e7bc50857a6426be4eaee425.svg" className="icon" /></span><span ><img src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg" className="icon" /></span></span><span ><span><img src="/static/media/icon-star-empty.52a69168e7bc50857a6426be4eaee425.svg" className="icon" /></span><span ><img src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg" className="icon" /></span></span><span ><span><img src="/static/media/icon-star-empty.52a69168e7bc50857a6426be4eaee425.svg" className="icon" /></span><span ><img src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg" className="icon" /></span></span><span ><span><img src="/static/media/icon-star-empty.52a69168e7bc50857a6426be4eaee425.svg" className="icon" /></span><span ><img src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg" className="icon" /></span></span><span ><span><img src="/static/media/icon-star-empty.52a69168e7bc50857a6426be4eaee425.svg" className="icon" /></span><span ><img src="/static/media/icon-star-2.3ab379ed68837c4045b127c3c9741767.svg" className="icon" /></span></span></span></div>
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