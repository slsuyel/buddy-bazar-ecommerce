import { Link } from "react-router-dom";

const Product = () => {
    return (
        <>
            <div className="page-wrapper">
                <main className="main">
                    <div className="container">
                        <nav aria-label="breadcrumb" className="breadcrumb-nav">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <a href="demo4.html">
                                        <i className="icon-home" />
                                    </a>
                                </li>
                                <li className="breadcrumb-item">
                                    <a href="#">Products</a>
                                </li>
                            </ol>
                        </nav>
                        <div className="product-single-container product-single-default">
                            <div className="cart-message d-none">
                                <strong className="single-cart-notice">
                                    “Men Black Sports Shoes”
                                </strong>
                                <span>has been added to your cart.</span>
                            </div>
                            <div className="row">
                                <div className="col-lg-5 col-md-6 product-single-gallery">
                                    <div className="product-slider-container">
                                        <div className="label-group">
                                            <div className="product-label label-hot">HOT</div>
                                            <div className="product-label label-sale">-16%</div>
                                        </div>
                                        <div className="product-single-carousel owl-carousel owl-theme show-nav-hover">

                                            <div className="product-item">
                                                <img
                                                    className="product-single-image"
                                                    src="https://mamabazar24.com/wp-content/uploads/2021/09/T500.jpg"
                                                    data-zoom-image="https://mamabazar24.com/wp-content/uploads/2021/09/T500.jpg" style={{ width: '300px', margin: 'auto' }}

                                                    alt="product"
                                                />
                                            </div>
                                            <div className="product-item">
                                                <img
                                                    className="product-single-image"
                                                    src="https://mamabazar24.com/wp-content/uploads/2021/09/T500.jpg"
                                                    data-zoom-image="https://mamabazar24.com/wp-content/uploads/2021/09/T500.jpg"
                                                    style={{ width: '300px', margin: 'auto' }}
                                                />
                                            </div>
                                        </div>

                                        <span className="prod-full-screen">
                                            <i className="icon-plus" />
                                        </span>
                                    </div>
                                    <div className="prod-thumbnail owl-dots">
                                        <div className="owl-dot">
                                            <img
                                                src="https://mamabazar24.com/wp-content/uploads/2021/09/T500.jpg"
                                                width={110}
                                                height={110}
                                                alt="product-thumbnail"
                                            />
                                        </div>
                                        <div className="owl-dot">
                                            <img
                                                src="https://mamabazar24.com/wp-content/uploads/2021/09/T500.jpg"
                                                width={110}
                                                height={110}
                                                alt="product-thumbnail"
                                            />
                                        </div>
                                        <div className="owl-dot">
                                            <img
                                                src="https://mamabazar24.com/wp-content/uploads/2021/09/T500.jpg"
                                                width={110}
                                                height={110}
                                                alt="product-thumbnail"
                                            />
                                        </div>
                                        <div className="owl-dot">
                                            <img
                                                src="https://mamabazar24.com/wp-content/uploads/2021/09/T500.jpg"
                                                width={110}
                                                height={110}
                                                alt="product-thumbnail"
                                            />
                                        </div>
                                        <div className="owl-dot">
                                            <img
                                                src="https://mamabazar24.com/wp-content/uploads/2021/09/T500.jpg"
                                                width={110}
                                                height={110}
                                                alt="product-thumbnail"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* End .product-single-gallery */}
                                <div className="col-lg-7 col-md-6 product-single-details">
                                    <h1 className="product-title">Men Black Sports Shoes</h1>
                                   
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: "60%" }} />
                                            {/* End .ratings */}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>
                                        {/* End .product-ratings */}
                                        <a href="#" className="rating-link">
                                            ( 6 Reviews )
                                        </a>
                                    </div>
                                    {/* End .ratings-container */}
                                    <hr className="short-divider" />
                                    <div className="price-box">
                                        <span className="old-price">$1,999.00</span>
                                        <span className="new-price">$1,699.00</span>
                                    </div>
                                    {/* End .price-box */}
                                    <div className="product-desc">
                                        <p>
                                            Pellentesque habitant morbi tristique senectus et netus et
                                            malesuada fames ac turpis egestas. Vestibulum tortor quam,
                                            feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu
                                            libero sit amet quam egestas semper. Aenean ultricies mi vitae
                                            est. Mauris placerat eleifend leo.
                                        </p>
                                    </div>
                                    {/* End .product-desc */}
                                    <ul className="single-info-list">
                                        <li>
                                            SKU: <strong>654613612</strong>
                                        </li>
                                        <li>
                                            CATEGORY:{" "}
                                            <strong>
                                                <a href="#" className="product-category">
                                                    SHOES
                                                </a>
                                            </strong>
                                        </li>
                                        <li>
                                            TAGs:{" "}
                                            <strong>
                                                <a href="#" className="product-category">
                                                    CLOTHES
                                                </a>
                                            </strong>
                                            ,
                                            <strong>
                                                <a href="#" className="product-category">
                                                    SWEATER
                                                </a>
                                            </strong>
                                        </li>
                                    </ul>
                                    <div className="product-action">

                                        <button className="btn btn-dark fs-4 fw-bold p-2 px-3 rounded-0 text-capitalize"> <i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>

                                        <Link className="ms-2 btn btn-dark fs-4 fw-bold p-2 px-3 rounded-0 text-capitalize"> View Carts </Link>

                                    </div>
                                    {/* End .product-action */}
                                    <hr className="divider mb-0 mt-0" />
                                    <div className="product-single-share mb-3">
                                        <label className="sr-only">Share:</label>
                                        <div className="social-icons mr-2">
                                            <a href="#" className="social-icon social-facebook">
                                                <i className="fab fa-facebook" title="Facebook"></i>
                                            </a>
                                            <a href="#" className="social-icon social-twitter">
                                                <i className="fab fa-twitter" title="Twitter"></i>
                                            </a>
                                            <a href="#" className="social-icon social-linkedin">
                                                <i className="fab fa-linkedin-in" title="LinkedIn"></i>
                                            </a>
                                            <a href="#" className="social-icon social-gplus">
                                                <i className="fab fa-google-plus-g" title="Google+"></i>
                                            </a>
                                            <a href="#" className="social-icon social-mail">
                                                <i className="far fa-envelope" title="Mail"></i>
                                            </a>
                                        </div>

                                    </div>
                                    {/* End .product single-share */}
                                </div>
                                {/* End .product-single-details */}
                            </div>
                            {/* End .row */}
                        </div>
                        {/* End .product-single-container */}
                        <div className="product-single-tabs">
                            <ul className="nav nav-tabs" role="tablist">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        id="product-tab-desc"
                                        data-toggle="tab"
                                        href="#product-desc-content"
                                        role="tab"
                                        aria-controls="product-desc-content"
                                        aria-selected="true"
                                    >
                                        Description
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="product-tab-size"
                                        data-toggle="tab"
                                        href="#product-size-content"
                                        role="tab"
                                        aria-controls="product-size-content"
                                        aria-selected="true"
                                    >
                                        Size Guide
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="product-tab-tags"
                                        data-toggle="tab"
                                        href="#product-tags-content"
                                        role="tab"
                                        aria-controls="product-tags-content"
                                        aria-selected="false"
                                    >
                                        Additional Information
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        id="product-tab-reviews"
                                        data-toggle="tab"
                                        href="#product-reviews-content"
                                        role="tab"
                                        aria-controls="product-reviews-content"
                                        aria-selected="false"
                                    >
                                        Reviews (1)
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div
                                    className="tab-pane fade show active"
                                    id="product-desc-content"
                                    role="tabpanel"
                                    aria-labelledby="product-tab-desc"
                                >
                                    <div className="product-desc-content">
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam, nostrud ipsum consectetur sed do,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                                            ea commodo consequat. Duis aute irure dolor in reprehenderit
                                            in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur. Excepteur sint occaecat.
                                        </p>
                                        <ul>
                                            <li>
                                                Any Product types that You want - Simple, Configurable
                                            </li>
                                            <li>Downloadable/Digital Products, Virtual Products</li>
                                            <li>Inventory Management with Backordered items</li>
                                        </ul>
                                        <p>
                                            Sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                                            ullamco laboris nisi ut aliquip ex ea commodo consequat.{" "}
                                        </p>
                                    </div>
                                    {/* End .product-desc-content */}
                                </div>
                                {/* End .tab-pane */}
                                <div
                                    className="tab-pane fade"
                                    id="product-size-content"
                                    role="tabpanel"
                                    aria-labelledby="product-tab-size"
                                >
                                    <div className="product-size-content">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <img
                                                    src="assets/images/products/single/body-shape.png"
                                                    alt="body shape"
                                                    width={217}
                                                    height={398}
                                                />
                                            </div>
                                            {/* End .col-md-4 */}
                                            <div className="col-md-8">
                                                <table className="table table-size">
                                                    <thead>
                                                        <tr>
                                                            <th>SIZE</th>
                                                            <th>CHEST(in.)</th>
                                                            <th>WAIST(in.)</th>
                                                            <th>HIPS(in.)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>XS</td>
                                                            <td>34-36</td>
                                                            <td>27-29</td>
                                                            <td>34.5-36.5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>S</td>
                                                            <td>36-38</td>
                                                            <td>29-31</td>
                                                            <td>36.5-38.5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>M</td>
                                                            <td>38-40</td>
                                                            <td>31-33</td>
                                                            <td>38.5-40.5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>L</td>
                                                            <td>40-42</td>
                                                            <td>33-36</td>
                                                            <td>40.5-43.5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>XL</td>
                                                            <td>42-45</td>
                                                            <td>36-40</td>
                                                            <td>43.5-47.5</td>
                                                        </tr>
                                                        <tr>
                                                            <td>XXL</td>
                                                            <td>45-48</td>
                                                            <td>40-44</td>
                                                            <td>47.5-51.5</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        {/* End .row */}
                                    </div>
                                    {/* End .product-size-content */}
                                </div>
                                {/* End .tab-pane */}
                                <div
                                    className="tab-pane fade"
                                    id="product-tags-content"
                                    role="tabpanel"
                                    aria-labelledby="product-tab-tags"
                                >
                                    <table className="table table-striped mt-2">
                                        <tbody>
                                            <tr>
                                                <th>Weight</th>
                                                <td>23 kg</td>
                                            </tr>
                                            <tr>
                                                <th>Dimensions</th>
                                                <td>12 × 24 × 35 cm</td>
                                            </tr>
                                            <tr>
                                                <th>Color</th>
                                                <td>Black, Green, Indigo</td>
                                            </tr>
                                            <tr>
                                                <th>Size</th>
                                                <td>Large, Medium, Small</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                {/* End .tab-pane */}
                                <div
                                    className="tab-pane fade"
                                    id="product-reviews-content"
                                    role="tabpanel"
                                    aria-labelledby="product-tab-reviews"
                                >
                                    <div className="product-reviews-content">
                                        <h3 className="reviews-title">
                                            1 review for Men Black Sports Shoes
                                        </h3>
                                        <div className="comment-list">
                                            <div className="comments">
                                                <figure className="img-thumbnail">
                                                    <img
                                                        src="assets/images/blog/author.jpg"
                                                        alt="author"
                                                        width={80}
                                                        height={80}
                                                    />
                                                </figure>
                                                <div className="comment-block">
                                                    <div className="comment-header">
                                                        <div className="comment-arrow" />
                                                        <div className="ratings-container float-sm-right">
                                                            <div className="product-ratings">
                                                                <span
                                                                    className="ratings"
                                                                    style={{ width: "60%" }}
                                                                />
                                                                {/* End .ratings */}
                                                                <span className="tooltiptext tooltip-top" />
                                                            </div>
                                                            {/* End .product-ratings */}
                                                        </div>
                                                        <span className="comment-by">
                                                            <strong>Joe Doe</strong> – April 12, 2018
                                                        </span>
                                                    </div>
                                                    <div className="comment-content">
                                                        <p>Excellent.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="divider" />
                                        <div className="add-product-review">
                                            <h3 className="review-title">Add a review</h3>
                                            <form action="#" className="comment-form m-0">
                                                <div className="rating-form">
                                                    <label htmlFor="rating">
                                                        Your rating <span className="required">*</span>
                                                    </label>
                                                    <span className="rating-stars">
                                                        <a className="star-1" href="#">
                                                            1
                                                        </a>
                                                        <a className="star-2" href="#">
                                                            2
                                                        </a>
                                                        <a className="star-3" href="#">
                                                            3
                                                        </a>
                                                        <a className="star-4" href="#">
                                                            4
                                                        </a>
                                                        <a className="star-5" href="#">
                                                            5
                                                        </a>
                                                    </span>
                                                    <select
                                                        name="rating"
                                                        id="rating"
                                                        required=""
                                                        style={{ display: "none" }}
                                                    >
                                                        <option value="">Rate…</option>
                                                        <option value={5}>Perfect</option>
                                                        <option value={4}>Good</option>
                                                        <option value={3}>Average</option>
                                                        <option value={2}>Not that bad</option>
                                                        <option value={1}>Very poor</option>
                                                    </select>
                                                </div>
                                                <div className="form-group">
                                                    <label>
                                                        Your review <span className="required">*</span>
                                                    </label>
                                                    <textarea
                                                        cols={5}
                                                        rows={6}
                                                        className="form-control form-control-sm"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                                {/* End .form-group */}
                                                <div className="row">
                                                    <div className="col-md-6 col-xl-12">
                                                        <div className="form-group">
                                                            <label>
                                                                Name <span className="required">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm"
                                                                required=""
                                                            />
                                                        </div>
                                                        {/* End .form-group */}
                                                    </div>
                                                    <div className="col-md-6 col-xl-12">
                                                        <div className="form-group">
                                                            <label>
                                                                Email <span className="required">*</span>
                                                            </label>
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm"
                                                                required=""
                                                            />
                                                        </div>
                                                        {/* End .form-group */}
                                                    </div>
                                                    <div className="col-md-12">
                                                        <div className="custom-control custom-checkbox">
                                                            <input
                                                                type="checkbox"
                                                                className="custom-control-input"
                                                                id="save-name"
                                                            />
                                                            <label
                                                                className="custom-control-label mb-0"
                                                                htmlFor="save-name"
                                                            >
                                                                Save my name, email, and website in this browser for
                                                                the next time I comment.
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <input
                                                    type="submit"
                                                    className="btn btn-primary"
                                                    defaultValue="Submit"
                                                />
                                            </form>
                                        </div>
                                        {/* End .add-product-review */}
                                    </div>
                                    {/* End .product-reviews-content */}
                                </div>
                                {/* End .tab-pane */}
                            </div>
                            {/* End .tab-content */}
                        </div>
                        {/* End .product-single-tabs */}
                        <div className="products-section pt-0">
                            <h2 className="section-title">Related Products</h2>
                            <div className="products-slider owl-carousel owl-theme dots-top dots-small">
                                <div className="product-default">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="assets/images/products/product-1.jpg"
                                                width={280}
                                                height={280}
                                                alt="product"
                                            />
                                            <img
                                                src="assets/images/products/product-1-2.jpg"
                                                width={280}
                                                height={280}
                                                alt="product"
                                            />
                                        </a>
                                        <div className="label-group">
                                            <div className="product-label label-hot">HOT</div>
                                            <div className="product-label label-sale">-20%</div>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <div className="category-list">
                                            <a href="category.html" className="product-category">
                                                Category
                                            </a>
                                        </div>
                                        <h3 className="product-title">
                                            <a href="product.html">Ultimate 3D Bluetooth Speaker</a>
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "80%" }} />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <del className="old-price">$59.00</del>
                                            <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                            <a
                                                href="wishlist.html"
                                                title="Wishlist"
                                                className="btn-icon-wish"
                                            >
                                                <i className="icon-heart" />
                                            </a>
                                            <a href="product.html" className="btn-icon btn-add-cart">
                                                <i className="fa fa-arrow-right" />
                                                <span>SELECT OPTIONS</span>
                                            </a>
                                            <a
                                                href="ajax/product-quick-view.html"
                                                className="btn-quickview"
                                                title="Quick View"
                                            >
                                                <i className="fas fa-external-link-alt" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* End .product-details */}
                                </div>
                                <div className="product-default">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="assets/images/products/product-3.jpg"
                                                width={280}
                                                height={280}
                                                alt="product"
                                            />
                                            <img
                                                src="assets/images/products/product-3-2.jpg"
                                                width={280}
                                                height={280}
                                                alt="product"
                                            />
                                        </a>
                                        <div className="label-group">
                                            <div className="product-label label-hot">HOT</div>
                                            <div className="product-label label-sale">-20%</div>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <div className="category-list">
                                            <a href="category.html" className="product-category">
                                                Category
                                            </a>
                                        </div>
                                        <h3 className="product-title">
                                            <a href="product.html">Circled Ultimate 3D Speaker</a>
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "80%" }} />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <del className="old-price">$59.00</del>
                                            <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                            <a
                                                href="wishlist.html"
                                                title="Wishlist"
                                                className="btn-icon-wish"
                                            >
                                                <i className="icon-heart" />
                                            </a>
                                            <a href="product.html" className="btn-icon btn-add-cart">
                                                <i className="fa fa-arrow-right" />
                                                <span>SELECT OPTIONS</span>
                                            </a>
                                            <a
                                                href="ajax/product-quick-view.html"
                                                className="btn-quickview"
                                                title="Quick View"
                                            >
                                                <i className="fas fa-external-link-alt" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* End .product-details */}
                                </div>
                                <div className="product-default">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="assets/images/products/product-7.jpg"
                                                width={280}
                                                height={280}
                                                alt="product"
                                            />
                                            <img
                                                src="assets/images/products/product-7-2.jpg"
                                                width={280}
                                                height={280}
                                                alt="product"
                                            />
                                        </a>
                                        <div className="label-group">
                                            <div className="product-label label-hot">HOT</div>
                                            <div className="product-label label-sale">-20%</div>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <div className="category-list">
                                            <a href="category.html" className="product-category">
                                                Category
                                            </a>
                                        </div>
                                        <h3 className="product-title">
                                            <a href="product.html">Brown-Black Men Casual Glasses</a>
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "80%" }} />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <del className="old-price">$59.00</del>
                                            <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                            <a
                                                href="wishlist.html"
                                                title="Wishlist"
                                                className="btn-icon-wish"
                                            >
                                                <i className="icon-heart" />
                                            </a>
                                            <a href="product.html" className="btn-icon btn-add-cart">
                                                <i className="fa fa-arrow-right" />
                                                <span>SELECT OPTIONS</span>
                                            </a>
                                            <a
                                                href="ajax/product-quick-view.html"
                                                className="btn-quickview"
                                                title="Quick View"
                                            >
                                                <i className="fas fa-external-link-alt" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* End .product-details */}
                                </div>
                                <div className="product-default">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="assets/images/products/product-6.jpg"
                                                width={280}
                                                height={280}
                                                alt="product"
                                            />
                                            <img
                                                src="assets/images/products/product-6-2.jpg"
                                                width={280}
                                                height={280}
                                                alt="product"
                                            />
                                        </a>
                                        <div className="label-group">
                                            <div className="product-label label-hot">HOT</div>
                                            <div className="product-label label-sale">-20%</div>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <div className="category-list">
                                            <a href="category.html" className="product-category">
                                                Category
                                            </a>
                                        </div>
                                        <h3 className="product-title">
                                            <a href="product.html">Men Black Gentle Belt</a>
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "80%" }} />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <del className="old-price">$59.00</del>
                                            <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                            <a
                                                href="wishlist.html"
                                                title="Wishlist"
                                                className="btn-icon-wish"
                                            >
                                                <i className="icon-heart" />
                                            </a>
                                            <a href="product.html" className="btn-icon btn-add-cart">
                                                <i className="fa fa-arrow-right" />
                                                <span>SELECT OPTIONS</span>
                                            </a>
                                            <a
                                                href="ajax/product-quick-view.html"
                                                className="btn-quickview"
                                                title="Quick View"
                                            >
                                                <i className="fas fa-external-link-alt" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* End .product-details */}
                                </div>
                                <div className="product-default">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="assets/images/products/product-4.jpg"
                                                width={280}
                                                height={280}
                                                alt="product"
                                            />
                                            <img
                                                src="assets/images/products/product-4-2.jpg"
                                                width={280}
                                                height={280}
                                                alt="product"
                                            />
                                        </a>
                                        <div className="label-group">
                                            <div className="product-label label-hot">HOT</div>
                                            <div className="product-label label-sale">-20%</div>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <div className="category-list">
                                            <a href="category.html" className="product-category">
                                                Category
                                            </a>
                                        </div>
                                        <h3 className="product-title">
                                            <a href="product.html">Blue Backpack for the Young - S</a>
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "80%" }} />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <del className="old-price">$59.00</del>
                                            <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                        <div className="product-action">
                                            <a
                                                href="wishlist.html"
                                                title="Wishlist"
                                                className="btn-icon-wish"
                                            >
                                                <i className="icon-heart" />
                                            </a>
                                            <a href="product.html" className="btn-icon btn-add-cart">
                                                <i className="fa fa-arrow-right" />
                                                <span>SELECT OPTIONS</span>
                                            </a>
                                            <a
                                                href="ajax/product-quick-view.html"
                                                className="btn-quickview"
                                                title="Quick View"
                                            >
                                                <i className="fas fa-external-link-alt" />
                                            </a>
                                        </div>
                                    </div>
                                    {/* End .product-details */}
                                </div>
                            </div>
                            {/* End .products-slider */}
                        </div>
                        {/* End .products-section */}
                        <hr className="mt-0 m-b-5" />
                        <div className="product-widgets-container row pb-2">
                            <div className="col-lg-3 col-sm-6 pb-5 pb-md-0">
                                <h4 className="section-sub-title">Featured Products</h4>
                                <div className="product-default left-details product-widget">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="assets/images/products/small/product-1.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                            <img
                                                src="assets/images/products/small/product-1-2.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                        </a>
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-title">
                                            {" "}
                                            <a href="product.html">Ultimate 3D Bluetooth Speaker</a>
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "100%" }} />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                    </div>
                                    {/* End .product-details */}
                                </div>
                                <div className="product-default left-details product-widget">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="assets/images/products/small/product-2.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                            <img
                                                src="assets/images/products/small/product-2-2.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                        </a>
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-title">
                                            {" "}
                                            <a href="product.html">Brown Women Casual HandBag</a>{" "}
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "100%" }} />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top">5.00</span>
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                    </div>
                                    {/* End .product-details */}
                                </div>
                                <div className="product-default left-details product-widget">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="assets/images/products/small/product-3.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                            <img
                                                src="assets/images/products/small/product-3-2.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                        </a>
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-title">
                                            {" "}
                                            <a href="product.html">Circled Ultimate 3D Speaker</a>{" "}
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "100%" }} />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                    </div>
                                    {/* End .product-details */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 pb-5 pb-md-0">
                                <h4 className="section-sub-title">Best Selling Products</h4>
                                <div className="product-default left-details product-widget">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="assets/images/products/small/product-4.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                            <img
                                                src="assets/images/products/small/product-4-2.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                        </a>
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-title">
                                            {" "}
                                            <a href="product.html">Blue Backpack for the Young - S</a>
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "100%" }} />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top">5.00</span>
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                    </div>
                                    {/* End .product-details */}
                                </div>
                                <div className="product-default left-details product-widget">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="assets/images/products/small/product-5.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                            <img
                                                src="assets/images/products/small/product-5-2.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                        </a>
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-title">
                                            {" "}
                                            <a href="product.html">Casual Spring Blue Shoes</a>{" "}
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "100%" }} />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                    </div>
                                    {/* End .product-details */}
                                </div>
                                <div className="product-default left-details product-widget">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="assets/images/products/small/product-6.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                            <img
                                                src="assets/images/products/small/product-6-2.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                        </a>
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-title">
                                            {" "}
                                            <a href="product.html">Men Black Gentle Belt</a>{" "}
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "100%" }} />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top">5.00</span>
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                    </div>
                                    {/* End .product-details */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 pb-5 pb-md-0">
                                <h4 className="section-sub-title">Latest Products</h4>
                                <div className="product-default left-details product-widget">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="assets/images/products/small/product-7.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                            <img
                                                src="assets/images/products/small/product-7-2.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                        </a>
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-title">
                                            {" "}
                                            <a href="product.html">Men Black Sports Shoes</a>{" "}
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "100%" }} />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                    </div>
                                    {/* End .product-details */}
                                </div>
                                <div className="product-default left-details product-widget">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="assets/images/products/small/product-8.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                            <img
                                                src="assets/images/products/small/product-8-2.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                        </a>
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-title">
                                            {" "}
                                            <a href="product.html">Brown-Black Men Casual Glasses</a>
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "100%" }} />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top">5.00</span>
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                    </div>
                                    {/* End .product-details */}
                                </div>
                                <div className="product-default left-details product-widget">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="assets/images/products/small/product-9.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                            <img
                                                src="assets/images/products/small/product-9-2.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                        </a>
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-title">
                                            {" "}
                                            <a href="product.html">Black Men Casual Glasses</a>{" "}
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "100%" }} />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                    </div>
                                    {/* End .product-details */}
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 pb-5 pb-md-0">
                                <h4 className="section-sub-title">Top Rated Products</h4>
                                <div className="product-default left-details product-widget">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="assets/images/products/small/product-10.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                            <img
                                                src="assets/images/products/small/product-10-2.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                        </a>
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-title">
                                            {" "}
                                            <a href="product.html">Basketball Sports Blue Shoes</a>{" "}
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "100%" }} />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                    </div>
                                    {/* End .product-details */}
                                </div>
                                <div className="product-default left-details product-widget">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="assets/images/products/small/product-11.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                            <img
                                                src="assets/images/products/small/product-11-2.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                        </a>
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-title">
                                            {" "}
                                            <a href="product.html">Men Sports Travel Bag</a>{" "}
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "100%" }} />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top">5.00</span>
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                    </div>
                                    {/* End .product-details */}
                                </div>
                                <div className="product-default left-details product-widget">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="assets/images/products/small/product-12.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                            <img
                                                src="assets/images/products/small/product-12-2.jpg"
                                                width={74}
                                                height={74}
                                                alt="product"
                                            />
                                        </a>
                                    </figure>
                                    <div className="product-details">
                                        <h3 className="product-title">
                                            {" "}
                                            <a href="product.html">Brown HandBag</a>{" "}
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "100%" }} />
                                                {/* End .ratings */}
                                                <span className="tooltiptext tooltip-top" />
                                            </div>
                                            {/* End .product-ratings */}
                                        </div>
                                        {/* End .product-container */}
                                        <div className="price-box">
                                            <span className="product-price">$49.00</span>
                                        </div>
                                        {/* End .price-box */}
                                    </div>
                                    {/* End .product-details */}
                                </div>
                            </div>
                        </div>
                        {/* End .row */}
                    </div>
                    {/* End .container */}
                </main>
                {/* End .main */}
                <footer className="footer bg-dark">
                    <div className="footer-middle">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-3 col-sm-6">
                                    <div className="widget">
                                        <h4 className="widget-title">Contact Info</h4>
                                        <ul className="contact-info">
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
                                                <a href="/cdn-cgi/l/email-protection#80ede1e9ecc0e5f8e1edf0ece5aee3efed">
                                                    <span
                                                        className="__cf_email__"
                                                        data-cfemail="2845494144684d50494558444d064b4745"
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
                                                className="social-icon social-instagram icon-instagram"
                                                target="_blank"
                                                title="Instagram"
                                            />
                                        </div>
                                        {/* End .social-icons */}
                                    </div>
                                    {/* End .widget */}
                                </div>
                                {/* End .col-lg-3 */}
                                <div className="col-lg-3 col-sm-6">
                                    <div className="widget">
                                        <h4 className="widget-title">Customer Service</h4>
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
                                                <a href="about.html">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Corporate Sales</a>
                                            </li>
                                            <li>
                                                <a href="#">Privacy</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* End .widget */}
                                </div>
                                {/* End .col-lg-3 */}
                                <div className="col-lg-3 col-sm-6">
                                    <div className="widget">
                                        <h4 className="widget-title">Popular Tags</h4>
                                        <div className="tagcloud">
                                            <a href="#">Bag</a>
                                            <a href="#">Black</a>
                                            <a href="#">Blue</a>
                                            <a href="#">Clothes</a>
                                            <a href="#">Fashion</a>
                                            <a href="#">Hub</a>
                                            <a href="#">Shirt</a>
                                            <a href="#">Shoes</a>
                                            <a href="#">Skirt</a>
                                            <a href="#">Sports</a>
                                            <a href="#">Sweater</a>
                                        </div>
                                    </div>
                                    {/* End .widget */}
                                </div>
                                {/* End .col-lg-3 */}
                                <div className="col-lg-3 col-sm-6">
                                    <div className="widget widget-newsletter">
                                        <h4 className="widget-title">Subscribe newsletter</h4>
                                        <p>
                                            Get all the latest information on events, sales and offers.
                                            Sign up for newsletter:
                                        </p>
                                        <form action="#" className="mb-0">
                                            <input
                                                type="email"
                                                className="form-control m-b-3"
                                                placeholder="Email address"
                                                required=""
                                            />
                                            <input
                                                type="submit"
                                                className="btn btn-primary shadow-none"
                                                defaultValue="Subscribe"
                                            />
                                        </form>
                                    </div>
                                    {/* End .widget */}
                                </div>
                                {/* End .col-lg-3 */}
                            </div>
                            {/* End .row */}
                        </div>
                        {/* End .container */}
                    </div>
                    {/* End .footer-middle */}
                    <div className="container">
                        <div className="footer-bottom">
                            <div className="container d-sm-flex align-items-center">
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
                        {/* End .footer-bottom */}
                    </div>
                    {/* End .container */}
                </footer>
                {/* End .footer */}
            </div>


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

export default Product;