import { Link } from "react-router-dom";
import useAllproducts from "../../../hooks/useAllproducts";

const ProductsSections = () => {
    const [allProducts, , isLoading] = useAllproducts()

    if (isLoading) {
        <div>Loding....</div>
    }

    const topRated = allProducts.filter((product) => product.status === 'top-rated');
    const bestSeller = allProducts.filter((product) => product.status === 'best-seller');
    const latest = allProducts.filter((product) => product.status === 'latest');

    // console.log(topRated);

    return (
        <div className="border-bottom mb-5 mt-4 pb-4 py-2 row">
            <div className="col-4">
                <h2 className="section-sub-title ls-n-20">TOP RATED PRODUCTS </h2>

                {
                    topRated.slice(0, 3).map(product => (
                        <div className="product-default left-details product-widget" key={product._id}>
                            <figure>
                                <Link to={`/product/${product._id}`}>
                                    <img src={product?.image1} width="84" height="84" alt="product" />
                                    <img src={product?.image2} width="84" height="84" alt="product" />
                                </Link>
                            </figure>
                            <div className="product-details">
                                <h3 className="product-title">
                                    <Link to={`/product/${product._id}`}>
                                        {product?.name}
                                    </Link>
                                </h3>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" ></span>
                                        <span className="tooltiptext tooltip-top">{product?.rating}</span>
                                    </div>

                                </div>

                                <div className="price-box">
                                    <span className="product-price">${product?.price}</span>
                                </div>

                            </div>

                        </div>

                    ))
                }


            </div>
            <div className="col-4">
                <h2 className="section-sub-title ls-n-20">BEST SELLING PRODUCTS </h2>
                {
                    bestSeller.slice(0, 3).map(product => (
                        <div className="product-default left-details product-widget" key={product._id}>
                            <figure>
                                <Link to={`/product/${product._id}`}>
                                    <img src={product?.image1} width="84" height="84" alt="product" />
                                    <img src={product?.image2} width="84" height="84" alt="product" />
                                </Link>
                            </figure>
                            <div className="product-details">
                                <h3 className="product-title">
                                    <Link to={`/product/${product._id}`}>{product?.name}</Link>
                                </h3>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" ></span>
                                        <span className="tooltiptext tooltip-top">{product?.rating}</span>
                                    </div>

                                </div>

                                <div className="price-box">
                                    <span className="product-price">${product?.price}</span>
                                </div>

                            </div>

                        </div>

                    ))
                }
            </div>
            <div className="col-4">
                <h2 className="section-sub-title ls-n-20">LATEST PRODUCTS</h2>
                {
                    latest.slice(0, 3).map(product => (
                        <div className="product-default left-details product-widget" key={product._id}>
                            <figure>
                                <Link to={`/product/${product._id}`}>
                                    <img src={product?.image1} width="84" height="84" alt="product" />
                                    <img src={product?.image2} width="84" height="84" alt="product" />
                                </Link>
                            </figure>
                            <div className="product-details">
                                <h3 className="product-title">
                                    <Link to={`/product/${product._id}`}>{product?.name}</Link>
                                </h3>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" ></span>
                                        <span className="tooltiptext tooltip-top">{product?.rating}</span>
                                    </div>

                                </div>

                                <div className="price-box">
                                    <span className="product-price">${product?.price}</span>
                                </div>

                            </div>

                        </div>

                    ))
                }
            </div>
        </div>
    );
};

export default ProductsSections;