
import Slider from 'react-slick';
import { useDispatch, useSelector } from "react-redux"
import Trending from "../Components/Trending";
import TopBanner from "../Components/TopBanner";
import CoreServices from "../Components/CoreServices";
import { ToastContainer } from "react-toastify";

const Home = () => {
    const homePageData = useSelector((state: any) => state.HomepageReducer?.getHomeData)
    const bannerImagePath = homePageData?.data?.bannerImagePath
    console.log('homePageData', homePageData)
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: true
    }
    return (<>
        <ToastContainer autoClose={7000} />
        <section className="banner">
            <div className="container">
                <Slider {...settings}>
                    {homePageData?.data?.bannerData?.map((item: any, index: any) => {
                        return <div className="banner-wrap" key={index}>
                            <div className="banner-right">
                                <div className="img-wrap">
                                    <img src={bannerImagePath + item.webImage}
                                        alt="banner" />
                                </div>
                            </div>
                        </div>
                    })
                    }
                </Slider>
            </div>
        </section>
        <Trending />
        <TopBanner />
        <CoreServices />
    </>)
}
export default Home;