import { Link } from "react-router-dom";
const Footer = () => {
    return (<>
        <footer className="footer ">
            <div className="container">
                <div className="footer-logo">
                    <div className="img-wrap"> <Link to="/"> <img
                        src="data:image/png;base64,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"
                        alt="logo" /> </Link> </div>
                </div>
                <ul className="footer-menu">
                    <li><Link className="link" to="/customer-service">Help</Link></li>
                    <li><Link className="link" to="/faq">FAQ</Link></li>
                    <li><Link className="link" to="/career">Careers</Link></li>
                    <li><Link className="link" to="/sustainability">Sustainability</Link></li>
                    <li><Link className="link" to="/become-seller">Become an Aladyyn Seller</Link></li>
                    <li><Link className="link" to="/advertiser-enquiry">Advertise at Aladyyn</Link></li>
                    <li><Link className="link" to="/seller-sign">Seller Login</Link></li>
                </ul>
                <div className="contact-wrap">
                    <h5>Contact Us</h5>
                    <address>20 Collyer Quay #09-01,<br />Singapore 049319</address>
                </div>
                <div className="social-links">
                    <h5>Follow Us on</h5>
                    <ul>
                        <li><Link target="_blank" to="https://www.facebook.com/aladyynofficial/"><i className="icon-fb"></i></Link></li>
                        <li><Link to="/customer-service"><i className="icon-twitter"></i></Link></li>
                        <li><Link to="/customer-service"><i className="icon-linkedin"></i></Link></li>
                        <li><Link to="https://www.instagram.com/aladyyn_official/" target="_blank"><i className="icon-insta"></i></Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="copyright-block ">
                <div className="container"><span className="copyright-info">Copyright © 2022 Aladyyn. All Rights Reserved</span></div>
            </div>
        </footer>
    </>)
}
export default Footer;