import { Link } from "react-router-dom";
import CartSideBar from "../Product/CartSideBar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProviders";

const Header = () => {
  const { logOut, user } = useContext(AuthContext);

  const logoutBtn = () => {
    logOut();
  };



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
                      <Link to="/dashboard">My Account</Link>
                    </li>
                    <li>
                      <a href="demo1-contact.html">Contact Us</a>
                    </li>
                    <li>
                      <a href="">My Wishlist</a>
                    </li>
                    <li>
                      <a href="#">Site Map</a>
                    </li>
                    <li>

                      <Link to='cart'>Cart</Link>
                    </li>
                    <li>

                      {
                        !user ? <Link to='/login' className="">
                          Log In
                        </Link> : <Link onClick={logoutBtn}>
                          Log Out
                        </Link>
                      }


                    </li>
                  </ul>
                </div>

              </div>
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
              <Link to="/" className="logo">
                <img src="https://www.portotheme.com/wordpress/porto/shop1-soft/wp-content/uploads/sites/127/2022/08/Logo.png" width="111" height="44" alt="Porto Logo" />
              </Link>


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
                    <button className="bg-white border-0 fa-magnifying-glass fa-solid fs-3" ></button>
                  </div>

                </form>
              </div>


              <div className="header-contact d-none d-lg-flex align-items-center pr-xl-5 mr-5 mr-xl-3 ml-5">
                <i className="fa-solid fa-phone-volume"></i>
                <h6 className="pt-1 line-height-1">Call us now<a href="tel:#" className="d-block text-dark ls-10 pt-1">+123 5678 890</a></h6>
              </div>
              <Link to='/dashboard' className="header-icon header-icon-user">
                <i className="fa-solid fa-user"></i>
              </Link>

              <Link href="/" className="header-icon">
                <i className="fa-solid fa-heart"></i>
              </Link>

              <CartSideBar />

            </div>

          </div>
        </div>
      </header>
    </>
  );
};

export default Header;