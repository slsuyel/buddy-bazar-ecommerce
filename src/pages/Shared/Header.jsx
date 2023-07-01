import { Link } from "react-router-dom";
import CartSideBar from "../Product/CartSideBar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProviders";
import logo from '../../assets/TechTopia.png'
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
                Welcome To TechTopia!
              </p>
              <div className="header-dropdown dropdown-expanded mr-3">
                <a href="#">Links</a>
                <div className="header-menu">


                  <ul>
                    <li>
                      <Link to="/dashboard" className="text-decoration-none">My Account</Link>
                    </li>
                    <li>
                      <Link to="/demo1-contact.html" className="text-decoration-none">Contact Us</Link>
                    </li>
                    <li>
                      <Link to="/wishlist" className="text-decoration-none">My Wishlist</Link>
                    </li>
                  
                    <li>
                      <Link to="/cart" className="text-decoration-none">Cart</Link>
                    </li>
                    <li>
                      {!user ? (
                        <Link to="/login" className="text-decoration-none">Log In</Link>
                      ) : (
                        <Link onClick={logoutBtn} className="text-decoration-none">Log Out</Link>
                      )}
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
              {/* Mobile toggle menu is here */}
              <div className="dropdown d-lg-none">
                <button
                  className="btn dropdown-toggle"
                  type="button"
                  id="mobileToggleMenu"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i className="fa-bars fa-solid mb-3 me-1"></i>
                </button>
                <div className="dropdown-menu fs-2" aria-labelledby="mobileToggleMenu">
                  <Link className="dropdown-item" to="/">Home</Link>
                  <Link className="dropdown-item" to="/products">Products</Link>
                  <Link className="dropdown-item" to="/dashboard">Dashboard</Link>
                  <Link className="dropdown-item" to="/contact">Contact</Link>

                  <div className="border-top d-flex justify-content-around my-3 pt-3">
                    <i className="btn fs-1 fab fa-facebook" style={{ color: "#3b5998" }}></i>
                    <i className="btn fs-1 fab fa-twitter" style={{ color: "#00acee" }}></i>
                    <i className="btn fs-1 fab fa-instagram" style={{ color: "#E4405F" }}></i>
                  </div>


                </div>
              </div>
              <Link to="/" className="logo">
                <img src={logo} width="121" height="44" alt="Porto Logo" />
              </Link>




            </div>


            <div className="header-right w-lg-max pl-2">
              <div className="header-search header-icon header-search-inline header-search-category w-lg-max">
                <a href="#" className="search-toggle" role="button"><i className="icon-search-3"></i></a>
                <form action="#" method="get">
                  <div className="header-search-wrapper">
                    <input type="search" className="form-control" name="q" id="q" placeholder="Search..." required="" />
                    
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