const Checkout = () => {
    return (
        <div>
            <div className="page-wrapper">
                <div className="top-notice bg-primary text-white">
                    <div className="container text-center">
                        <h5 className="d-inline-block">
                            Get Up to <b>40% OFF</b> New-Season Styles
                        </h5>
                        <a href="category.html" className="category">
                            MEN
                        </a>
                        <a href="category.html" className="category ml-2 mr-3">
                            WOMEN
                        </a>
                        <small>* Limited time only.</small>
                        <button title="Close (Esc)" type="button" className="mfp-close">
                            ×
                        </button>
                    </div>

                </div>
                <main className="main main-test">
                    <div className="container checkout-container">
                      
                        <div className="row mt-4">
                            <div className="col-lg-7">
                                <ul className="checkout-steps">
                                    <li>
                                        <h2 className="step-title">Billing details</h2>
                                        <form action="#" id="checkout-form">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label>
                                                            First name
                                                            <abbr className="required" title="required">
                                                                *
                                                            </abbr>
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
                                                            Last name
                                                            <abbr className="required" title="required">
                                                                *
                                                            </abbr>
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
                                                <label>Company name (optional)</label>
                                                <input type="text" className="form-control" />
                                            </div>
                                            <div className="select-custom">
                                                <label>
                                                    District
                                                    <abbr className="required" title="required">
                                                        *
                                                    </abbr>
                                                </label>
                                                <select name="orderby" className="form-control">
                                                    <option value="Bagerhat">Bagerhat</option>
                                                    <option value="Bandarban">Bandarban</option>
                                                    <option value="Barguna">Barguna</option>
                                                    <option value="Barisal">Barisal</option>
                                                    <option value="Bhola">Bhola</option>
                                                    <option value="Bogra">Bogra</option>
                                                    <option value="Brahmanbaria">Brahmanbaria</option>
                                                    <option value="Chandpur">Chandpur</option>
                                                    <option value="Chapainawabganj">Chapainawabganj</option>
                                                    <option value="Chattogram">Chattogram</option>
                                                    <option value="Chuadanga">Chuadanga</option>
                                                    <option value="Comilla">Comilla</option>
                                                    <option value="Cox's Bazar">Coxs Bazar</option>
                                                    <option value="Dhaka" selected="selected">Dhaka</option>
                                                    <option value="Dinajpur">Dinajpur</option>
                                                    <option value="Faridpur">Faridpur</option>
                                                    <option value="Feni">Feni</option>
                                                    <option value="Gaibandha">Gaibandha</option>
                                                    <option value="Gazipur">Gazipur</option>
                                                    <option value="Gopalganj">Gopalganj</option>
                                                    <option value="Habiganj">Habiganj</option>
                                                    <option value="Jamalpur">Jamalpur</option>
                                                    <option value="Jessore">Jessore</option>
                                                    <option value="Jhalokati">Jhalokati</option>
                                                    <option value="Jhenaidah">Jhenaidah</option>
                                                    <option value="Joypurhat">Joypurhat</option>
                                                    <option value="Khagrachhari">Khagrachhari</option>
                                                    <option value="Khulna">Khulna</option>
                                                    <option value="Kishoreganj">Kishoreganj</option>
                                                    <option value="Kurigram">Kurigram</option>
                                                    <option value="Kushtia">Kushtia</option>
                                                    <option value="Lakshmipur">Lakshmipur</option>
                                                    <option value="Lalmonirhat">Lalmonirhat</option>
                                                    <option value="Madaripur">Madaripur</option>
                                                    <option value="Magura">Magura</option>
                                                    <option value="Manikganj">Manikganj</option>
                                                    <option value="Meherpur">Meherpur</option>
                                                    <option value="Moulvibazar">Moulvibazar</option>
                                                    <option value="Munshiganj">Munshiganj</option>
                                                    <option value="Mymensingh">Mymensingh</option>
                                                    <option value="Naogaon">Naogaon</option>
                                                    <option value="Narail">Narail</option>
                                                    <option value="Narayanganj">Narayanganj</option>
                                                    <option value="Narsingdi">Narsingdi</option>
                                                    <option value="Natore">Natore</option>
                                                    <option value="Netrokona">Netrokona</option>
                                                    <option value="Nilphamari">Nilphamari</option>
                                                    <option value="Noakhali">Noakhali</option>
                                                    <option value="Pabna">Pabna</option>
                                                    <option value="Panchagarh">Panchagarh</option>
                                                    <option value="Patuakhali">Patuakhali</option>

                                                </select>
                                            </div>
                                            <div className="form-group mb-1 pb-2">
                                                <label>
                                                    Street address
                                                    <abbr className="required" title="required">
                                                        *
                                                    </abbr>
                                                </label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="House number and street name"
                                                    required=""
                                                />
                                            </div>
                                           
                                            <div className="form-group">
                                                <label>
                                                    Town / City
                                                    <abbr className="required" title="required">
                                                        *
                                                    </abbr>
                                                </label>
                                                <input type="text" className="form-control" required="" />
                                            </div>
                                           
                                            <div className="form-group">
                                                <label>
                                                    Postcode / Zip
                                                    <abbr className="required" title="required">
                                                        *
                                                    </abbr>
                                                </label>
                                                <input type="text" className="form-control" required="" />
                                            </div>
                                            <div className="form-group">
                                                <label>
                                                    Phone{" "}
                                                    <abbr className="required" title="required">
                                                        *
                                                    </abbr>
                                                </label>
                                                <input type="tel" className="form-control" required="" />
                                            </div>
                                            <div className="form-group">
                                                <label>
                                                    Email address
                                                    <abbr className="required" title="required">
                                                        *
                                                    </abbr>
                                                </label>
                                                <input type="email" className="form-control" required="" />
                                            </div>
                                            <div className="form-group">
                                                <label className="order-comments">
                                                    Order notes (optional)
                                                </label>
                                                <textarea
                                                    className="form-control"
                                                    placeholder="Notes about your order, e.g. special notes for delivery."
                                                    required=""
                                                    defaultValue={""}
                                                />
                                            </div>
                                        </form>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-5">
                                <div className="order-summary">
                                    <h3>YOUR ORDER</h3>
                                    <table className="table table-mini-cart">
                                        <thead>
                                            <tr>
                                                <th colSpan={2}>Product</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="product-col">
                                                    <h3 className="product-title">
                                                        Circled Ultimate 3D Speaker ×
                                                        <span className="product-qty">4</span>
                                                    </h3>
                                                </td>
                                                <td className="price-col">
                                                    <span>$1,040.00</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="product-col">
                                                    <h3 className="product-title">
                                                        Fashion Computer Bag ×
                                                        <span className="product-qty">2</span>
                                                    </h3>
                                                </td>
                                                <td className="price-col">
                                                    <span>$418.00</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr className="cart-subtotal">
                                                <td>
                                                    <h4>Subtotal</h4>
                                                </td>
                                                <td className="price-col">
                                                    <span>$1,458.00</span>
                                                </td>
                                            </tr>
                                            <tr className="order-shipping">
                                                <td className="text-left" colSpan={2}>
                                                    <h4 className="m-b-sm">Shipping</h4>
                                                    <div className="form-group form-group-custom-control">
                                                        <div className="custom-control custom-radio d-flex">
                                                            <input
                                                                type="radio"
                                                                className="custom-control-input"
                                                                name="radio"
                                                                defaultChecked=""
                                                            />
                                                            <label className="custom-control-label">
                                                                Local Pickup
                                                            </label>
                                                        </div>

                                                    </div>

                                                    <div className="form-group form-group-custom-control mb-0">
                                                        <div className="custom-control custom-radio d-flex mb-0">
                                                            <input
                                                                type="radio"
                                                                name="radio"
                                                                className="custom-control-input"
                                                            />
                                                            <label className="custom-control-label">
                                                                Flat Rate
                                                            </label>
                                                        </div>

                                                    </div>

                                                </td>
                                            </tr>
                                            <tr className="order-total">
                                                <td>
                                                    <h4>Total</h4>
                                                </td>
                                                <td>
                                                    <b className="total-price">
                                                        <span>$1,603.80</span>
                                                    </b>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <div className="payment-methods">
                                        <h4 className="">Payment methods</h4>
                                        <div className="info-box with-icon p-0">
                                            <p>
                                                Sorry, it seems that there are no available payment methods
                                                for your state. Please contact us if you require assistance
                                                or wish to make alternate arrangements.
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-dark py-4 btn-place-order"
                                        form="checkout-form"
                                    >
                                        Place order
                                    </button>
                                </div>

                            </div>

                        </div>

                    </div>

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
                                <a href="https://1.envato.market/DdLk5" >
                                    Buy Porto!
                                    <span className="tip tip-hot">Hot</span>
                                </a>
                            </li>
                        </ul>
                        <ul className="mobile-menu">
                            <li>
                                <a href="dashboard.html">My Account</a>
                            </li>
                            <li>
                                <a href="about.html">About Us</a>
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


        </div>
    );
};

export default Checkout;