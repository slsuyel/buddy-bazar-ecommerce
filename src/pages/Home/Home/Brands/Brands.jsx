
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
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            autoplay: true, 
            autoplaySpeed: 2000,
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
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Samsung_Logo.svg/2560px-Samsung_Logo.svg.png"
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
                            src="https://www.vectorlogo.zone/logos/apple/apple-ar21.png"
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
                            src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1200,h=630,fit=crop,f=jpeg/mp80DVrLexi8VNpz/illian-logotipo-AoPQgrqOlas1ENyv.png?no-cache=1683763200020"
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
                            src="https://www.aarong.com/media/wysiwyg/MARC-Logo.png"
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