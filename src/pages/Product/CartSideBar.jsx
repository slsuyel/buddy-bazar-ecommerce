import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { baseUrl } from "../../baseUrl/baseUrl";
import Swal from "sweetalert2";

const CartSideBar = () => {
    const [cart, refetch,] = useCart()
    // console.log(cart);
    const total = cart.reduce((accumulator, item) => accumulator + item.price, 0).toFixed(2);


    const removeCart = (id) => {
        fetch(`${baseUrl}/carts/${id}`, {
            method: 'DELETE'
        })
            .then(response => {
                if (response) {
                    Swal.fire({
                        position: 'top-start',
                        icon: 'success',
                        title: 'Product Remove from the cart',
                        showConfirmButton: false,
                        timer: 1500
                    })
                    refetch()
                    // console.log(response);
                } else {
                    // Handle error response
                    throw new Error('Error deleting cart item.');
                }
            })

    }
    return (
        // <div className="dropdown cart-dropdown">
        //     <div  title="Cart" className="dropdown-toggle dropdown-arrow cart-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
        //         <i className="fa-solid fa-cart-shopping"></i>
        //         <span className="cart-count badge-circle">{cart?.length}</span>
        //     </div>

        //     <div className="cart-overlay"></div>
        //     <div className="dropdown-menu mobile-cart">
        //         <a href="#" title="Close (Esc)" className="btn-close"></a>

        //         <div className="dropdownmenu-wrapper custom-scrollbar">
        //             <div className="dropdown-cart-header">Shopping Cart</div>
        //             <div className="dropdown-cart-products">
        //                 {
        //                     cart.map(product => (<div key={product.cartId} className="product">
        //                         <div className="product-details">
        //                             <h4 className="product-title">

        //                                 <Link to={`/product/${product.cartId}`}>
        //                                     {product.productName}
        //                                 </Link>
        //                             </h4>

        //                             <span className="cart-product-info">
        //                                 <span className="cart-product-qty">1</span> ×
        //                                 ${product?.price}
        //                             </span>
        //                         </div>


        //                         <figure className="product-image-container">
        //                             <a href="demo1-product.html" className="product-image">
        //                                 <img src={product.image} alt="product" width="80" height="80" />
        //                             </a>


        //                             <a href="#" onClick={() => { removeCart(product._id) }} className="btn-remove" title="Remove Product"><span>×</span></a>
        //                         </figure>
        //                     </div>))
        //                 }
        //             </div>

        //             <div className="dropdown-cart-total">
        //                 <span>SUBTOTAL:</span>

        //                 <span className="cart-total-price float-right">${total}</span>
        //             </div>


        //             <div className="dropdown-cart-action">
        //                 <Link to='/cart' className="btn btn-gray btn-block view-cart">View Cart</Link>
        //                 <Link to="/checkout" className="btn btn-dark btn-block">Checkout</Link>
        //             </div>

        //         </div>

        //     </div>

        // </div>
        <div className="dropdown cart-dropdown">
            <div
                title="Cart"
                className="dropdown-toggle dropdown-arrow cart-toggle"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                data-display="static"
            >
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="cart-count badge-circle">{cart?.length}</span>
            </div>

            <div className="cart-overlay"></div>
            <div className="dropdown-menu mobile-cart">
                <a href="#" title="Close (Esc)" className="btn-close"></a>

                <div className="dropdownmenu-wrapper custom-scrollbar">
                    <div className="dropdown-cart-header">Shopping Cart</div>
                    <div className="dropdown-cart-products">
                        {cart.map((product) => (
                            <div key={product.cartId} className="product">
                                <div className="product-details">
                                    <h4 className="product-title">
                                        <Link to={`/product/${product.cartId}`}>
                                            {product.productName}
                                        </Link>
                                    </h4>

                                    <span className="cart-product-info">
                                        <span className="cart-product-qty">1</span> × ${product?.price}
                                    </span>
                                </div>

                                <figure className="product-image-container">
                                    <a href="demo1-product.html" className="product-image">
                                        <img
                                            src={product.image}
                                            alt="product"
                                            width="80"
                                            height="80"
                                        />
                                    </a>

                                    <a
                                        href="#"
                                        onClick={() => {
                                            removeCart(product._id);
                                        }}
                                        className="btn-remove"
                                        title="Remove Product"
                                    >
                                        <span>×</span>
                                    </a>
                                </figure>
                            </div>
                        ))}
                    </div>

                    <div className="dropdown-cart-total">
                        <span>SUBTOTAL:</span>
                        <span className="cart-total-price float-right">${total}</span>
                    </div>

                    <div className="dropdown-cart-action">
                        <Link to="/cart" className="btn btn-gray btn-block view-cart">
                            View Cart
                        </Link>
                        <Link to="/checkout" className="btn btn-dark btn-block">
                            Checkout
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartSideBar;