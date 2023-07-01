import { Link, useNavigate } from "react-router-dom";
import useAllproducts from "../../../hooks/useAllproducts";
import Swal from "sweetalert2";
import { baseUrl } from "../../../baseUrl/baseUrl";
import useCart from "../../../hooks/useCart";
import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProviders";

const Shop = () => {
    const navigate = useNavigate();
    const [, refetch,] = useCart()
    const { user } = useContext(AuthContext);
    const [allProducts, ,] = useAllproducts()
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
                        // setIsLoading(false)
                        refetch()
                        Swal.fire({
                            position: 'top-start',
                            icon: 'success',
                            title: 'Product added to cart successfully',
                            showConfirmButton: false,
                            timer: 1000
                        })
                    }
                })
        }
        else {
            navigate('/login');
        }
    };
    return (
        <div className="row product-ajax-grid scroll-load my-5">
            {
                allProducts?.map(pd => <>

                    <div className="col-md-3" key={pd._id}>
                        <div className="product-default card shadow">
                            <figure className="mx-auto">
                                <Link to={`/product/${pd._id}`} >
                                    <img
                                        src={pd?.image1}
                                        alt="product"
                                        className="rounded-1"
                                        style={{ width: '280px', height: '200px' }}
                                    />

                                    <img
                                        src={pd?.image2}
                                        alt="product"
                                        className="rounded-1"
                                        style={{ width: '280px', height: '200px' }}
                                    />

                                </Link>
                                {/* <div className="label-group">
                                    <div className="product-label label-hot">HOT</div>
                                    <div className="product-label label-sale">-20%</div>
                                </div> */}
                            </figure>
                            <div className="product-details">
                                <div className="category-wrap">

                                </div>
                                <h3 className="product-title">
                                    <Link to={`/product/${pd._id}`} className="text-decoration-none">{pd?.name}</Link>
                                </h3>
                                <div className="ratings-container">
                                    <div className="product-ratings">
                                        <span className="ratings" style={{ width: "100%" }} />

                                    </div>

                                </div>

                                <div className="price-box">
                                    <span className="old-price">$90.00</span>
                                    <span className="product-price">${pd?.price}</span>
                                </div>

                                <div className="product-action">
                                    <button onClick={() => { handleAddToCart(pd) }} className="btn btn-dark fs-4 fw-bold p-2 px-3 rounded-0 text-capitalize">
                                        {" "}
                                        <i className="fa-solid fa-cart-shopping"></i> Add to Cart
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </>)
            }
        </div>
    );
};

export default Shop;