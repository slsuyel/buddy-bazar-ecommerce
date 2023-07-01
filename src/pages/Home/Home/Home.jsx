
import Slider from './Slider';
import Featured from '../../Featured/Featured';
import Brands from './Brands/Brands';
import ProductsSections from '../ProductsSections/ProductsSections';
import FeatureBoxes from '../FeatureBoxes/FeatureBoxes';
import StickyNavbar from '../../Shared/StickyNavbar/StickyNavbar';
import MegaMenu from '../MegaMenu/MegaMenu';
import Shop from '../../Shared/Shop/Shop';
import OffersDay from './OffersDay/OffersDay';

const Home = () => {

  return (
    <div>
      <>
        <div className="page-wrapper">
          <main className="main home">
            <div className="container mb-2">
              <div className="info-boxes-container row row-joined mb-2 font2">
                <div className="info-box info-box-icon-left col-lg-4">
                  <i className="fa-solid fa-truck"></i>
                  <div className="info-box-content">
                    <h4>FREE SHIPPING &amp; RETURN</h4>
                    <p className="text-body">Free shipping on all orders over $99</p>
                  </div>
                </div>

                <div className="info-box info-box-icon-left col-lg-4">
                  <i className="fa-solid fa-sack-dollar"></i>
                  <div className="info-box-content">
                    <h4>MONEY BACK GUARANTEE</h4>
                    <p className="text-body">100% money back guarantee</p>
                  </div>
                </div>
                <div className="info-box info-box-icon-left col-lg-4">
                  <i className="fa-solid fa-headset"></i>
                  <div className="info-box-content">
                    <h4>ONLINE SUPPORT 24/7</h4>
                    <p className="text-body">Lorem ipsum dolor sit amet.</p>
                  </div>
                </div>
              </div>
              <div className="row">

                <div className="col-md-9 order-md-2">

                  <Slider />
                  <Featured />
                  <Brands />
                  <ProductsSections />

                </div>

                <div className='col-md-3 border'>
                   <MegaMenu />
                  <OffersDay />

                </div>

                <div className='col-md-12 order-md-3'>
                  <Shop />
                  <FeatureBoxes />
                </div>
              </div>

            </div>

          </main>



        </div>

        {/* <MobileMenu /> */}

        <StickyNavbar />
      </>

    </div>
  );
};

export default Home;