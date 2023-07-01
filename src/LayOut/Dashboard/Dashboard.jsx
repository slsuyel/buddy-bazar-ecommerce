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



            <StickyNavbar />


        </div>
    );
};

export default Dashboard;