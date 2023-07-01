import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
const MegaMenu = () => {

  return (
    <div>
      <ul className="" style={{ fontSize: '13px', color: '#757575', fontFamily: 'Roboto-Regular' }}>

        <li className="mb-2 nav-item">
          <Link to="/categories/Electronics" className="align-items-center d-flex  justify-content-between nav-link pe-2"  >
            <span className="mr-2">Electronics</span>
            <i className="border fa-arrow-right fa-solid fs-4 p-1 rounded-4"></i>
          </Link>
        </li>
        <li className="mb-2 nav-item">
          <Link to="/categories/Fashion" className="align-items-center d-flex justify-content-between nav-link pe-2">
            <span className="mr-2">Fashion</span>
            <i className="border fa-arrow-right fa-solid fs-4 p-1 rounded-4"></i>
          </Link>
        </li>
        <li className="mb-2 nav-item">
          <Link to="/categories/Home%20&%20Garden" className="align-items-center d-flex justify-content-between nav-link pe-2">
            <span className="mr-2">Home & Garden"</span>
            <i className="border fa-arrow-right fa-solid fs-4 p-1 rounded-4"></i>
          </Link>
        </li>
        <li className="mb-2 nav-item">
          <Link to="/categories/Sports & Outdoors" className="align-items-center d-flex justify-content-between nav-link pe-2">
            <span className="mr-2">Sports & Outdoors</span>
            <i className="border fa-arrow-right fa-solid fs-4 p-1 rounded-4"></i>
          </Link>
        </li>




      </ul>
    </div>
  );
};

export default MegaMenu;

