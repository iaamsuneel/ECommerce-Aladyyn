const DashBoard = () => {
    return (<>
        <section className="user-dashboard test123">
            <div className="container">
                <h2>Your Account</h2>
                <div className="dashboard-wrapper">
                    <div className="dashboard-card card"><a href='/user/profileAccount'>
                        <div className="wrap-icon"><i className="icon-person"></i></div>
                        <h4 className="service-name">Your Profile</h4>
                        <div className="service-details">Edit or add profile information</div>
                    </a></div>
                    <div className="dashboard-card card"><a href="/user/your-orders">
                        <div className="wrap-icon"><i className="icon-bag"></i></div>
                        <h4 className="service-name">Your Orders</h4>
                        <div className="service-details">View your current, past and cancelled orders</div>
                    </a></div>
                    <div className="dashboard-card card"><a href="/user/messages">
                        <div className="wrap-icon"><i className="icon-comment"></i></div>
                        <h4 className="service-name">Your Messages</h4>
                        <div className="service-details">View your seller messages</div>
                    </a></div>
                    <div className="dashboard-card card"><a href="/user/my-addresses">
                        <div className="wrap-icon"><i className="icon-home"></i></div>
                        <h4 className="service-name">Your Addresses</h4>
                        <div className="service-details">Edit addresses for orders</div>
                    </a></div>
                    <div className="dashboard-card card"><a href="/user/login-and-security">
                        <div className="wrap-icon"><i className="icon-lock"></i></div>
                        <h4 className="service-name">Login &amp; Security</h4>
                        <div className="service-details">Edit login, name and mobile number</div>
                    </a></div>
                    <div className="dashboard-card card"><a href="/user/billing-method">
                        <div className="wrap-icon"><i className="icon-card"></i></div>
                        <h4 className="service-name">Payment Options</h4>
                        <div className="service-details">Edit or add payment methods</div>
                    </a></div>
                    <div className="dashboard-card card"><a href="/faq">
                        <div className="wrap-icon"><i className="icon-question"></i></div>
                        <h4 className="service-name">Help (FAQ)</h4>
                        <div className="service-details">Browse questions and help topics</div>
                    </a></div>
                </div>
            </div>
        </section>
    </>)
}
export default DashBoard