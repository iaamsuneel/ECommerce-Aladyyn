import { useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import CompanySeller from "../Components/CompanySeller";
import FreelancerSeller from "../Components/FreelancerSeller";
import { getCountryAction } from "../Store/slices/countrySlice";
import { getStateAction } from "../Store/slices/getStateSlice";
import { useAppDispatch, useAppSelector } from "../Store/storeHooks";
const BecomeSeller = () => {
    const dispatch = useAppDispatch()
    const getCountryData = useAppSelector((state: any) => state.getCountryReducer?.getAllCountryData)

    /*   useEffect(() => {
          dispatch(getStateAction(getCountryData?._id))
      }, []) */
    return (<>
        <section className="become-seller">
            <div className="container">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Become an Aladyyn Seller</li>
                    </ol>
                </nav>
                <h1>Become an Aladyyn Seller</h1>
                <Tabs
                    id="controlled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="home" title="Company">
                        <CompanySeller />
                    </Tab>
                    <Tab eventKey="profile" title="Freelancer">


                        <FreelancerSeller />

                    </Tab>
                </Tabs>
            </div>

        </section >
    </>)
}
export default BecomeSeller;