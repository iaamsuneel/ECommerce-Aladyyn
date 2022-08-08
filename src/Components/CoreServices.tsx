import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

const CoreServices=()=>{
    const homePageData = useSelector((state: any) => state.HomepageReducer?.getHomeData)
    const categoryImagePath = homePageData?.data?.categoryImagePath
 
    return (<>
        <section className="core-services">
            <div className="container">
                <h2>Our Core Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.</p>
                <div className="services-block">
                    {homePageData?.data?.categoryData?.map((item:any, index:any) => {
                        return <div key={index} className="service-wrap">
                            <Link className="link" to="/category/61ee6e45a6c42d1621bb52e0/Sustainability">
                                <div className="img-wrap"><img
                                    src={categoryImagePath + item.categoryIcon}
                                    alt="service" /></div>
                                <div className="service-info">{item.name}</div>
                            </Link></div>
                    })}
                </div>
            </div>
        </section>
    </>)
}
export default CoreServices