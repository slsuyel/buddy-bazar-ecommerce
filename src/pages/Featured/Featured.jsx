import { Link } from "react-router-dom";
import useAllproducts from "../../hooks/useAllproducts";

const Featured = () => {
    const [allProducts, , isLoading] = useAllproducts()

    if (isLoading) {
        <div>Loding....</div>
    }



    const featuredProducts = allProducts.filter((product) => product.status === 'feature');
    return (
        <div className="mt-4">
            <h2 className="my-2">Featured Products</h2>
            <div className="d-flex gap-2">

                {
                    featuredProducts.slice(1, 5).map(feature => (
                        <div key={feature.SKU} className="product-default inner-quickview inner-icon w-25" >
                            <figure className="img-effect" >
                                <Link to={`/product/${feature._id}`}>
                                    <img
                                        src={feature?.image1}
                                        alt="product"
                                        style={{ height: "155px", width: "196px" }}
                                    />
                                    <img
                                        src={feature?.image2}
                                        style={{ height: "155px", width: "196px" }}
                                        alt="product"
                                    />
                                </Link>
                                <div className="label-group">
                                    <div className="product-label label-hot">HOT</div>
                                    <div className="product-label label-sale">-20%</div>
                                </div>
                                {/* <div className="btn-icon-group"></div> */}
                                <Link to={`/product/${feature._id}`} className="btn-quickview">
                                    Quick View
                                </Link>
                            </figure>

                            <div className="product-details">
                                <div className="category-wrap">
                                    <div className="category-list">
                                        <a href="demo1-shop.html" className="product-category">
                                            {feature?.category}
                                        </a>
                                    </div>
                                    <button title="Add to cart" className="btn fs-3 text-danger"
                                    >
                                        <i className="fa-solid fa-cart-shopping"></i>
                                    </button>
                                </div>
                                <h3 className="product-title">
                                    <Link to='/product' className="text-decoration-none">{feature?.name}</Link>
                                </h3>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: "100%" }} />

                                        <span className="tooltiptext tooltip-top" />
                                    </div>

                                </div>

                                <div className="price-box">
                                    <span className="product-price">${feature?.price}</span>
                                </div>

                            </div>

                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default Featured;