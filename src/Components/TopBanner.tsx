import { useSelector } from "react-redux"
import Slider from "react-slick"
const TopBanner = () => {
    const homePageData = useSelector((state: any) => state.HomepageReducer?.getHomeData)
    const bannerImagePath = homePageData?.data?.bannerImagePath
    const settings = {
        speed: 500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true
    }
    return (<>
        <aside className="ads-banners">
            <div className="container">
                <div>
                    <Slider {...settings}>
                        {homePageData?.data?.topAdvertiserBannerData?.map((item: any, index: any) => {
                            return <div key={index} className="card">
                                <div className="images-wrapper"><img
                                    src={bannerImagePath + item.webImage}
                                    alt="ad" /></div>
                            </div>
                        })
                        }
                    </Slider>
                </div>
            </div>
        </aside>
    </>)
}
export default TopBanner