
const Cart = () => {
    return (
        <>
            <div className="page-wrapper container mx-auto">
                <main className="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cart-table-container">
                                <table className="table table-cart">
                                    <thead>
                                        <tr>
                                            <th className="thumbnail-col" />
                                            <th className="product-col">Product</th>
                                            <th className="price-col">Price</th>
                                            <th className="qty-col">Quantity</th>
                                            <th className="text-right">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="product-row">
                                            <td>
                                                <figure className="product-image-container">
                                                    <a href="product.html" className="product-image">
                                                        <img
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPz1tTvA90I2RIWYYeisa-rm_LQzx-wpEYeMx9kzuKlk9qXMmF8bj9rDTJAyvb-yf5HV4&usqp=CAU"
                                                            alt="product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="btn-remove icon-cancel"
                                                        title="Remove Product"
                                                    />
                                                </figure>
                                            </td>
                                            <td className="product-col">
                                                <h5 className="product-title">
                                                    <a href="product.html">Men Watch</a>
                                                </h5>
                                            </td>
                                            <td>$17.90</td>
                                            <td>
                                                <div className="product-single-qty">
                                                    <input
                                                        className="horizontal-quantity form-control"
                                                        type="text"
                                                    />
                                                </div>
                                                {/* End .product-single-qty */}
                                            </td>
                                            <td className="text-right">
                                                <span className="subtotal-price">$17.90</span>
                                            </td>
                                        </tr>
                                        <tr className="product-row">
                                            <td>
                                                <figure className="product-image-container">
                                                    <a href="product.html" className="product-image">
                                                        <img
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPz1tTvA90I2RIWYYeisa-rm_LQzx-wpEYeMx9kzuKlk9qXMmF8bj9rDTJAyvb-yf5HV4&usqp=CAU"
                                                            alt="product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="btn-remove icon-cancel"
                                                        title="Remove Product"
                                                    />
                                                </figure>
                                            </td>
                                            <td className="product-col">
                                                <h5 className="product-title">
                                                    <a href="product.html">Men Watch</a>
                                                </h5>
                                            </td>
                                            <td>$17.90</td>
                                            <td>
                                                <div className="product-single-qty">
                                                    <input
                                                        className="horizontal-quantity form-control"
                                                        type="text"
                                                    />
                                                </div>
                                                {/* End .product-single-qty */}
                                            </td>
                                            <td className="text-right">
                                                <span className="subtotal-price">$17.90</span>
                                            </td>
                                        </tr>
                                        <tr className="product-row">
                                            <td>
                                                <figure className="product-image-container">
                                                    <a href="product.html" className="product-image">
                                                        <img
                                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPz1tTvA90I2RIWYYeisa-rm_LQzx-wpEYeMx9kzuKlk9qXMmF8bj9rDTJAyvb-yf5HV4&usqp=CAU"
                                                            alt="product"
                                                        />
                                                    </a>
                                                    <a
                                                        href="#"
                                                        className="btn-remove icon-cancel"
                                                        title="Remove Product"
                                                    />
                                                </figure>
                                            </td>
                                            <td className="product-col">
                                                <h5 className="product-title">
                                                    <a href="product.html">Men Black Gentle Belt</a>
                                                </h5>
                                            </td>
                                            <td>$17.90</td>
                                            <td>
                                                <div className="product-single-qty">
                                                    <input
                                                        className="horizontal-quantity form-control"
                                                        type="text"
                                                    />
                                                </div>
                                                {/* End .product-single-qty */}
                                            </td>
                                            <td className="text-right">
                                                <span className="subtotal-price">$17.90</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td colSpan={5} className="clearfix">
                                                <div className="float-left">
                                                    <div className="cart-discount">
                                                        <form action="#">
                                                            <div className="input-group">
                                                                <input
                                                                    type="text"
                                                                    className="form-control form-control-sm"
                                                                    placeholder="Coupon Code"
                                                                    required=""
                                                                />
                                                                <div className="input-group-append">
                                                                    <button className="btn btn-sm" type="submit">
                                                                        Apply Coupon
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            {/* End .input-group */}
                                                        </form>
                                                    </div>
                                                </div>
                                                {/* End .float-left */}
                                                <div className="float-right">
                                                    <button
                                                        type="submit"
                                                        className="btn btn-shop btn-update-cart"
                                                    >
                                                        Update Cart
                                                    </button>
                                                </div>
                                                {/* End .float-right */}
                                            </td>
                                        </tr>
                                    </tfoot>
                                </table>
                            </div>
                            {/* End .cart-table-container */}
                        </div>
                        {/* End .col-lg-8 */}
                        <div className="col-lg-4">
                            <div className="cart-summary">
                                <h3>CART TOTALS</h3>
                                <table className="table table-totals">
                                    <tbody>
                                        <tr>
                                            <td>Subtotal</td>
                                            <td>$17.90</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} className="text-left">
                                                <h4>Shipping</h4>
                                                <div className="form-group form-group-custom-control">
                                                    <div className="custom-control custom-radio">
                                                        <input
                                                            type="radio"
                                                            className="custom-control-input"
                                                            name="radio"
                                                            defaultChecked=""
                                                        />
                                                        <label className="custom-control-label">
                                                            Local pickup
                                                        </label>
                                                    </div>
                                                    {/* End .custom-checkbox */}
                                                </div>
                                                {/* End .form-group */}
                                                <div className="form-group form-group-custom-control mb-0">
                                                    <div className="custom-control custom-radio mb-0">
                                                        <input
                                                            type="radio"
                                                            name="radio"
                                                            className="custom-control-input"
                                                        />
                                                        <label className="custom-control-label">
                                                            Flat rate
                                                        </label>
                                                    </div>
                                                    {/* End .custom-checkbox */}
                                                </div>
                                                {/* End .form-group */}
                                                <form action="#">
                                                    <div className="form-group form-group-sm">
                                                        <label>
                                                            Shipping to <strong>NY.</strong>
                                                        </label>
                                                        <div className="select-custom">
                                                            <select className="form-control form-control-sm">
                                                                <option value="USA">United States (US)</option>
                                                                <option value="Turkey">Turkey</option>
                                                                <option value="China">China</option>
                                                                <option value="Germany">Germany</option>
                                                            </select>
                                                        </div>
                                                        {/* End .select-custom */}
                                                    </div>
                                                    {/* End .form-group */}
                                                    <div className="form-group form-group-sm">
                                                        <div className="select-custom">
                                                            <select className="form-control form-control-sm">
                                                                <option value="NY">New York</option>
                                                                <option value="CA">California</option>
                                                                <option value="TX">Texas</option>
                                                            </select>
                                                        </div>
                                                        {/* End .select-custom */}
                                                    </div>
                                                    {/* End .form-group */}
                                                    <div className="form-group form-group-sm">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-sm"
                                                            placeholder="Town / City"
                                                        />
                                                    </div>
                                                    {/* End .form-group */}
                                                    <div className="form-group form-group-sm">
                                                        <input
                                                            type="text"
                                                            className="form-control form-control-sm"
                                                            placeholder="ZIP"
                                                        />
                                                    </div>
                                                    {/* End .form-group */}
                                                    <button
                                                        type="submit"
                                                        className="btn btn-shop btn-update-total"
                                                    >
                                                        Update Totals
                                                    </button>
                                                </form>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td>Total</td>
                                            <td>$17.90</td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div className="checkout-methods">
                                    <a href="cart.html" className="btn btn-block btn-dark">
                                        Proceed to Checkout
                                        <i className="fa fa-arrow-right" />
                                    </a>
                                </div>
                            </div>
                            {/* End .cart-summary */}
                        </div>
                        {/* End .col-lg-4 */}
                    </div>
                    {/* End .row */}
                </main>
            </div>
            {/* End .container */}
            <div className="mb-6" />
            {/* margin */}
            {/* End .main */}
            {/* End .page-wrapper */}
            <div className="mobile-menu-overlay" />
            {/* End .mobil-menu-overlay */}
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
                    {/* End .mobile-nav */}
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
                {/* End .mobile-menu-wrapper */}
            </div>
            {/* End .mobile-menu-container */}
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
        </>

    );
};

export default Cart;