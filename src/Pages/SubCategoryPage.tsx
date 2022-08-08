import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import FilterSubCategoryPage from "../Components/FilterSubCategoryPage";
import SubCategoryPageLeft from "../Components/SubCategoryPageLeft";
import { getServiceAction } from "../Store/slices/getServiceSlice";
import { useAppDispatch, useAppSelector } from "../Store/storeHooks";

const SubcategoryPage = () => {
    const { catId, subCatId } = useParams()
    const getServiceData = useAppSelector((state: any) => state.getServiceReducer?.getServiceData)
    console.log("getServiceData", getServiceData)
    console.log("categoryId,subcategoryId", catId, subCatId)
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getServiceAction({ catId, subCatId }))
    }, [])
    return (<>
        <section className="sub-category-block ">
            <div className="">
                <div className="Toastify"></div>
            </div>
            <div className="container">
                <nav aria-label="breadcrumb" className="w-100">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><Link to="/sign-in">Home</Link></li>
                        <li className="breadcrumb-item"><a href="/category/61c1e2b8eec4c2436578e291/Household">{getServiceData?.data[0]?.categoryName}</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{getServiceData?.data[0]?.subcategoryName}</li>
                    </ol>
                </nav>
                <FilterSubCategoryPage />
                <SubCategoryPageLeft />
            </div>
        </section>
    </>)
}
export default SubcategoryPage;