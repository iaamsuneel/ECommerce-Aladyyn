import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getSubCategoryData } from "../Store/slices/subCategorySlice";
import { useAppDispatch, useAppSelector } from "../Store/storeHooks";
import AllCategories from "./AllCategories";

const Category = () => {
    const dispatch = useAppDispatch()
    const { id, slug } = useParams()
    console.log("first", slug, useParams())


    const getSubCategoryValues = useAppSelector(state => state?.getSubCategoryReducer?.getSubCategoryData)
    console.log('getSubCategoryValues', getSubCategoryValues)
    useEffect(() => {
        dispatch(getSubCategoryData(id))
    }, [id])
    return (<>
        <section className="category-block">
            <div className="container">
                <div className="categories">
                    <AllCategories />
                </div>

                <div className="particular-category" >
                    <h1>{slug}</h1>
                    {getSubCategoryValues?.data?.length>0 ?
                        getSubCategoryValues?.data?.map((item: any, index: any) => {
                            return <div key={index} className="services-block">
                                <div className="service-wrap"><Link to={`/category/particular/${item?.categoryId}/${item._id}`} >
                                    <div className="img-wrap">

                                        <img src="https://css7941-prod.thesst.com/static/media/sub-category-1.dec50c25c597115e0d00.png"
                                            alt="service" />
                                    </div>
                                    <div className="service-info">{item.name}</div>
                                </Link>
                                </div>
                            </div> 
                        }) :  <div className="services-block"><div>Their are no records found ...</div></div>
                    }
                </div>
            </div>

        </section>

    </>)
}
export default Category;