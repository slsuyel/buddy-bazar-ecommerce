
const Dashboard = () => {
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
                                        <a
                                            className="nav-link"
                                            id="edit-tab"
                                            data-toggle="tab"
                                            href="#edit"
                                            role="tab"
                                            aria-controls="edit"
                                            aria-selected="false"
                                        >
                                            Account details
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="shop-address-tab"
                                            data-toggle="tab"
                                            href="#shipping"
                                            role="tab"
                                            aria-controls="edit"
                                            aria-selected="false"
                                        >
                                            Shopping Addres
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="wishlist.html">
                                            Wishlist
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="login.html">
                                            Logout
                                        </a>
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
                                                        <i className="sicon-social-dropbox" />
                                                    </a>
                                                    <div className="feature-box-content">
                                                        <h3>ORDERS</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4">
                                                <div className="feature-box text-center pb-4">
                                                    <a href="#download" className="link-to-tab">
                                                        <i className="sicon-cloud-download" />
                                                    </a>
                                                    <div className=" feature-box-content">
                                                        <h3>DOWNLOADS</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4">
                                                <div className="feature-box text-center pb-4">
                                                    <a href="#address" className="link-to-tab">
                                                        <i className="sicon-location-pin" />
                                                    </a>
                                                    <div className="feature-box-content">
                                                        <h3>ADDRESSES</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4">
                                                <div className="feature-box text-center pb-4">
                                                    <a href="#edit" className="link-to-tab">
                                                        <i className="icon-user-2" />
                                                    </a>
                                                    <div className="feature-box-content p-0">
                                                        <h3>ACCOUNT DETAILS</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4">
                                                <div className="feature-box text-center pb-4">
                                                    <a href="wishlist.html">
                                                        <i className="sicon-heart" />
                                                    </a>
                                                    <div className="feature-box-content">
                                                        <h3>WISHLIST</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-4">
                                                <div className="feature-box text-center pb-4">
                                                    <a href="login.html">
                                                        <i className="sicon-logout" />
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
                                    <div className="order-content">
                                        <h3 className="account-sub-title d-none d-md-block">
                                            <i className="sicon-social-dropbox align-middle mr-3" />
                                            Orders
                                        </h3>
                                        <div className="order-table-container text-center">
                                            <table className="table table-order text-left">
                                                <thead>
                                                    <tr>
                                                        <th className="order-id">ORDER</th>
                                                        <th className="order-date">DATE</th>
                                                        <th className="order-status">STATUS</th>
                                                        <th className="order-price">TOTAL</th>
                                                        <th className="order-action">ACTIONS</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-center p-0" colSpan={5}>
                                                            <p className="mb-5 mt-5">
                                                                No Order has been made yet.
                                                            </p>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <hr className="mt-0 mb-3 pb-2" />
                                            <a href="category.html" className="btn btn-dark">
                                                Go Shop
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="download" role="tabpanel">
                                    <div className="download-content">
                                        <h3 className="account-sub-title d-none d-md-block">
                                            <i className="sicon-cloud-download align-middle mr-3" />
                                            Downloads
                                        </h3>
                                        <div className="download-table-container">
                                            <p>No downloads available yet.</p>{" "}
                                            <a
                                                href="category.html"
                                                className="btn btn-primary text-transform-none mb-2"
                                            >
                                                GO SHOP
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="address" role="tabpanel">
                                    <h3 className="account-sub-title d-none d-md-block mb-1">
                                        <i className="sicon-location-pin align-middle mr-3" />
                                        Addresses
                                    </h3>
                                    <div className="addresses-content">
                                        <p className="mb-4">
                                            The following addresses will be used on the checkout page by
                                            default.
                                        </p>
                                        <div className="row">
                                            <div className="address col-md-6">
                                                <div className="heading d-flex">
                                                    <h4 className="text-dark mb-0">Billing address</h4>
                                                </div>
                                                <div className="address-box">
                                                    You have not set up this type of address yet.
                                                </div>
                                                <a
                                                    href="#billing"
                                                    className="btn btn-default address-action link-to-tab"
                                                >
                                                    Add Address
                                                </a>
                                            </div>
                                            <div className="address col-md-6 mt-5 mt-md-0">
                                                <div className="heading d-flex">
                                                    <h4 className="text-dark mb-0">Shipping address</h4>
                                                </div>
                                                <div className="address-box">
                                                    You have not set up this type of address yet.
                                                </div>
                                                <a
                                                    href="#shipping"
                                                    className="btn btn-default address-action link-to-tab"
                                                >
                                                    Add Address
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="edit" role="tabpanel">
                                    <h3 className="account-sub-title d-none d-md-block mt-0 pt-1 ml-1">
                                        <i className="icon-user-2 align-middle mr-3 pr-1" />
                                        Account Details
                                    </h3>
                                    <div className="account-content">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="acc-name">
                                                            First name <span className="required">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder="Editor"
                                                            id="acc-name"
                                                            name="acc-name"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="acc-lastname">
                                                            Last name <span className="required">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="acc-lastname"
                                                            name="acc-lastname"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group mb-2">
                                                <label htmlFor="acc-text">
                                                    Display name <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="acc-text"
                                                    name="acc-text"
                                                    placeholder="Editor"
                                                    required=""
                                                />
                                                <p>
                                                    This will be how your name will be displayed in the
                                                    account section and in reviews
                                                </p>
                                            </div>
                                            <div className="form-group mb-4">
                                                <label htmlFor="acc-email">
                                                    Email address <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="acc-email"
                                                    name="acc-email"
                                                    placeholder="editor@gmail.com"
                                                    required=""
                                                />
                                            </div>
                                            <div className="change-password">
                                                <h3 className="text-uppercase mb-2">Password Change</h3>
                                                <div className="form-group">
                                                    <label htmlFor="acc-password">
                                                        Current Password (leave blank to leave unchanged)
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="acc-password"
                                                        name="acc-password"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="acc-password">
                                                        New Password (leave blank to leave unchanged)
                                                    </label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="acc-new-password"
                                                        name="acc-new-password"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="acc-password">Confirm New Password</label>
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="acc-confirm-password"
                                                        name="acc-confirm-password"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-footer mt-3 mb-0">
                                                <button type="submit" className="btn btn-dark mr-0">
                                                    Save changes
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="billing" role="tabpanel">
                                    <div className="address account-content mt-0 pt-2">
                                        <h4 className="title">Billing address</h4>
                                        <form className="mb-2" action="#">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>
                                                            First name <span className="required">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>
                                                            Last name <span className="required">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Company </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="select-custom">
                                                <label>
                                                    Country / Region <span className="required">*</span>
                                                </label>
                                                <select name="orderby" className="form-control">
                                                    <option defaultValue="" selected="selected">
                                                        British Indian Ocean Territory
                                                    </option>
                                                    <option defaultValue={1}>Brunei</option>
                                                    <option defaultValue={2}>Bulgaria</option>
                                                    <option defaultValue={3}>Burkina Faso</option>
                                                    <option defaultValue={4}>Burundi</option>
                                                    <option defaultValue={5}>Cameroon</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>
                                                    Street address <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="House number and street name"
                                                    required=""
                                                />
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Apartment, suite, unit, etc. (optional)"
                                                    required=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>
                                                    Town / City <span className="required">*</span>
                                                </label>
                                                <input type="text" className="form-control" required="" />
                                            </div>
                                            <div className="form-group">
                                                <label>
                                                    State / Country <span className="required">*</span>
                                                </label>
                                                <input type="text" className="form-control" required="" />
                                            </div>
                                            <div className="form-group">
                                                <label>
                                                    Postcode / ZIP <span className="required">*</span>
                                                </label>
                                                <input type="text" className="form-control" required="" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label>
                                                    Phone <span className="required">*</span>
                                                </label>
                                                <input type="number" className="form-control" required="" />
                                            </div>
                                            <div className="form-group mb-3">
                                                <label>
                                                    Email address <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    placeholder="editor@gmail.com"
                                                    required=""
                                                />
                                            </div>
                                            <div className="form-footer mb-0">
                                                <div className="form-footer-right">
                                                    <button type="submit" className="btn btn-dark py-4">
                                                        Save Address
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="tab-pane fade" id="shipping" role="tabpanel">
                                    <div className="address account-content mt-0 pt-2">
                                        <h4 className="title mb-3">Shipping Address</h4>
                                        <form className="mb-2" action="#">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>
                                                            First name <span className="required">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>
                                                            Last name <span className="required">*</span>
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            required=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label>Company </label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="select-custom">
                                                <label>
                                                    Country / Region <span className="required">*</span>
                                                </label>
                                                <select name="orderby" className="form-control">
                                                    <option defaultValue="" selected="selected">
                                                        British Indian Ocean Territory
                                                    </option>
                                                    <option defaultValue={1}>Brunei</option>
                                                    <option defaultValue={2}>Bulgaria</option>
                                                    <option defaultValue={3}>Burkina Faso</option>
                                                    <option defaultValue={4}>Burundi</option>
                                                    <option defaultValue={5}>Cameroon</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <label>
                                                    Street address <span className="required">*</span>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="House number and street name"
                                                    required=""
                                                />
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Apartment, suite, unit, etc. (optional)"
                                                    required=""
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label>
                                                    Town / City <span className="required">*</span>
                                                </label>
                                                <input type="text" className="form-control" required="" />
                                            </div>
                                            <div className="form-group">
                                                <label>
                                                    State / Country <span className="required">*</span>
                                                </label>
                                                <input type="text" className="form-control" required="" />
                                            </div>
                                            <div className="form-group">
                                                <label>
                                                    Postcode / ZIP <span className="required">*</span>
                                                </label>
                                                <input type="text" className="form-control" required="" />
                                            </div>
                                            <div className="form-footer mb-0">
                                                <div className="form-footer-right">
                                                    <button type="submit" className="btn btn-dark py-4">
                                                        Save Address
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
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

            <div className="sticky-navbar">
                <div className="sticky-info">
                    <a href="demo4.html">
                        <i className="icon-home" />
                        Home
                    </a>
                </div>
                <div className="sticky-info">
                    <a href="category.html" className="">
                        <i className="icon-bars" />
                        Categories
                    </a>
                </div>
                <div className="sticky-info">
                    <a href="wishlist.html" className="">
                        <i className="icon-wishlist-2" />
                        Wishlist
                    </a>
                </div>
                <div className="sticky-info">
                    <a href="login.html" className="">
                        <i className="icon-user-2" />
                        Account
                    </a>
                </div>
                <div className="sticky-info">
                    <a href="cart.html" className="">
                        <i className="icon-shopping-cart position-relative">
                            <span className="cart-count badge-circle">3</span>
                        </i>
                        Cart
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;