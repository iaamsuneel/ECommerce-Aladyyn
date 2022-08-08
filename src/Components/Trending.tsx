import { useDispatch, useSelector } from "react-redux"
import Slider from "react-slick"
import { Link } from "react-router-dom"

const Trending = () => {
    const homePageData = useSelector((state: any) => state.HomepageReducer?.getHomeData)
    const subcategoryImagePath = homePageData?.data?.subcategoryImagePath
    console.log('subcategoryImagePath', subcategoryImagePath)
    const settings = {
        speed: 500,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrows: true
    }
    return (<>
        <h1 style={{ marginBottom: '20px', fontSize: '3rem' }}>Trending</h1>
        <section className="trending-services" style={{ padding: '60px' }}>
            <div className="container">
                <Slider {...settings}>
                    {homePageData?.data?.subcategoryData?.map((item: any, index: any) => {
                        return <div key={index} className="card">
                            <Link className="link" to="/category/particular/61e4fd1114a1a05906661c6d/61efbbd178f433350d57a88f">
                                <div className="service-img">
                                    <img src="https://css7941-prod.thesst.com/static/media/service-5.cf4ef4235cac40c5c5b8.jpg" alt="service" />
                                </div>
                                <div className="service-name">
                                    <h3>{item.name}</h3>
                                </div>
                            </Link>
                        </div>
                    })
                    }
                </Slider>
            </div>
        </section>
    </>)
}
export default Trending;