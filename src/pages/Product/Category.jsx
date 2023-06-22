import useAllproducts from "../../hooks/useAllproducts";

const Category = () => {
    const [allProducts] = useAllproducts()
    console.log(allProducts);
    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="col-lg-9">
                        <nav
                            className="toolbox sticky-header"
                            data-sticky-options="{'mobile': true}"
                        >
                            <div className="toolbox-left">
                                <a href="#" className="sidebar-toggle">
                                    <svg
                                        data-name="Layer 3"
                                        id="Layer_3"
                                        viewBox="0 0 32 32"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <line x1={15} x2={26} y1={9} y2={9} className="cls-1" />
                                        <line x1={6} x2={9} y1={9} y2={9} className="cls-1" />
                                        <line x1={23} x2={26} y1={16} y2={16} className="cls-1" />
                                        <line x1={6} x2={17} y1={16} y2={16} className="cls-1" />
                                        <line x1={17} x2={26} y1={23} y2={23} className="cls-1" />
                                        <line x1={6} x2={11} y1={23} y2={23} className="cls-1" />
                                        <path
                                            d="M14.5,8.92A2.6,2.6,0,0,1,12,11.5,2.6,2.6,0,0,1,9.5,8.92a2.5,2.5,0,0,1,5,0Z"
                                            className="cls-2"
                                        />
                                        <path
                                            d="M22.5,15.92a2.5,2.5,0,1,1-5,0,2.5,2.5,0,0,1,5,0Z"
                                            className="cls-2"
                                        />
                                        <path
                                            d="M21,16a1,1,0,1,1-2,0,1,1,0,0,1,2,0Z"
                                            className="cls-3"
                                        />
                                        <path
                                            d="M16.5,22.92A2.6,2.6,0,0,1,14,25.5a2.6,2.6,0,0,1-2.5-2.58,2.5,2.5,0,0,1,5,0Z"
                                            className="cls-2"
                                        />
                                    </svg>
                                    <span>Filter</span>
                                </a>
                                <div className="toolbox-item toolbox-sort">
                                    <label>Sort By:</label>
                                    <div className="select-custom">
                                        <select name="orderby" className="form-control">
                                            <option value="menu_order" selected="selected">
                                                Default sorting
                                            </option>
                                            <option value="popularity">Sort by popularity</option>
                                            <option value="rating">Sort by average rating</option>
                                            <option value="date">Sort by newness</option>
                                            <option value="price">Sort by price: low to high</option>
                                            <option value="price-desc">Sort by price: high to low</option>
                                        </select>
                                    </div>

                                </div>

                            </div>

                            <div className="toolbox-right">
                                <div className="toolbox-item toolbox-show">
                                    <label>Show:</label>
                                    <div className="select-custom">
                                        <select name="count" className="form-control">
                                            <option value={12}>12</option>
                                            <option value={24}>24</option>
                                            <option value={36}>36</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                        </nav>
                        <div className="row product-ajax-grid scroll-load">
                            <div className="col-6 col-sm-4">
                                <div className="product-default">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_23ss/img/item_01_01.jpg"
                                                width={280}
                                                height={280}
                                                alt="product"
                                            />
                                            <img
                                                src="https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_23ss/img/item_01_01.jpg"
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
                                        <div className="category-wrap">
                                            <div className="category-list">
                                                <a href="category.html" className="product-category">
                                                    category
                                                </a>
                                            </div>
                                        </div>
                                        <h3 className="product-title">
                                            {" "}
                                            <a href="product.html">Ultimate 3D Bluetooth Speaker</a>{" "}
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "100%" }} />

                                                <span className="tooltiptext tooltip-top" />
                                            </div>

                                        </div>

                                        <div className="price-box">
                                            <span className="old-price">$90.00</span>
                                            <span className="product-price">$70.00</span>
                                        </div>

                                        <div className="product-action">
                                            <button className="btn btn-dark fs-4 fw-bold p-2 px-3 rounded-0 text-capitalize"> <i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-6 col-sm-4">
                                <div className="product-default">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_23ss/img/item_01_01.jpg"
                                                width={280}
                                                height={280}
                                                alt="product"
                                            />
                                            <img
                                                src="https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_23ss/img/item_01_01.jpg"
                                                width={280}
                                                height={280}
                                                alt="product"
                                            />
                                        </a>
                                    </figure>
                                    <div className="product-details">
                                        <div className="category-wrap">
                                            <div className="category-list">
                                                <a href="category.html" className="product-category">
                                                    category
                                                </a>
                                            </div>
                                        </div>
                                        <h3 className="product-title">
                                            {" "}
                                            <a href="product.html">Brown Women Casual HandBag</a>
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "100%" }} />

                                                <span className="tooltiptext tooltip-top" />
                                            </div>

                                        </div>

                                        <div className="price-box">
                                            <span className="product-price">$33.00</span>
                                        </div>

                                        <div className="product-action">
                                            <button className="btn btn-dark fs-4 fw-bold p-2 px-3 rounded-0 text-capitalize"> <i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-6 col-sm-4">
                                <div className="product-default">
                                    <figure>
                                        <a href="product.html">
                                            <img
                                                src="https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_23ss/img/item_01_01.jpg"
                                                width={280}
                                                height={280}
                                                alt="product"
                                            />
                                            <img
                                                src="https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common_23ss/img/item_01_01.jpg"
                                                width={280}
                                                height={280}
                                                alt="product"
                                            />
                                        </a>
                                        <div className="label-group">
                                            <div className="product-label label-sale">-20%</div>
                                        </div>
                                    </figure>
                                    <div className="product-details">
                                        <div className="category-wrap">
                                            <div className="category-list">
                                                <a href="category.html" className="product-category">
                                                    category
                                                </a>
                                            </div>
                                        </div>
                                        <h3 className="product-title">
                                            {" "}
                                            <a href="product.html">Circled Ultimate 3D Speaker</a>{" "}
                                        </h3>
                                        <div className="ratings-container">
                                            <div className="product-ratings">
                                                <span className="ratings" style={{ width: "100%" }} />

                                                <span className="tooltiptext tooltip-top" />
                                            </div>

                                        </div>

                                        <div className="price-box">
                                            <span className="old-price">$90.00</span>
                                            <span className="product-price">$70.00</span>
                                        </div>

                                        <div className="product-action">
                                            <button className="btn btn-dark fs-4 fw-bold p-2 px-3 rounded-0 text-capitalize"> <i className="fa-solid fa-cart-shopping"></i> Add to Cart</button>
                                        </div>
                                    </div>

                                </div>
                            </div>





                        </div>

                    </div>

                    <div className="sidebar-overlay" />
                    <aside className="sidebar-shop col-lg-3 order-lg-first mobile-sidebar">
                        <div className="sidebar-wrapper">
                            <div className="widget">
                                <h3 className="widget-title">
                                    <a
                                        data-toggle="collapse"
                                        href="#widget-body-2"
                                        role="button"
                                        aria-expanded="true"
                                        aria-controls="widget-body-2"
                                    >
                                        Categories
                                    </a>
                                </h3>
                                <div className="collapse show" id="widget-body-2">
                                    <div className="widget-body">
                                        <ul className="cat-list">
                                            <li>
                                                <a
                                                    href="#widget-category-1"
                                                    data-toggle="collapse"
                                                    role="button"
                                                    aria-expanded="true"
                                                    aria-controls="widget-category-1"
                                                >
                                                    Accessories
                                                    <span className="products-count">(3)</span>
                                                    <i className="fa-solid fa-chevron-down"></i>
                                                </a>
                                                <div className="collapse show" id="widget-category-1">
                                                    <ul className="cat-sublist">
                                                        <li>
                                                            Caps<span className="products-count">(1)</span>
                                                        </li>
                                                        <li>
                                                            Watches<span className="products-count">(2)</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a
                                                    href="#widget-category-2"
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="widget-category-2"
                                                >
                                                    Dress<span className="products-count">(4)</span>
                                                    <i className="fa-solid fa-chevron-down"></i>
                                                </a>
                                                <div className="collapse" id="widget-category-2">
                                                    <ul className="cat-sublist">
                                                        <li>
                                                            Clothing<span className="products-count">(4)</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a
                                                    href="#widget-category-3"
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="widget-category-3"
                                                >
                                                    Electronics<span className="products-count">(2)</span>
                                                    <i className="fa-solid fa-chevron-down"></i>
                                                </a>
                                                <div className="collapse" id="widget-category-3">
                                                    <ul className="cat-sublist">
                                                        <li>
                                                            Headphone<span className="products-count">(1)</span>
                                                        </li>
                                                        <li>
                                                            Watch<span className="products-count">(1)</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a
                                                    href="#widget-category-4"
                                                    className="collapsed"
                                                    data-toggle="collapse"
                                                    role="button"
                                                    aria-expanded="false"
                                                    aria-controls="widget-category-4"
                                                >
                                                    Fashion<span className="products-count">(6)</span>
                                                    <i className="fa-solid fa-chevron-down"></i>
                                                </a>
                                                <div className="collapse" id="widget-category-4">
                                                    <ul className="cat-sublist">
                                                        <li>
                                                            Shoes<span className="products-count">(4)</span>
                                                        </li>
                                                        <li>
                                                            Bag<span className="products-count">(2)</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li>
                                                <a href="#">Music</a>
                                                <span className="products-count">(2)</span>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                            <div className="widget">
                                <h3 className="widget-title">
                                    <a
                                        data-toggle="collapse"
                                        href="#widget-body-3"
                                        role="button"
                                        aria-expanded="true"
                                        aria-controls="widget-body-3"
                                    >
                                        Price
                                    </a>
                                </h3>
                                <div className="collapse show" id="widget-body-3">
                                    <div className="widget-body pb-0">
                                        <form action="#">
                                            <div className="price-slider-wrapper">
                                                <div id="price-slider" />

                                            </div>

                                            <div className="filter-price-action d-flex align-items-center justify-content-between flex-wrap">
                                                <div className="filter-price-text">
                                                    Price:
                                                    <span id="filter-price-range" />
                                                </div>

                                                <button type="submit" className="btn btn-primary">
                                                    Filter
                                                </button>
                                            </div>

                                        </form>
                                    </div>

                                </div>

                            </div>

                            <div className="widget widget-color">
                                <h3 className="widget-title">
                                    <a
                                        data-toggle="collapse"
                                        href="#widget-body-4"
                                        role="button"
                                        aria-expanded="true"
                                        aria-controls="widget-body-4"
                                    >
                                        Color
                                    </a>
                                </h3>
                                <div className="collapse show" id="widget-body-4">
                                    <div className="widget-body pb-0">
                                        <ul className="config-swatch-list">
                                            <li className="active">
                                                <a href="#" style={{ backgroundColor: "#000" }} />
                                            </li>
                                            <li>
                                                <a href="#" style={{ backgroundColor: "#0188cc" }} />
                                            </li>
                                            <li>
                                                <a href="#" style={{ backgroundColor: "#81d742" }} />
                                            </li>
                                            <li>
                                                <a href="#" style={{ backgroundColor: "#6085a5" }} />
                                            </li>
                                            <li>
                                                <a href="#" style={{ backgroundColor: "#ab6e6e" }} />
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>

                            <div className="widget widget-size">
                                <h3 className="widget-title">
                                    <a
                                        data-toggle="collapse"
                                        href="#widget-body-5"
                                        role="button"
                                        aria-expanded="true"
                                        aria-controls="widget-body-5"
                                    >
                                        Sizes
                                    </a>
                                </h3>
                                <div className="collapse show" id="widget-body-5">
                                    <div className="widget-body pb-0">
                                        <ul className="config-size-list">
                                            <li className="active">
                                                <a href="#">XL</a>
                                            </li>
                                            <li>
                                                <a href="#">L</a>
                                            </li>
                                            <li>
                                                <a href="#">M</a>
                                            </li>
                                            <li>
                                                <a href="#">S</a>
                                            </li>
                                        </ul>
                                    </div>

                                </div>

                            </div>


                            <div className="widget widget-block">
                                <h3 className="widget-title">Custom HTML Block</h3>
                                <h5>This is a custom sub-title.</h5>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
                                    placerat mi. Etiam non tellus{" "}
                                </p>
                            </div>

                        </div>

                    </aside>

                </div>

            </div>
            <div className="mb-3" />
        </main>

    );
};

export default Category;