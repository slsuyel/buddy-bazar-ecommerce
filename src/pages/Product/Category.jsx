
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import CategoryBar from "../Shared/CategoryBar/CategoryBar";
import Swal from "sweetalert2";
import { baseUrl } from "../../baseUrl/baseUrl";
import useCart from "../../hooks/useCart";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProviders";

const Category = () => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const delay = setTimeout(() => {
            setIsLoading(false);
        }, 700);

        return () => {
            clearTimeout(delay);
        };
    }, []);
    const [, refetch,] = useCart()
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const categoriesPd = useLoaderData()
    // console.log(categoriesPd);
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
    if (isLoading) {
        return <div className="py-5 text-center">
            <div className="spinner-grow" role="status">
                <span className="visually-hidden">Loading...</span>
            </div></div>;
    }
    return (
        <main className="main">
            <div className="container">
                <div className="row">

                    <div className="col-md-3">
                        <CategoryBar />
                    </div>
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
                                    <span>Show:</span>
                                    <div className="">
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
                            {
                                categoriesPd?.map(pd => <>

                                    <div className="col-md-4" key={pd._id}>
                                        <div className="product-default card shadow">
                                            <figure>
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
                                                <div className="label-group">
                                                    <div className="product-label label-hot">HOT</div>
                                                    <div className="product-label label-sale">-20%</div>
                                                </div>
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

                    </div>





                </div>

            </div>
            <div className="mb-3" />
        </main>

    );
};

export default Category;