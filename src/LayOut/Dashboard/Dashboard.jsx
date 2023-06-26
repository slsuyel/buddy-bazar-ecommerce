import { Link, useNavigate } from "react-router-dom";
import Address from "./Address";
import OrderHistory from "./OrderHistory";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProviders";
import StickyNavbar from "../../pages/Shared/StickyNavbar/StickyNavbar";

const Dashboard = () => {
    const { logOut, } = useContext(AuthContext);
    const navigate = useNavigate()
    const logoutBtn = () => {
        logOut();
        navigate('/')
    };


    return (
        <div>
            <div className="page-wrapper">
                <main className="main">
                    <div className="container account-container custom-account-container">
                        <div className="row">
                            <div className="sidebar widget widget-dashboard mb-lg-0 mb-3 col-lg-3 order-0">
                                <h2 className="text-uppercase">My Account</h2>
                                <ul className="nav nav-tabs list flex-column mb-0" role="tablist">
                                    <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            id="dashboard-tab"
                                            data-toggle="tab"
                                            href="#dashboard"
                                            role="tab"
                                            aria-controls="dashboard"
                                            aria-selected="true"
                                        >
                                            Dashboard
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="order-tab"
                                            data-toggle="tab"
                                            href="#order"
                                            role="tab"
                                            aria-controls="order"
                                            aria-selected="true"
                                        >
                                            Orders
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="download-tab"
                                            data-toggle="tab"
                                            href="#download"
                                            role="tab"
                                            aria-controls="download"
                                            aria-selected="false"
                                        >
                                            Downloads
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="address-tab"
                                            data-toggle="tab"
                                            href="#address"
                                            role="tab"
                                            aria-controls="address"
                                            aria-selected="false"
                                        >
                                            Addresses
                                        </a>
                                    </li>


                                    <li className="nav-item">
                                        <Link className="nav-link" to='/cart'>
                                            Cart
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to='/'>
                                            Wishlist
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <button onClick={logoutBtn} className="nav-link">
                                            Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-9 order-lg-last order-1 tab-content">
                                <div
                                    className="tab-pane fade show active"
                                    id="dashboard"
                                    role="tabpanel"
                                >
                                    <div className="dashboard-content">

                                        <p>
                                            From your account dashboard you can view your
                                            <a className="btn btn-link link-to-tab" href="#order">
                                                recent orders
                                            </a>
                                            , manage your
                                            <a className="btn btn-link link-to-tab" href="#address">
                                                shipping and billing addresses
                                            </a>
                                            , and
                                            <a className="btn btn-link link-to-tab" href="#edit">
                                                edit your password and account details.
                                            </a>
                                        </p>
                                        <div className="mb-4" />
                                        <div className="row row-lg">
                                            <div className="col-6 col-md-4">
                                                <div className="feature-box text-center pb-4">
                                                    <a href="#order" className="link-to-tab">
                                                        <i className="fa-solid  text-dark fa-list-check"></i>
                                                    </a>
                                                    <div className="feature-box-content">
                                                        <h3>ORDERS</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4">
                                                <div className="feature-box text-center pb-4">
                                                    <a href="#download" className="link-to-tab">
                                                        <i className="fa-solid  text-dark fa-download"></i>
                                                    </a>
                                                    <div className=" feature-box-content">
                                                        <h3>DOWNLOADS</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4">
                                                <div className="feature-box text-center pb-4">
                                                    <a href="#address" className="link-to-tab">
                                                        <i className="fa-solid  text-dark fa-location-dot"></i>
                                                    </a>
                                                    <div className="feature-box-content">
                                                        <h3>ADDRESSES</h3>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-6 col-md-4">
                                                <div className="feature-box text-center pb-4">
                                                    <a href="wishlist.html">
                                                        <i className="fa-solid  text-dark fa-heart"></i>
                                                    </a>
                                                    <div className="feature-box-content">
                                                        <h3>WISHLIST</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4">
                                                <div className="feature-box text-center pb-4">
                                                    <a href="login.html">
                                                        <i className="fa-solid  text-dark fa-right-from-bracket"></i>
                                                    </a>
                                                    <div className="feature-box-content">
                                                        <h3>LOGOUT</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div className="tab-pane fade" id="order" role="tabpanel">
                                    <OrderHistory />
                                </div>

                                <div className="tab-pane fade" id="download" role="tabpanel">
                                    <div className="download-content">
                                        <h3 className="account-sub-title d-none d-md-block">
                                            <i className="fa-solid fa-download mr-3"></i>
                                            Downloads
                                        </h3>
                                        <div className="download-table-container">
                                            <p>No downloads available yet.</p>{" "}
                                            <Link
                                                to='/'
                                                className="btn btn-primary text-transform-none mb-2"
                                            >
                                                GO SHOP
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="address" role="tabpanel">
                                    <h3 className="account-sub-title d-none d-md-block mb-1">
                                        <i className="fa-solid fa-location-dot mr-3"></i>
                                        Addresses
                                    </h3>
                                    <div className="addresses-content">
                                        <div className="w-100">
                                            <Address />

                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>

                    </div>

                    <div className="mb-5" />

                </main>

            </div>

            <div className="mobile-menu-overlay" />

            <div className="mobile-menu-container">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close">
                        <i className="fa fa-times" />
                    </span>
                    <nav className="mobile-nav">
                        <ul className="mobile-menu">
                            <li>
                                <a href="demo4.html">Home</a>
                            </li>
                            <li>
                                <a href="category.html">Categories</a>
                                <ul>
                                    <li>
                                        <a href="category.html">Full Width Banner</a>
                                    </li>
                                    <li>
                                        <a href="category-banner-boxed-slider.html">
                                            Boxed Slider Banner
                                        </a>
                                    </li>
                                    <li>
                                        <a href="category-banner-boxed-image.html">
                                            Boxed Image Banner
                                        </a>
                                    </li>
                                    <li>
                                        <a href="category-sidebar-left.html">Left Sidebar</a>
                                    </li>
                                    <li>
                                        <a href="category-sidebar-right.html">Right Sidebar</a>
                                    </li>
                                    <li>
                                        <a href="category-off-canvas.html">Off Canvas Filter</a>
                                    </li>
                                    <li>
                                        <a href="category-horizontal-filter1.html">
                                            Horizontal Filter 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="category-horizontal-filter2.html">
                                            Horizontal Filter 2
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">List Types</a>
                                    </li>
                                    <li>
                                        <a href="category-infinite-scroll.html">
                                            Ajax Infinite Scroll<span className="tip tip-new">New</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="category.html">3 Columns Products</a>
                                    </li>
                                    <li>
                                        <a href="category-4col.html">4 Columns Products</a>
                                    </li>
                                    <li>
                                        <a href="category-5col.html">5 Columns Products</a>
                                    </li>
                                    <li>
                                        <a href="category-6col.html">6 Columns Products</a>
                                    </li>
                                    <li>
                                        <a href="category-7col.html">7 Columns Products</a>
                                    </li>
                                    <li>
                                        <a href="category-8col.html">8 Columns Products</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="product.html">Products</a>
                                <ul>
                                    <li>
                                        <a href="#" className="nolink">
                                            PRODUCT PAGES
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="product.html">SIMPLE PRODUCT</a>
                                            </li>
                                            <li>
                                                <a href="product-variable.html">VARIABLE PRODUCT</a>
                                            </li>
                                            <li>
                                                <a href="product.html">SALE PRODUCT</a>
                                            </li>
                                            <li>
                                                <a href="product.html">FEATURED &amp; ON SALE</a>
                                            </li>
                                            <li>
                                                <a href="product-sticky-info.html">WIDTH CUSTOM TAB</a>
                                            </li>
                                            <li>
                                                <a href="product-sidebar-left.html">WITH LEFT SIDEBAR</a>
                                            </li>
                                            <li>
                                                <a href="product-sidebar-right.html">WITH RIGHT SIDEBAR</a>
                                            </li>
                                            <li>
                                                <a href="product-addcart-sticky.html">ADD CART STICKY</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="nolink">
                                            PRODUCT LAYOUTS
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="product-extended-layout.html">EXTENDED LAYOUT</a>
                                            </li>
                                            <li>
                                                <a href="product-grid-layout.html">GRID IMAGE</a>
                                            </li>
                                            <li>
                                                <a href="product-full-width.html">FULL WIDTH LAYOUT</a>
                                            </li>
                                            <li>
                                                <a href="product-sticky-info.html">STICKY INFO</a>
                                            </li>
                                            <li>
                                                <a href="product-sticky-both.html">
                                                    LEFT &amp; RIGHT STICKY
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-transparent-image.html">
                                                    TRANSPARENT IMAGE
                                                </a>
                                            </li>
                                            <li>
                                                <a href="product-center-vertical.html">CENTER VERTICAL</a>
                                            </li>
                                            <li>
                                                <a href="#">BUILD YOUR OWN</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    Pages<span className="tip tip-hot">Hot!</span>
                                </a>
                                <ul>
                                    <li>
                                        <a href="wishlist.html">Wishlist</a>
                                    </li>
                                    <li>
                                        <a href="cart.html">Shopping Cart</a>
                                    </li>
                                    <li>
                                        <a href="checkout.html">Checkout</a>
                                    </li>
                                    <li>
                                        <a href="dashboard.html">Dashboard</a>
                                    </li>
                                    <li>
                                        <a href="login.html">Login</a>
                                    </li>
                                    <li>
                                        <a href="forgot-password.html">Forgot Password</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="#">Elements</a>
                                <ul className="custom-scrollbar">
                                    <li>
                                        <a href="element-accordions.html">Accordion</a>
                                    </li>
                                    <li>
                                        <a href="element-alerts.html">Alerts</a>
                                    </li>
                                    <li>
                                        <a href="element-animations.html">Animations</a>
                                    </li>
                                    <li>
                                        <a href="element-banners.html">Banners</a>
                                    </li>
                                    <li>
                                        <a href="element-buttons.html">Buttons</a>
                                    </li>
                                    <li>
                                        <a href="element-call-to-action.html">Call to Action</a>
                                    </li>
                                    <li>
                                        <a href="element-countdown.html">Count Down</a>
                                    </li>
                                    <li>
                                        <a href="element-counters.html">Counters</a>
                                    </li>
                                    <li>
                                        <a href="element-headings.html">Headings</a>
                                    </li>
                                    <li>
                                        <a href="element-icons.html">Icons</a>
                                    </li>
                                    <li>
                                        <a href="element-info-box.html">Info box</a>
                                    </li>
                                    <li>
                                        <a href="element-posts.html">Posts</a>
                                    </li>
                                    <li>
                                        <a href="element-products.html">Products</a>
                                    </li>
                                    <li>
                                        <a href="element-product-categories.html">Product Categories</a>
                                    </li>
                                    <li>
                                        <a href="element-tabs.html">Tabs</a>
                                    </li>
                                    <li>
                                        <a href="element-testimonial.html">Testimonials</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <ul className="mobile-menu mt-2 mb-2">
                            <li className="border-0">
                                <a href="#">Special Offer!</a>
                            </li>
                            <li className="border-0">
                                <a href="#" target="_blank">
                                    Buy Porto!
                                    <span className="tip tip-hot">Hot</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="mobile-menu">
                            <li>
                                <a href="login.html">My Account</a>
                            </li>
                            <li>
                                <a href="contact.html">Contact Us</a>
                            </li>
                            <li>
                                <a href="blog.html">Blog</a>
                            </li>
                            <li>
                                <a href="wishlist.html">My Wishlist</a>
                            </li>
                            <li>
                                <a href="cart.html">Cart</a>
                            </li>
                            <li>
                                <a href="login.html" className="login-link">
                                    Log In
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <form className="search-wrapper mb-2" action="#">
                        <input
                            type="text"
                            className="form-control mb-0"
                            placeholder="Search..."
                            required=""
                        />
                        <button
                            className="btn icon-search text-white bg-transparent p-0"
                            type="submit"
                        />
                    </form>
                    <div className="social-icons">
                        <a
                            href="#"
                            className="social-icon social-facebook icon-facebook"
                            target="_blank"
                        ></a>
                        <a
                            href="#"
                            className="social-icon social-twitter icon-twitter"
                            target="_blank"
                        ></a>
                        <a
                            href="#"
                            className="social-icon social-instagram icon-instagram"
                            target="_blank"
                        ></a>
                    </div>
                </div>

            </div>

            <StickyNavbar />


        </div>
    );
};

export default Dashboard;