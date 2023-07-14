import { useEffect, useState } from "react";
import Slider from "react-slick";
import useAllproducts from "../../../../hooks/useAllproducts";
import { Link } from "react-router-dom";

const OffersDay = () => {
    const [data, setData] = useState([])
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: true,
        autoplaySpeed: 300000,
    };

    // eslint-disable-next-line no-unused-vars
    const [allProducts, refetch, isLoading] = useAllproducts();

    useEffect(() => {
        const mostDiscounted = allProducts.sort((a, b) => b.discounts - a.discounts);
        setData(mostDiscounted);
    }, []);

    return (
        <div className=" d-none d-md-block">
            <h2 className="bg-dark-subtle font-monospace fw-bold p-1 ps-2">Hot sales</h2>
            <Slider {...settings}>
                {
                    data.slice(0, 10).map(pd => <div key={pd._id}>
                        <Link to={`/product/${pd?._id}`} className="text-decoration-none">
                            <div className="position-relative">
                                <span className="bg-danger font-italic font-monospace fs-4 position-absolute px-2 py-1 rounded-1 shadow-lg text-bg-danger">{pd?.discounts}% discounts</span>
                                <img src={pd?.image1} alt="" />
                                <h3 className="border-bottom my-4 pb-2 text-center text-warning-emphasis">{pd.name}</h3>
                            </div></Link>
                    </div>)
                }
            </Slider>
        </div>
    );
};

export default OffersDay;
