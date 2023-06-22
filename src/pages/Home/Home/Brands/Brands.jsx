
// const Brands = () => {
//     return (

//         <div className="">
//             <img
//                 src="https://www.portotheme.com/wordpress/porto/shop1-soft/wp-content/uploads/sites/127/2020/02/new_brand4.png"
//                 width={140}
//                 height={60}
//                 alt="brand"
//             />
//             <img
//                 src="https://www.portotheme.com/wordpress/porto/shop1-soft/wp-content/uploads/sites/127/2020/02/new_brand4.png"
//                 width={140}
//                 height={60}
//                 alt="brand"
//             />
//             <img
//                 src="https://www.portotheme.com/wordpress/porto/shop1-soft/wp-content/uploads/sites/127/2020/02/new_brand4.png"
//                 width={140}
//                 height={60}
//                 alt="brand"
//             />
//             <img
//                 src="https://www.portotheme.com/wordpress/porto/shop1-soft/wp-content/uploads/sites/127/2020/02/new_brand4.png"
//                 width={140}
//                 height={60}
//                 alt="brand"
//             />
//             <img
//                 src="https://www.portotheme.com/wordpress/porto/shop1-soft/wp-content/uploads/sites/127/2020/02/new_brand4.png"
//                 width={140}
//                 height={60}
//                 alt="brand"
//             />
//             <img
//                 src="https://www.portotheme.com/wordpress/porto/shop1-soft/wp-content/uploads/sites/127/2020/02/new_brand4.png"
//                 width={140}
//                 height={60}
//                 alt="brand"
//             />
//         </div>

//     );
// };

// export default Brands;

import { Component } from "react";
import Slider from "react-slick";

export default class Brands extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="border-bottom border-top my-3 py-5">
                <Slider {...settings}>
                    <div>
                        <img
                            src="https://www.portotheme.com/wordpress/porto/shop1-soft/wp-content/uploads/sites/127/2020/02/new_brand4.png"
                            width={140}
                            height={60}
                            alt="brand"
                        />
                    </div>
                    <div>
                        <img
                            src="https://www.portotheme.com/wordpress/porto/shop1-soft/wp-content/uploads/sites/127/2020/02/new_brand4.png"
                            width={140}
                            height={60}
                            alt="brand"
                        />
                    </div>
                    <div>
                        <img
                            src="https://www.portotheme.com/wordpress/porto/shop1-soft/wp-content/uploads/sites/127/2020/02/new_brand4.png"
                            width={140}
                            height={60}
                            alt="brand"
                        />
                    </div>
                    <div>
                        <img
                            src="https://www.portotheme.com/wordpress/porto/shop1-soft/wp-content/uploads/sites/127/2020/02/new_brand4.png"
                            width={140}
                            height={60}
                            alt="brand"
                        />
                    </div>
                    <div>
                        <img
                            src="https://www.portotheme.com/wordpress/porto/shop1-soft/wp-content/uploads/sites/127/2020/02/new_brand4.png"
                            width={140}
                            height={60}
                            alt="brand"
                        />
                    </div>
                    <div>
                        <img
                            src="https://www.portotheme.com/wordpress/porto/shop1-soft/wp-content/uploads/sites/127/2020/02/new_brand4.png"
                            width={140}
                            height={60}
                            alt="brand"
                        />
                    </div>
                    <div>
                        <img
                            src="https://www.portotheme.com/wordpress/porto/shop1-soft/wp-content/uploads/sites/127/2020/02/new_brand4.png"
                            width={140}
                            height={60}
                            alt="brand"
                        />
                    </div>
                    <div>
                        <img
                            src="https://www.portotheme.com/wordpress/porto/shop1-soft/wp-content/uploads/sites/127/2020/02/new_brand4.png"
                            width={140}
                            height={60}
                            alt="brand"
                        />
                    </div>
                    <div>
                        <img
                            src="https://www.portotheme.com/wordpress/porto/shop1-soft/wp-content/uploads/sites/127/2020/02/new_brand4.png"
                            width={140}
                            height={60}
                            alt="brand"
                        />
                    </div>

                </Slider>
            </div>
        );
    }
}