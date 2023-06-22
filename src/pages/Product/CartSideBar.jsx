import { Link } from "react-router-dom";

const CartSideBar = () => {
    return (
        <div className="dropdown cart-dropdown">
                <a href="#" title="Cart" className="dropdown-toggle dropdown-arrow cart-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                  <i className="fa-solid fa-cart-shopping"></i>
                  <span className="cart-count badge-circle">3</span>
                </a>

                <div className="cart-overlay"></div>
                <div className="dropdown-menu mobile-cart">
            <a href="#" title="Close (Esc)" className="btn-close"></a>

            <div className="dropdownmenu-wrapper custom-scrollbar">
                <div className="dropdown-cart-header">Shopping Cart</div>


                <div className="dropdown-cart-products">
                    <div className="product">
                        <div className="product-details">
                            <h4 className="product-title">
                                <a href="demo1-product.html">Ultimate 3D Bluetooth Speaker</a>
                            </h4>

                            <span className="cart-product-info">
                                <span className="cart-product-qty">1</span> × $99.00
                            </span>
                        </div>


                        <figure className="product-image-container">
                            <a href="demo1-product.html" className="product-image">
                                <img src="assets/images/products/product-1.jpg" alt="product" width="80" height="80" />
                            </a>

                            <a href="#" className="btn-remove" title="Remove Product"><span>×</span></a>
                        </figure>
                    </div>


                    <div className="product">
                        <div className="product-details">
                            <h4 className="product-title">
                                <a href="demo1-product.html">Brown Women Casual HandBag</a>
                            </h4>

                            <span className="cart-product-info">
                                <span className="cart-product-qty">1</span> × $35.00
                            </span>
                        </div>


                        <figure className="product-image-container">
                            <a href="demo1-product.html" className="product-image">
                                <img src="assets/images/products/product-2.jpg" alt="product" width="80" height="80" />
                            </a>

                            <a href="#" className="btn-remove" title="Remove Product"><span>×</span></a>
                        </figure>
                    </div>


                    <div className="product">
                        <div className="product-details">
                            <h4 className="product-title">
                                <a href="demo1-product.html">Circled Ultimate 3D Speaker</a>
                            </h4>

                            <span className="cart-product-info">
                                <span className="cart-product-qty">1</span> × $35.00
                            </span>
                        </div>


                        <figure className="product-image-container">
                            <a href="demo1-product.html" className="product-image">
                                <img src="assets/images/products/product-3.jpg" alt="product" width="80" height="80" />
                            </a>
                            <a href="#" className="btn-remove" title="Remove Product"><span>×</span></a>
                        </figure>
                    </div>

                </div>


                <div className="dropdown-cart-total">
                    <span>SUBTOTAL:</span>

                    <span className="cart-total-price float-right">$134.00</span>
                </div>


                <div className="dropdown-cart-action">
                <Link to='/cart' className="btn btn-gray btn-block view-cart">View Cart</Link>
                    <a href="checkout.html" className="btn btn-dark btn-block">Checkout</a>
                </div>

            </div>

        </div>

              </div>
    );
};

export default CartSideBar;