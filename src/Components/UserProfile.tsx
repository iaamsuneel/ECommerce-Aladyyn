import { useState } from "react";
import { Link } from "react-router-dom";

const UserProfile = () => {
    const [profileDropdown, setProfileDropdown] = useState(false)
    const signOutBtn=()=>{
       // var token = JSON.parse(localStorage.getItem('token') || '')
        localStorage.removeItem('token')
        window.location.replace('/')
    }
    return (<>
        <div className="profile-dropdown">
            <div className="dropdown" style={{ position: "relative" }}>

                <button aria-expanded="false" type="button"
                    className="dropdown-toggle btn btn-primary" onClick={() => setProfileDropdown((prev) => !(prev))} > User
                </button>
                {profileDropdown ?
                    <div x-placement="bottom-end" className="dropdown-menu dropdown-menu-end"
                        data-popper-reference-hidden="false" data-popper-escaped="false" data-popper-placement="bottom-end"
                        style={{ position: 'absolute', display: "block", inset: '0px 0px auto auto', transform: 'translate(0px, 42px)' }}>
                        <Link to="/user/dashboard"
                            data-rr-ui-dropdown-item="" className="dropdown-item" role="button" >Your Account</Link>
                        <a data-rr-ui-dropdown-item="" className="dropdown-item" role="button" >Notifications</a>
                        <a href="/wishlist" data-rr-ui-dropdown-item="" className="dropdown-item">My Wishlist</a>
                        <Link to='/' data-rr-ui-dropdown-item="" className="dropdown-item" role="button"  onClick={signOutBtn} >Sign Out</Link>
                    </div> : null}

            </div>
        </div>
    </>)
}
export default UserProfile;