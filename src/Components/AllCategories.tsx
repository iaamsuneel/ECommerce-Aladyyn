
import { Link } from "react-router-dom";
import { useAppSelector } from "../Store/storeHooks";
const AllCategories = ({ onClose }: any) => {
    const getCategoryData = useAppSelector((state: any) => state.allCategoryReducer?.getAllCategoriesData)

    console.log("getCategoryData", getCategoryData)

    return (<>
        <div className="header-left"><button type="button" onClick={() => onClose(true)} className="menu-btn active">
            <div className="ham-burger"><span className="line"></span><span className="line"></span><span className="line"></span></div>
            <div className="text-wrap">All Categories</div>
        </button>
            <div className="navigation active">
                <div className="menu-wrapper">

                    <div /* style="position: relative; overflow: hidden; width: 100%; height: 100%; max-width: 360px;" */>
                        <div
                            /* style="position: absolute; inset: 0px; overflow: scroll; margin-right: -15px; margin-bottom: -15px;" */>
                            <ul className="category-list">
                                {getCategoryData?.data?.map((item: any, index: any) => {
                                    return < li key={index}> <Link to={`/category/${item._id}/${item.name}`} className="link">{item.name}</Link></li>
                                })
                                }
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>)
}
export default AllCategories;