
const Header = () => {
    return (
       <>
       <header className="header home">
            <div className="header-top bg-primary text-uppercase">
              <div className="container">
                <div className="header-right header-dropdowns ml-0 ml-sm-auto">
                  <p className="top-message mb-0 d-none d-sm-block">
                    Welcome To Porto!
                  </p>
                  <div className="header-dropdown dropdown-expanded mr-3">
                    <a href="#">Links</a>
                    <div className="header-menu">
                      <ul>
                        <li>
                          <a href="dashboard.html">My Account</a>
                        </li>
                        <li>
                          <a href="demo1-contact.html">Contact Us</a>
                        </li>
                        <li>
                          <a href="wishlist.html">My Wishlist</a>
                        </li>
                        <li>
                          <a href="#">Site Map</a>
                        </li>
                        <li>
                          <a href="cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="#" className="login-link">
                            Log In
                          </a>
                        </li>
                      </ul>
                    </div>

                  </div>
                  n *
                  <span className="separator" />
                  <div className="d-flex fs-3 gap-3 social-icons">
                    <i className="fa-brands fa-facebook"></i>
                    <i className="fa-brands fa-whatsapp"></i>
                    <i className="fa-brands fa-twitter"></i>

                  </div>

                </div>

              </div>

            </div>

            <div className="header-middle text-dark sticky-header">
              <div className="container">
                <div className="header-left col-lg-2 w-auto pl-0">
                  <button className="mobile-menu-toggler mr-2" type="button">
                    <i className="fas fa-bars"></i>
                  </button>
                  <a href="demo1.html" className="logo">
                    <img src="https://www.portotheme.com/wordpress/porto/shop1-soft/wp-content/uploads/sites/127/2022/08/Logo.png" width="111" height="44" alt="Porto Logo" />
                  </a>
                </div>


                <div className="header-right w-lg-max pl-2">
                  <div className="header-search header-icon header-search-inline header-search-category w-lg-max">
                    <a href="#" className="search-toggle" role="button"><i className="icon-search-3"></i></a>
                    <form action="#" method="get">
                      <div className="header-search-wrapper">
                        <input type="search" className="form-control" name="q" id="q" placeholder="Search..." required="" />
                        <div className="select-custom">
                          <select id="cat" name="cat" >
                            <i className="fa-solid fa-chevron-down"></i>
                            <option value="" >All Categories</option>
                            <option value="4">Fashion</option>
                            <option value="12">- Women</option>
                            <option value="13">- Men</option>
                            <option value="66">- Jewellery</option>
                            <option value="67">- Kids Fashion</option>
                            <option value="5">Electronics</option>
                            <option value="21">- Smart TVs</option>
                            <option value="22">- Cameras</option>
                            <option value="63">- Games</option>
                            <option value="7">Home &amp; Garden</option>
                            <option value="11">Motors</option>
                            <option value="31">- Cars and Trucks</option>
                            <option value="32">- Motorcycles &amp; Powersports</option>
                            <option value="33">- Parts &amp; Accessories</option>
                            <option value="34">- Boats</option>
                            <option value="57">- Auto Tools &amp; Supplies</option>
                          </select>
                        </div>
                        <button className="bg-white border-0 fa-magnifying-glass fa-solid fs-3" type="submit"></button>
                      </div>

                    </form>
                  </div>


                  <div className="header-contact d-none d-lg-flex align-items-center pr-xl-5 mr-5 mr-xl-3 ml-5">
                    <i className="fa-solid fa-phone-volume"></i>
                    <h6 className="pt-1 line-height-1">Call us now<a href="tel:#" className="d-block text-dark ls-10 pt-1">+123 5678 890</a></h6>
                  </div>


                  <a href="login.html" className="header-icon header-icon-user">
                    <i className="fa-solid fa-user"></i>
                  </a>

                  <a href="wishlist.html" className="header-icon">
                    <i className="fa-solid fa-heart"></i>
                  </a>

                  <div className="dropdown cart-dropdown">
                    <a href="#" title="Cart" className="dropdown-toggle dropdown-arrow cart-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-display="static">
                      <i className="fa-solid fa-cart-shopping"></i>
                      <span className="cart-count badge-circle">3</span>
                    </a>

                    <div className="cart-overlay"></div>

                    <div className="dropdown-menu mobile-cart">
                      <a href="#" title="Close (Esc)" className="btn-close">×</a>

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
                          <a href="cart.html" className="btn btn-gray btn-block view-cart">View
                            Cart</a>
                          <a href="checkout.html" className="btn btn-dark btn-block">Checkout</a>
                        </div>

                      </div>

                    </div>

                  </div>

                </div>

              </div>
            </div>
          </header>
       </>
    );
};

export default Header;