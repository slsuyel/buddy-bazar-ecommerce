import { Link } from "react-router-dom";
import useAllproducts from "../../../hooks/useAllproducts";
/* eslint-disable react/no-unescaped-entities */
const MegaMenu = () => {

  // eslint-disable-next-line no-unused-vars
  const [allProducts, refetch, isLoading] = useAllproducts()
  const allCategory = [...new Set(allProducts.map(item => item.category))];

  return (
    <div>
      <h2 className="bg-dark-subtle font-monospace fw-bold p-1 ps-2">Category</h2>
      <ul className="" style={{ fontSize: '13px', color: '#757575', fontFamily: 'Roboto-Regular' }}>

        {/* <li key={category}>{category}</li> */}
        {allCategory.slice(0, 8).map((category, index) => (
          <li className="mb-2 nav-item" key={index}>
            <Link to={`/categories/${category}`} className="align-items-center d-flex  justify-content-between nav-link pe-2"  >
              <span className="mr-2">{category}</span>
              <i className="border fa-arrow-right fa-solid fs-4 p-1 rounded-4"></i>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MegaMenu;

