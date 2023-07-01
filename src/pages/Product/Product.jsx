import { Link, useNavigate, useParams } from "react-router-dom";
import useAllproducts from "../../hooks/useAllproducts";
import ProductsSections from "../Home/ProductsSections/ProductsSections";
import { baseUrl } from "../../baseUrl/baseUrl";
import useCart from "../../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProviders";
import Swal from "sweetalert2";
import StickyNavbar from "../Shared/StickyNavbar/StickyNavbar";

const Product = () => {
    const [, refetch,] = useCart()
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const { id } = useParams();
    const [allProducts, , isLoading] = useAllproducts();
    if (isLoading) {
        return <div>Loading....</div>;
    }
    const product = allProducts?.find((p) => p._id == id);


    const handleAddToCart = (product) => {
        if (user && user?.email) {
            const cartProducts = {
                email: user.email,
                cartId: product._id,
                productName: product.name,
                image: product.image1,
                price: product.price
            };
            // console.log(selectedClass);

            fetch(`${baseUrl}/carts`, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(cartProducts)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-start',
                            icon: 'success',
                            title: 'Product added to cart successfully',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        } else {
            navigate('/login');
        }
    };
    return (
        <>
            <div className="page-wrapper">
                <main className="main">
                    <div className="container">
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
                                        <div className="product-item">
                                            <img
                                                src={product?.image1}
                                                alt=""
                                                style={{
                                                    width: "297px",
                                                    margin: "auto",
                                                    height: "320px",
                                                }}
                                            />
                                        </div>
                                    </div>{" "}
                                </div>{" "}
                                <div className="col-lg-7 col-md-6 product-single-details">
                                    <h1 className="product-title">{product?.name}</h1>{" "}
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{ width: "60%" }} />{" "}
                                            <span className="tooltiptext tooltip-top" />
                                        </div>{" "}
                                        <a href="#" className="rating-link">
                                            ( 6 Reviews )
                                        </a>
                                    </div>{" "}
                                    <hr className="short-divider" />
                                    <div className="price-box">
                                        <span className="old-price">$1,999.00</span>
                                        <span className="new-price">{product?.price}</span>
                                    </div>{" "}
                                    <div className="product-desc">
                                        <p>{product?.description}</p>
                                    </div>{" "}
                                    <ul className="single-info-list">
                                        <li>
                                            SKU: <strong>{product?.SKU}</strong>
                                        </li>
                                        <li>
                                            CATEGORY: <strong>{product?.category}</strong>
                                        </li>
                                        <li>
                                            TAGS :{" "}
                                            {product?.tags?.map((tags) => (
                                                <>
                                                    {" "}
                                                    <strong> {tags},</strong>{" "}
                                                </>
                                            ))}{" "}
                                        </li>
                                    </ul>
                                    <div className="product-action">
                                        {" "}

                                        <button onClick={() => { handleAddToCart(product) }} className="btn btn-dark fs-4 fw-bold p-2 px-3 rounded-0 text-capitalize">
                                            {" "}
                                            <i className="fa-solid fa-cart-shopping"></i> Add to Cart
                                        </button>

                                        {" "}
                                        <Link to='/cart' className="ms-2 btn btn-dark fs-4 fw-bold p-2 px-3 rounded-0 text-capitalize">
                                            {" "}
                                            View Carts{" "}
                                        </Link>{" "}
                                    </div>{" "}
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
                                        </div>{" "}
                                    </div>{" "}
                                </div>{" "}
                            </div>{" "}
                        </div>{" "}
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
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna
                                            aliqua. Ut enim ad minim veniam, nostrud ipsum consectetur
                                            sed do, quis nostrud exercitation ullamco laboris nisi ut
                                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                                            reprehenderit in voluptate velit esse cillum dolore eu
                                            fugiat nulla pariatur. Excepteur sint occaecat.
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
                                    </div>{" "}
                                </div>{" "}

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
                                </div>{" "}
                                <div
                                    className="tab-pane fade"
                                    id="product-reviews-content"
                                    role="tabpanel"
                                    aria-labelledby="product-tab-reviews"
                                >
                                    <div className="product-reviews-content">
                                        <p>nice product</p>

                                    </div>{" "}
                                </div>
                            </div>
                        </div>
                        <hr className="mt-0 m-b-5" />
                        <div className="product-widgets-container row pb-2">
                            {" "}
                            <div className="col-md-8">
                                <ProductsSections />
                            </div>
                        </div>
                    </div>
                </main>

            </div>
            {/* <MobileMenu /> */}

            <StickyNavbar />
        </>
    );
};

export default Product;
