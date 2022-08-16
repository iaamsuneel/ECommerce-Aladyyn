import ReactStars from 'react-stars'
import { useAppSelector } from '../Store/storeHooks';
const ServiceDescription = () => {
    const getServiceData = useAppSelector((state: any) => state.getServiceReducer?.getServiceData)
    const serviceDetailsData = useAppSelector((state: any) => state.getServiceDetailsReducer?.getServiceDetailsData)
    /* console.log("serviceDetailsData", serviceDetailsData) */
    return (<>
        <div className="tab-content">
            <div id="uncontrolled-tab-example-tabpane-description" aria-labelledby="uncontrolled-tab-example-tab-description"
                className="tab-pane active">
                <div className="description-wrap listing">
                    <div className="image-block">
                        <div className="image-wrap"><img
                            src="https://css7941-api.thesst.com/uploads/service/1651144015681young-woman-3713108_640.jpg"
                            alt="profile-image" /></div>
                        <a className="white-btn" href="/service-detail/626a75dd8befe7cc3580950b/620a38d001342d68491aed08">Chat with
                            Seller</a>
                    </div>
                    <div className="seller-details">
                        <div className="details-head">
                            <div className="main-head">
                                <div className="seller-btns">
                                    <button className="btn-wrap"><i className="icon-heart"></i>Add to Wishlist</button>
                                    <div><button className="btn-wrap"><i className="icon-share"></i>Share This Service</button></div>
                                </div>
                                <h2>{serviceDetailsData?.data?.description} </h2>
                                <h3>{serviceDetailsData?.data?.sellerData[0]?.firstName} {serviceDetailsData?.data?.sellerData[0]?.lastName} </h3>
                            </div>
                            <div className="pricing-wrap">
                            {serviceDetailsData?.data?.maxPrice ? <span> ₹ {serviceDetailsData?.data?.maxPrice}.00 - {serviceDetailsData?.data?.minPrice}.00</span> : <span>₹{serviceDetailsData?.data?.price}.00</span>}
                               <span className="timer"></span></div>
                        </div>
                        <div className="seller-rating">
                            <div className="rating-wrap">
                                <div className="rating-image">
                                    <ReactStars
                                        count={5}
                                        size={25}
                                        value={serviceDetailsData?.data?.averageRating}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <div className="rating-number">{serviceDetailsData?.data?.totalReview}</div>
                                </div>
                            </div>
                            <div className="details-wrap">
                                <div className="detail-list">
                                    <h3>Address:</h3>
                                    <ul className="details-values">
                                        <li>
                                            <div className="detail-text">
                                                {serviceDetailsData?.data?.addressData[0]?.countryName},{serviceDetailsData?.data?.addressData[0]?.stateName}
                                            </div>
                                        </li>
                                        <li>
                                            <div className="detail-text">{serviceDetailsData?.data?.addressData[0]?.addressLine1},{serviceDetailsData?.data?.addressData[0]?.addressLine2}</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="detail-list">
                                    <h3>Days Opened</h3>
                                    <ul className="details-values">
                                        <li>
                                            <div className="detail-text"><span className="day-name">Monday-Wednesday</span><span
                                                className="timing">9:00 AM — 6:00 AM</span></div>
                                        </li>
                                        <li>
                                            <div className="detail-text"><span className="day-name">Thursday-Sunday</span><span
                                                className="timing">Closed</span></div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default ServiceDescription;