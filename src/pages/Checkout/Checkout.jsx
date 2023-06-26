import { useContext, useState } from "react";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../provider/AuthProviders";

const Checkout = () => {
    const [cart, ,] = useCart()
    const { user } = useContext(AuthContext);
    const total = cart.reduce((accumulator, item) => accumulator + item.price, 0).toFixed(2);

    const [formData, setFormData] = useState({
        name: user?.displayName,
        district: 'Dhaka',
        address: '',
        city: '',
        postcode: '',
        phone: '',
        email: user.email
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    console.log(formData);


    return (
        <div>
            <div className="page-wrapper">
                <main className="main main-test">
                    <div className="container checkout-container">

                        <div className="row mt-4">
                            <div className="col-lg-7">
                                <ul className="checkout-steps">
                                    <li>
                                        <h2 className="step-title">Billing details</h2>
                                        <form>
                                            <div className="form-group">
                                                <label>
                                                    Your Name
                                                    <abbr className="required" title="required">
                                                        *
                                                    </abbr>
                                                </label>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    className="form-control fs-3"
                                                    required
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="select-custom">
                                                <label>
                                                    District
                                                    <abbr className="required" title="required">
                                                        *
                                                    </abbr>
                                                </label>
                                                <select
                                                    name="district"
                                                    className="form-control fs-4"
                                                    value={formData.district}
                                                    onChange={handleChange}
                                                >
                                                    <option defaultValue="Bagerhat">Bagerhat</option>
                                                    <option defaultValue="Bandarban">Bandarban</option>
                                                    <option defaultValue="Barguna">Barguna</option>
                                                    <option defaultValue="Barisal">Barisal</option>
                                                    <option defaultValue="Bhola">Bhola</option>
                                                    <option defaultValue="Bogra">Bogra</option>
                                                    <option defaultValue="Brahmanbaria">Brahmanbaria</option>
                                                    <option defaultValue="Chandpur">Chandpur</option>
                                                    <option defaultValue="Chapainawabganj">Chapainawabganj</option>
                                                    <option defaultValue="Chattogram">Chattogram</option>
                                                    <option defaultValue="Chuadanga">Chuadanga</option>
                                                    <option defaultValue="Comilla">Comilla</option>
                                                    <option defaultValue="Cox's Bazar">Coxs Bazar</option>
                                                    <option defaultValue="Dhaka" selected="selected">Dhaka</option>
                                                    <option defaultValue="Dinajpur">Dinajpur</option>
                                                    <option defaultValue="Faridpur">Faridpur</option>
                                                    <option defaultValue="Feni">Feni</option>
                                                    <option defaultValue="Gaibandha">Gaibandha</option>
                                                    <option defaultValue="Gazipur">Gazipur</option>
                                                    <option defaultValue="Gopalganj">Gopalganj</option>
                                                    <option defaultValue="Habiganj">Habiganj</option>
                                                    <option defaultValue="Jamalpur">Jamalpur</option>
                                                    <option defaultValue="Jessore">Jessore</option>
                                                    <option defaultValue="Jhalokati">Jhalokati</option>
                                                    <option defaultValue="Jhenaidah">Jhenaidah</option>
                                                    <option defaultValue="Joypurhat">Joypurhat</option>
                                                    <option defaultValue="Khagrachhari">Khagrachhari</option>
                                                    <option defaultValue="Khulna">Khulna</option>
                                                    <option defaultValue="Kishoreganj">Kishoreganj</option>
                                                    <option defaultValue="Kurigram">Kurigram</option>
                                                    <option defaultValue="Kushtia">Kushtia</option>
                                                    <option defaultValue="Lakshmipur">Lakshmipur</option>
                                                    <option defaultValue="Lalmonirhat">Lalmonirhat</option>
                                                    <option defaultValue="Madaripur">Madaripur</option>
                                                    <option defaultValue="Magura">Magura</option>
                                                    <option defaultValue="Manikganj">Manikganj</option>
                                                    <option defaultValue="Meherpur">Meherpur</option>
                                                    <option defaultValue="Moulvibazar">Moulvibazar</option>
                                                    <option defaultValue="Munshiganj">Munshiganj</option>
                                                    <option defaultValue="Mymensingh">Mymensingh</option>
                                                    <option defaultValue="Naogaon">Naogaon</option>
                                                    <option defaultValue="Narail">Narail</option>
                                                    <option defaultValue="Narayanganj">Narayanganj</option>
                                                    <option defaultValue="Narsingdi">Narsingdi</option>
                                                    <option defaultValue="Natore">Natore</option>
                                                    <option defaultValue="Netrokona">Netrokona</option>
                                                    <option defaultValue="Nilphamari">Nilphamari</option>
                                                    <option defaultValue="Noakhali">Noakhali</option>
                                                    <option defaultValue="Pabna">Pabna</option>
                                                    <option defaultValue="Panchagarh">Panchagarh</option>
                                                    <option defaultValue="Patuakhali">Patuakhali</option>

                                                </select>
                                            </div>

                                            <div className="form-group mb-1 pb-2">
                                                <label>
                                                    Street address
                                                    <abbr className="required" title="required">
                                                        *
                                                    </abbr>
                                                </label>
                                                <input
                                                    name="address"
                                                    type="text"
                                                    className="form-control fs-3"
                                                    placeholder="House number and street name"
                                                    required
                                                    value={formData.address}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>
                                                    Town / City
                                                    <abbr className="required" title="required">
                                                        *
                                                    </abbr>
                                                </label>
                                                <input
                                                    name="city"
                                                    type="text"
                                                    className="form-control fs-3"
                                                    required
                                                    value={formData.city}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>
                                                    Postcode / Zip
                                                    <abbr className="required" title="required">
                                                        *
                                                    </abbr>
                                                </label>
                                                <input
                                                    name="postcode"
                                                    type="text"
                                                    className="form-control fs-3"
                                                    required
                                                    value={formData.postcode}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>
                                                    Phone{" "}
                                                    <abbr className="required" title="required">
                                                        *
                                                    </abbr>
                                                </label>
                                                <input
                                                    name="phone"
                                                    type="number"
                                                    className="form-control fs-3"
                                                    required
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="form-group">
                                                <label>
                                                    Email address
                                                    <abbr className="required" title="required">
                                                        *
                                                    </abbr>
                                                </label>
                                                <input
                                                    name="email"
                                                    type="email"
                                                    className="form-control fs-3"
                                                    required
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                        </form>
                                    </li>
                                </ul>
                            </div>

                            <div className="col-lg-5">
                                <div className="order-summary">
                                    <h3>YOUR ORDER</h3>
                                    <table className="table table-mini-cart">
                                        <thead>
                                            <tr>
                                                <th colSpan={2}>Product</th>
                                                <th colSpan={2}>Price</th>
                                            </tr>
                                        </thead>
                                        <tbody>

                                            {
                                                cart.map(product => (
                                                    <tr key={product?._id}>
                                                        <td className="product-col">
                                                            <h3 className="product-title">
                                                                {product.productName} × 1

                                                            </h3>
                                                        </td>
                                                        <td className="price-col">
                                                            <span>${product.price}</span>
                                                        </td>
                                                    </tr>

                                                ))
                                            }
                                        </tbody>
                                        <tfoot>
                                            < tr className="cart-subtotal">
                                                <td>
                                                    <h4>Total Price</h4>
                                                </td>
                                                <td className="price-col">
                                                    <span>${total}</span>
                                                </td>
                                            </tr>
                                            <tr className="order-shipping">
                                                <td className="text-left" colSpan={2}>
                                                    <h4 className="m-b-sm">Shipping</h4>
                                                    <div className="align-items-center d-flex justify-content-between mt-3">
                                                        <input type="radio" defaultChecked name="Sundorbon" defaultValue="Sundorbon" />
                                                        <label className="ms-2 text-secondary m-0"> Sundorbon Courier Service
                                                        </label>
                                                        <div className="text-dark fs-4">
                                                            $ 120
                                                        </div>
                                                    </div>

                                                </td>
                                            </tr>
                                            <tr className="order-total">
                                                <td>
                                                    <h4>Total</h4>
                                                </td>
                                                <td>
                                                    <b className="total-price">
                                                        <span> {parseFloat(total) + 120}</span>
                                                    </b>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                    <div className="payment-methods">
                                        <h4 className="">Payment methods</h4>
                                        <div className="info-box with-icon p-0">
                                            <div className="align-items-center d-flex flex-wrap gap-3 mx-auto">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        disabled
                                                        name="paymentMethod"
                                                        value="sslcommerz"

                                                    />
                                                    <img
                                                        className="btn btn-actions"
                                                        src="https://sslcommerz.com/wp-content/uploads/2019/11/footer_logo.png"
                                                        alt=""
                                                        width={'100px'}
                                                        height={'38px'}
                                                        style={{ height: '38px' }}
                                                    />
                                                </label>

                                                <label>
                                                    <input
                                                        defaultChecked
                                                        type="radio"
                                                        name="paymentMethod"
                                                        value="stripe"

                                                    />
                                                    <img
                                                        className="btn btn-actions"
                                                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
                                                        alt=""
                                                        width={'100px'}
                                                        height={'38px'}
                                                    />
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                 
                                        <button
                                            onClick={() => localStorage.setItem('address', JSON.stringify(formData))}
                                            disabled={cart.length === 0 || formData.phone === '' || formData.displayName === '' || formData.email === '' || formData.address === '' || formData.phone === ''}
                                            type="submit"
                                            className="btn fs-4 btn-dark py-3 btn-place-order"
                                            form="checkout-form"
                                        >
                                            Place order
                                        </button>
                                   
                                </div>

                            </div>

                        </div>

                    </div>

                </main>

            </div>
        </div>
    );
};

export default Checkout;