const UserProfileAccount=()=>{
    return(<>
  <section className="user-profile">
    <div className="container">
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a role="button" >User Account</a></li>
                <li className="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
        </nav>
        <div className="section-head">
            <div className="heading-wrap">
                <h1>User Profile</h1>
            </div>
            <div className="btn-wrap"><a className="btn" href="/user/profile/edit">Edit</a></div>
        </div>
        <div className="account-info">
            <div className="card account-card">
                <div className="account-heading">Account Information</div><span className="info-label">First Name:</span><span
                    className="info-wrap">Suneel</span><span className="info-label">Last Name:</span><span
                    className="info-wrap">Yadav</span><span className="info-label">Email:</span><span
                    className="info-wrap">iaamsduneel321@gmail.com</span><span className="info-label">Mobile:</span><span
                    className="info-wrap">9452668634</span>
            </div>
            <div className="card account-card">
                <div className="account-heading">Basic Information</div>
                <div className="profile-img">
                    <div className="img-wrap"><img src="/static/media/employee.16b7424786c37d0428e7.png" alt="profile"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
    </>)
}
export default UserProfileAccount