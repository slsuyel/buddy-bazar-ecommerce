import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { baseUrl } from "../../baseUrl/baseUrl";
import Swal from "sweetalert2";
import StickyNavbar from "../Shared/StickyNavbar/StickyNavbar";

const Cart = () => {
    const [cart, refetch,] = useCart()
    const total = cart.reduce((ac, item) => ac + item.price, 0).toFixed(2);


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
        <>
            <div className="page-wrapper container mx-auto">
                <main className="main">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="cart-table-container">
                                <table className="fs-5 table table-cart">
                                    <thead>
                                        <tr>
                                            <th className="thumbnail-col" />
                                            <th className="product-col">Product</th>
                                            <th className="price-col">Price</th>
                                            <th className="qty-col text-center">vat/tax</th>
                                            <th className="text-right">Subtotal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            cart.map(product => (
                                                <tr className="product-row" key={product.cartId}>
                                                    <td>
                                                        <figure className="product-image-container">
                                                            <Link to={`/product/${product.cartId}`} className="product-image">
                                                                <img
                                                                    src={product.image}
                                                                    alt="product"
                                                                />
                                                            </Link>
                                                            <a onClick={() => { removeCart(product._id) }}
                                                                href="#"
                                                                className="btn-remove icon-cancel"
                                                                title="Remove Product"
                                                            />




                                                        </figure>
                                                    </td>
                                                    <td className="product-col">
                                                        <h5 className="product-title">

                                                            <Link to={`/product/${product.cartId}`}>
                                                                {product.productName}
                                                            </Link>
                                                        </h5>
                                                    </td>
                                                    <td>${product.price}</td>
                                                    <td className="text-center">
                                                        00
                                                    </td>
                                                    <td className="text-right">
                                                        <span className="subtotal-price">${product.price}</span>
                                                    </td>
                                                </tr>
                                            ))
                                        }


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
                                            <td>Total </td>
                                            <td>${total}</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={2} className="text-left">
                                                <h4>Shipping</h4>
                                                <div className="align-items-center d-flex justify-content-between mt-3">
                                                    <input type="radio"
                                                        defaultChecked
                                                        name="Sundorbon" value="Sundorbon" />
                                                    <label className="ms-2 text-secondary m-0"> Sundorbon Courier Service
                                                    </label>
                                                    <div className="text-dark fw-bold">
                                                        $ 120
                                                    </div>
                                                </div>



                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <td>Total</td>

                                            <td>   {parseFloat(total) + 120} </td>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div className="checkout-methods">
                                    <button disabled={cart.length == 0}
                                        className="bg-black btn m-0 p-0 w-100">
                                        <Link to='/checkout' className="btn btn-dark fs-4 py-2 w-100">
                                            Proceed to Checkout
                                            <i className="fa fa-arrow-right" />
                                        </Link>
                                    </button>
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

            <StickyNavbar />
        </>

    );
};

export default Cart;