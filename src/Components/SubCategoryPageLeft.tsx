import { useAppSelector } from "../Store/storeHooks"
/* import ReactStars from "react-rating-stars-component" */
import ReactStars from 'react-stars'
import { Link } from "react-router-dom"


const SubCategoryPageLeft = () => {
    const getServiceData = useAppSelector((state: any) => state.getServiceReducer?.getServiceData)
    console.log("getServiceData", getServiceData)
    const sorting = (e: any) => {
        /* console.log("first", e.target.value) */
        if (e.target.value === 'lowToHighSort') {
            console.log("lowToHighSort")

        }
        if (e.target.value === 'highToLowSort') {
            console.log("highToLowSort")
        }
    }
   /*  const ratingChanged = (newRating: any) => {
        console.log(newRating);
    }; */
    return (<>
        <div className="right-block">
            <div className="head-wrap">
                <h1>{getServiceData?.data[0]?.subcategoryName}</h1>
                <div className="sort-select"><label>Sort by</label>
                    <div className="sort-wrap">
                        <div className="react-select-container css-b62m3t-container"><span id="react-select-2-live-region"
                            className="css-7pg0cj-a11yText"></span><span aria-live="polite" aria-atomic="false"
                                aria-relevant="additions text" className="css-7pg0cj-a11yText"></span>
                            <div className="react-select__control css-1s2u09g-control">
                                <div className="react-select__value-container css-1d8n9bt">
                                    <select onChange={sorting} className="form-select" aria-label="Default select example">
                                        <option selected>Select sort</option>
                                        <option value="lowToHighSort">Price: Low to High  </option>
                                        <option value="highToLowSort">Price: High to Low</option>
                                    </select>
                                </div>
                                <div className="react-select__indicators css-1wy0on6"><span
                                    className="react-select__indicator-separator css-1okebmr-indicatorSeparator"></span>
                                    <div className="react-select__indicator react-select__dropdown-indicator css-tlfecz-indicatorContainer"
                                        aria-hidden="true"><svg height="20" width="20" viewBox="0 0 20 20" aria-hidden="true"
                                            focusable="false" className="css-8mmkcg">
                                          
                                        </svg></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="sub-category_wrapper" >
                {getServiceData?.data.map((item: any, index: any) => {
                    return <Link key={index} className="service-block"
                        to={`/service-detail/${item.serviceId}`} /*/category/particular/61c1e2b8eec4c2436578e291/61ee6f11a6c42d1621bb5310" */>
                        <div className="service-image"><img
                            src="https://css7941-api.thesst.com/uploads/service/1652941098169mobile-repair.png" alt="service" />
                        </div>
                        <div className="service-card">
                            <div className="service-name">{item?.title}</div>
                            <div className="provider-info">{item?.sellerData?.firstName}</div>
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
                                <div className="price">{item.maxPrice ? <span> ₹ {item?.maxPrice}.00 - {item?.minPrice}.00</span> : <span>₹{item?.price}.00</span>}</div><button className="wishlist-btn"><i className="icon-heart"></i></button>
                            </div>
                        </div>
                    </Link>
                })
                }
            </div>

        </div>

    </>
    )
}
export default SubCategoryPageLeft