
const Footer = () => {
    return (
        <footer className="footer bg-dark position-relative">
            <div className="footer-middle">
                <div className="container position-static">
                    <div className="footer-ribbon">Get in touch</div>
                    <div className="row">
                        <div className="col-lg-3 col-sm-6 pb-2 pb-sm-0">
                            <div className="widget">
                                <h4 className="widget-title">About Us</h4>
                                <a href="demo1.html">
                                    <img
                                        src="assets/images/logo-footer.png"
                                        alt="Logo"
                                        className="logo-footer"
                                    />
                                </a>
                                <p className="m-b-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                                    nec vestibulum magna, et dapibus lacus. Duis nec vestibulum
                                    magna, et dapibus lacus.
                                </p>
                                <a href="#" className="read-more text-white">
                                    read more...
                                </a>
                            </div>

                        </div>

                        <div className="col-lg-3 col-sm-6 pb-4 pb-sm-0">
                            <div className="widget mb-2">
                                <h4 className="widget-title mb-1 pb-1">Contact Info</h4>
                                <ul className="contact-info m-b-4">
                                    <li>
                                        <span className="contact-info-label">Address:</span>123
                                        Street Name, City, England
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Phone:</span>
                                        <a href="tel:">(123) 456-7890</a>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">Email:</span>{" "}
                                        <a href="/cdn-cgi/l/email-protection#3855595154785d40595548545d165b5755">
                                            <span
                                                className="__cf_email__"
                                                data-cfemail="5a373b33361a3f223b372a363f74393537"
                                            >
                                                [email&nbsp;protected]
                                            </span>
                                        </a>
                                    </li>
                                    <li>
                                        <span className="contact-info-label">
                                            Working Days/Hours:
                                        </span>{" "}
                                        Mon - Sun / 9:00 AM - 8:00 PM
                                    </li>
                                </ul>
                                <div className="social-icons">
                                    <a
                                        href="#"
                                        className="social-icon social-facebook icon-facebook"
                                        target="_blank"
                                        title="Facebook"
                                    />
                                    <a
                                        href="#"
                                        className="social-icon social-twitter icon-twitter"
                                        target="_blank"
                                        title="Twitter"
                                    />
                                    <a
                                        href="#"
                                        className="social-icon social-linkedin fab fa-linkedin-in"
                                        target="_blank"
                                        title="Linkedin"
                                    />
                                </div>

                            </div>

                        </div>

                        <div className="col-lg-3 col-sm-6 pb-2 pb-sm-0">
                            <div className="widget">
                                <h4 className="widget-title pb-1">Customer Service</h4>
                                <ul className="links">
                                    <li>
                                        <a href="#">Help &amp; FAQs</a>
                                    </li>
                                    <li>
                                        <a href="#">Order Tracking</a>
                                    </li>
                                    <li>
                                        <a href="#">Shipping &amp; Delivery</a>
                                    </li>
                                    <li>
                                        <a href="#">Orders History</a>
                                    </li>
                                    <li>
                                        <a href="#">Advanced Search</a>
                                    </li>
                                    <li>
                                        <a href="dashboard.html">My Account</a>
                                    </li>
                                    <li>
                                        <a href="#">Careers</a>
                                    </li>
                                    <li>
                                        <a href="demo1-about.html">About Us</a>
                                    </li>
                                    <li>
                                        <a href="#">Corporate Sales</a>
                                    </li>
                                    <li>
                                        <a href="#">Privacy</a>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className="col-lg-3 col-sm-6 pb-0">
                            <div className="widget mb-1 mb-sm-3">
                                <h4 className="widget-title">Popular Tags</h4>
                                <div className="tagcloud">
                                    <a href="#">Bag</a>
                                    <a href="#">Black</a>
                                    <a href="#">Blue</a>
                                    <a href="#">Clothes</a>
                                    <a href="#">Fashion</a>
                                    <a href="#">Hub</a>
                                    <a href="#">Jean</a>
                                    <a href="#">Shirt</a>
                                    <a href="#">Skirt</a>
                                    <a href="#">Sports</a>
                                    <a href="#">Sweater</a>
                                    <a href="#">Winter</a>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <div className="container">
                <div className="footer-bottom d-sm-flex align-items-center">
                    <div className="footer-left">
                        <span className="footer-copyright">
                            © Porto eCommerce. 2021. All Rights Reserved
                        </span>
                    </div>
                    <div className="footer-right ml-auto mt-1 mt-sm-0">
                        <div className="payment-icons">
                            <span
                                className="payment-icon visa"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/payments/payment-visa.svg)"
                                }}
                            />
                            <span
                                className="payment-icon paypal"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/payments/payment-paypal.svg)"
                                }}
                            />
                            <span
                                className="payment-icon stripe"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/payments/payment-stripe.png)"
                                }}
                            />
                            <span
                                className="payment-icon verisign"
                                style={{
                                    backgroundImage:
                                        "url(assets/images/payments/payment-verisign.svg)"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;