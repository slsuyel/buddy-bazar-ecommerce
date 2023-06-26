import { Link } from 'react-router-dom';

const StickyNavbar = () => {
    return (
        <div className="sticky-navbar">
            <div className="sticky-info">
                <Link to="">

                    <img src="https://www.svgrepo.com/show/507339/home-alt.svg" alt="" width={'20px'} />
                    Home
                </Link>
            </div>
            <div className="sticky-info">
                <Link to="demo1-shop.html" className="">
                    <img src="https://www.svgrepo.com/show/497852/category.svg" alt="" width={'20px'} />
                    Categories
                </Link>
            </div>
            <div className="sticky-info">
                <Link to="wishlist.html" className="">
                    <img src="https://www.svgrepo.com/show/512449/love-1488.svg" alt="" width={'20px'} />
                    Wishlist
                </Link>
            </div>
            <div className="sticky-info">
                <Link to="login.html" className="">
                    <img src="https://www.svgrepo.com/show/514279/user-circle.svg" alt="" width={'20px'} />
                    Account
                </Link>
            </div>
            <div className="sticky-info">
                <Link to="cart.html" className="">
                    <img src="https://www.svgrepo.com/show/509786/cart.svg" alt="" width={'20px'} />
                    Cart
                </Link>
            </div>
        </div>
    );
};

export default StickyNavbar;
