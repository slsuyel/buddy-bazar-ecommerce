import { Link } from 'react-router-dom';

import Slider from './Slider';
import Featured from '../../Featured/Featured';
import Brands from './Brands/Brands';
import ProductsSections from '../ProductsSections/ProductsSections';
import FeatureBoxes from '../FeatureBoxes/FeatureBoxes';

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
                <div className="col-lg-9">

                  <Slider />

                  <Featured />
                  <Brands />
                  <ProductsSections />
                  <FeatureBoxes />
                </div>

                <div className="sidebar-overlay " />
                <div className="sidebar-toggle custom-sidebar-toggle">
                  <i className="fas fa-sliders-h" />
                </div>
                <aside className="sidebar-home col-lg-3 order-lg-first mobile-sidebar ">
                  <div className="side-menu-wrapper text-uppercase mb-2 d-none d-lg-block">
                    <h2 className="side-menu-title bg-gray ls-n-25">
                      Browse Categories
                    </h2>
                    <nav className="side-nav">
                      <ul className="menu menu-vertical sf-arrows">
                        <li className="active">
                          <a href="/">
                            <i className="fa-solid fa-house"></i>
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="demo1-shop.html" className="sf-with-ul">
                            <svg className='me-2' xmlns="http://www.w3.org/2000/svg" width="20px" height="" viewBox="0 0 1024 1024"><path fill="currentColor" d="M1021.06 839.968L833.798 493.664c19.104-43.36 29.792-91.28 29.792-141.696C863.59 157.664 706.07.16 511.782.16c-194.336 0-351.84 157.52-351.84 351.808c0 51.632 11.216 100.624 31.184 144.784L3.03 839.808c-6.065 11.024-5.057 24.624 2.527 34.688c7.6 10.033 20.432 14.752 32.687 11.873l160.624-36.848l54.976 153.12c4.288 11.904 15.152 20.16 27.744 21.088c.817.064 1.6.096 2.368.096a32.002 32.002 0 0 0 28.192-16.88L475.844 701.97a355.152 355.152 0 0 0 35.92 1.808c11.12 0 22.095-.576 32.943-1.6l167.248 305.008a31.984 31.984 0 0 0 30.56 16.527c12.56-1.008 23.376-9.248 27.631-21.088l54.976-153.12l160.624 36.848c12.32 2.975 25.024-1.809 32.624-11.809c7.632-9.984 8.656-23.52 2.688-34.576zm-731.282 73.376L249.52 801.183c-5.504-15.248-21.471-24.128-37.28-20.368l-118.8 27.248l135.41-246.976c44.592 60.24 107.952 105.68 181.44 127.793zm-65.553-561.377c0-158.544 129.009-287.536 287.568-287.536c158.544 0 287.536 128.992 287.536 287.536S670.337 639.535 511.793 639.535c-158.576 0-287.568-129.024-287.568-287.568zm587.52 428.847c-15.872-3.744-31.776 5.12-37.28 20.367l-40.529 112.976l-123.152-224.56c75.44-22.096 140.337-68.735 185.505-130.735L931.137 808.19z" /></svg>
                            Categories
                          </a>
                          <div className="megamenu megamenu-fixed-width megamenu-3cols">
                            <div className="row">
                              <div className="col-lg-4">
                                <a href="#" className="nolink pl-0">
                                  VARIATION 1
                                </a>
                                <ul className="submenu">
                                  <li>
                                    <a href="category.html">Fullwidth Banner</a>
                                  </li>
                                  <li>
                                    <a href="category-banner-boxed-slider.html">
                                      Boxed Slider Banner
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-banner-boxed-image.html">
                                      Boxed Image Banner
                                    </a>
                                  </li>
                                  <li>
                                    <a href="demo1-shop.html">Left Sidebar</a>
                                  </li>
                                  <li>
                                    <a href="category-sidebar-right.html">
                                      Right Sidebar
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-off-canvas.html">
                                      Off Canvas Filter
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-horizontal-filter1.html">
                                      Horizontal Filter1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-horizontal-filter2.html">
                                      Horizontal Filter2
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4">
                                <a href="#" className="nolink pl-0">
                                  VARIATION 2
                                </a>
                                <ul className="submenu">
                                  <li>
                                    <a href="category-list.html">List Types</a>
                                  </li>
                                  <li>
                                    <a href="category-infinite-scroll.html">
                                      Ajax Infinite Scroll
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category.html">3 Columns Products</a>
                                  </li>
                                  <li>
                                    <a href="category-4col.html">
                                      4 Columns Products
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-5col.html">
                                      5 Columns Products
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-6col.html">
                                      6 Columns Products
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-7col.html">
                                      7 Columns Products
                                    </a>
                                  </li>
                                  <li>
                                    <a href="category-8col.html">
                                      8 Columns Products
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-lg-4 p-0">
                                <div className="menu-banner">
                                  <figure>
                                    <img
                                      src="assets/images/menu-banner.jpg"
                                      width={192}
                                      height={313}
                                      alt="Menu banner"
                                    />
                                  </figure>
                                  <div className="banner-content">
                                    <h4>
                                      <span className="">UP TO</span>
                                      <br />
                                      <b className="">50%</b>
                                      <i>OFF</i>
                                    </h4>
                                    <a
                                      href="demo1-shop.html"
                                      className="btn btn-sm btn-dark"
                                    >
                                      SHOP NOW
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                        </li>
                        <li>
                          <a href="demo1-product.html" className="sf-with-ul">
                            <i className="fa-solid fa-cart-shopping"></i>
                            Products
                          </a>
                          <div className="megamenu megamenu-fixed-width">
                            <div className="row">
                              <div className="col-lg-4">
                                <a href="#" className="nolink pl-0">
                                  PRODUCT PAGES
                                </a>
                                <ul className="submenu">
                                  <li>
                                    <a href="product.html">SIMPLE PRODUCT</a>
                                  </li>
                                  <li>
                                    <a href="product-variable.html">
                                      VARIABLE PRODUCT
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product.html">SALE PRODUCT</a>
                                  </li>
                                  <li>
                                    <a href="product.html">FEATURED &amp; ON SALE</a>
                                  </li>
                                  <li>
                                    <a href="product-custom-tab.html">
                                      WITH CUSTOM TAB
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-sidebar-left.html">
                                      WITH LEFT SIDEBAR
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-sidebar-right.html">
                                      WITH RIGHT SIDEBAR
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-addcart-sticky.html">
                                      ADD CART STICKY
                                    </a>
                                  </li>
                                </ul>
                              </div>

                              <div className="col-lg-4">
                                <a href="#" className="nolink pl-0">
                                  PRODUCT LAYOUTS
                                </a>
                                <ul className="submenu">
                                  <li>
                                    <a href="product-extended-layout.html">
                                      EXTENDED LAYOUT
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-grid-layout.html">GRID IMAGE</a>
                                  </li>
                                  <li>
                                    <a href="product-full-width.html">
                                      FULL WIDTH LAYOUT
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-sticky-info.html">STICKY INFO</a>
                                  </li>
                                  <li>
                                    <a href="product-sticky-both.html">
                                      LEFT &amp; RIGHT STICKY
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-transparent-image.html">
                                      TRANSPARENT IMAGE
                                    </a>
                                  </li>
                                  <li>
                                    <a href="product-center-vertical.html">
                                      CENTER VERTICAL
                                    </a>
                                  </li>
                                  <li>
                                    <a href="#">BUILD YOUR OWN</a>
                                  </li>
                                </ul>
                              </div>

                              <div className="col-lg-4 p-0">
                                <div className="menu-banner menu-banner-2">
                                  <figure>
                                    <img
                                      src="https://www.portotheme.com/wordpress/porto/shop1-soft/wp-content/uploads/sites/127/2022/07/wpb_soft_shop1_home_ads1.jpg"
                                      alt="Menu banner"
                                      className="product-promo"
                                    />
                                  </figure>
                                  <i>OFF</i>
                                  <div className="banner-content">
                                    <h4>
                                      <span className="">UP TO</span>
                                      <br />
                                      <b className="">50%</b>
                                    </h4>
                                  </div>
                                  <a
                                    href="demo1-shop.html"
                                    className="btn btn-sm btn-dark"
                                  >
                                    SHOP NOW
                                  </a>
                                </div>
                              </div>

                            </div>

                          </div>

                        </li>
                        <li>
                          <Link className="sf-with-ul">
                            <i className="fa-solid fa-user" />
                            Profile
                          </Link>
                          <ul>
                            <li>
                              <a href="wishlist.html">Wishlist</a>
                            </li>
                            <li>
                              <a href="cart.html">Shopping Cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="dashboard.html">Dashboard</a>
                            </li>
                            <li>
                              <a href="demo1-about.html">About Us</a>
                            </li>
                            <li>
                              <a href="#">Blog</a>
                              <ul>
                                <li>
                                  <a href="blog.html">Blog</a>
                                </li>
                                <li>
                                  <a href="single.html">Blog Post</a>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <a href="demo1-contact.html">Contact Us</a>
                            </li>
                            <li>
                              <a href="login.html">Login</a>
                            </li>
                            <li>
                              <a href="forgot-password.html">Forgot Password</a>
                            </li>
                          </ul>
                        </li>

                      </ul>
                    </nav>
                  </div>

                  <div className="widget widget-banners px-3 pb-3 text-center">
                    <div className="owl-carousel owl-theme dots-small">
                      <div className="banner d-flex flex-column align-items-center">
                        <h3 className="badge-sale bg-primary d-flex flex-column align-items-center justify-content-center text-uppercase">
                          <em>Sale</em>Many Item
                        </h3>
                        <h4 className="sale-text text-uppercase">
                          <small>UP TO</small>50<sup>%</sup>
                          <sub>off</sub>
                        </h4>
                        <p>
                          Bags, Clothing, T-Shirts, Shoes, Watches and much more...
                        </p>
                        <a href="demo1-shop.html" className="btn btn-dark btn-md">
                          View Sale
                        </a>
                      </div>

                      <div className="banner banner4">
                        <figure>
                          <img
                            src="assets/images/demoes/demo1/banners/banner-7.jpg"
                            alt="banner"
                          />
                        </figure>
                        <div className="banner-layer">
                          <div className="coupon-sale-content">
                            <h4>DRONE + CAMERAS</h4>
                            <h5 className="coupon-sale-text text-gray ls-n-10 p-0 font1">
                              <i>UP TO</i>
                              <b className="text-white bg-dark font1">$100</b> OFF
                            </h5>
                            <p className="ls-0">Top Brands and Models!</p>
                            <a
                              href="demo1-shop.html"
                              className="btn btn-inline-block btn-dark btn-black ls-0"
                            >
                              VIEW SALE
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="banner banner5">
                        <h4>HEADPHONES SALE</h4>
                        <figure className="m-b-3">
                          <img
                            src="assets/images/demoes/demo1/banners/banner-8.jpg"
                            alt="banner"
                          />
                        </figure>
                        <div className="banner-layer">
                          <div className="coupon-sale-content">
                            <h5 className="coupon-sale-text ls-n-10 p-0 font1">
                              <i>UP TO</i>
                              <b className="text-white bg-secondary font1">50%</b> OFF
                            </h5>
                            <a
                              href="demo1-shop.html"
                              className="btn btn-inline-block btn-dark btn-black ls-0"
                            >
                              VIEW SALE
                            </a>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>


                  <div className="widget widget-testimonials">
                    <div className="owl-carousel owl-theme dots-left dots-small">
                      <div className="testimonial">
                        <div className="testimonial-owner">
                          <figure>
                            <img
                              src="https://en.wikialpha.org/mediawiki/images/9/91/Suyel_Haque.jpg"
                              alt="client"
                            />
                          </figure>
                          <div>
                            <h4 className="testimonial-title">john Smith</h4>
                            <span>CEO &amp; Founder</span>
                          </div>
                        </div>

                        <blockquote className="ml-4 pr-0">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur elitad adipiscing
                            Cras non placerat mi.
                          </p>
                        </blockquote>
                      </div>

                      <div className="testimonial">
                        <div className="testimonial-owner">
                          <figure>
                            <img
                              src="https://en.wikialpha.org/mediawiki/images/9/91/Suyel_Haque.jpg"
                              alt="client"
                            />
                          </figure>
                          <div>
                            <h4 className="testimonial-title">Dae Smith</h4>
                            <span>CEO &amp; Founder</span>
                          </div>
                        </div>

                        <blockquote className="ml-4 pr-0">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur elitad adipiscing
                            Cras non placerat mi.
                          </p>
                        </blockquote>
                      </div>

                      <div className="testimonial">
                        <div className="testimonial-owner">
                          <figure>
                            <img
                              src="https://en.wikialpha.org/mediawiki/images/9/91/Suyel_Haque.jpg"
                              alt="client"
                            />
                          </figure>
                          <div>
                            <h4 className="testimonial-title">John Doe</h4>
                            <span>CEO &amp; Founder</span>
                          </div>
                        </div>

                        <blockquote className="ml-4 pr-0">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur elitad adipiscing
                            Cras non placerat mi.
                          </p>
                        </blockquote>
                      </div>

                    </div>

                  </div>

                  <div className="widget widget-posts post-date-in-media media-with-zoom mb-0 mb-lg-2 pb-lg-2">
                    <div
                      className="owl-carousel owl-theme dots-left dots-m-0 dots-small"
                      data-owl-options="
          { 'margin' : 20,
            'loop': false }"
                    >
                      <article className="post">
                        <div className="post-media">
                          <a href="single.html">
                            <img
                              src="assets/images/blog/home/post-1.jpg"
                              data-zoom-image="assets/images/blog/home/post-1.jpg"
                              width={280}
                              height={209}
                              alt="Post"
                            />
                          </a>
                          <div className="post-date">
                            <span className="day">29</span>
                            <span className="month">Jun</span>
                          </div>

                          <span className="prod-full-screen">
                            <i className="fas fa-search" />
                          </span>
                        </div>

                        <div className="post-body">
                          <h2 className="post-title">
                            <a href="single.html">Post Format Standard</a>
                          </h2>
                          <div className="post-content">
                            <p>
                              Leap into electronic typesetting, remaining essentially
                              unchanged. It was popularised in the 1960s with...{" "}
                            </p>
                            <a href="single.html" className="read-more">
                              read more <i className="icon-right-open" />
                            </a>
                          </div>

                        </div>

                      </article>
                      <article className="post">
                        <div className="post-media">
                          <a href="single.html">
                            <img
                              src="assets/images/blog/home/post-2.jpg"
                              data-zoom-image="assets/images/blog/home/post-2.jpg"
                              width={280}
                              height={209}
                              alt="Post"
                            />
                          </a>
                          <div className="post-date">
                            <span className="day">29</span>
                            <span className="month">Jun</span>
                          </div>

                          <span className="prod-full-screen">
                            <i className="fas fa-search" />
                          </span>
                        </div>

                        <div className="post-body">
                          <h2 className="post-title">
                            <a href="single.html">Fashion Trends</a>
                          </h2>
                          <div className="post-content">
                            <p>
                              Leap into electronic typesetting, remaining essentially
                              unchanged. It was popularised in the 1960s with...{" "}
                            </p>
                            <a href="single.html" className="read-more">
                              read more <i className="icon-right-open" />
                            </a>
                          </div>

                        </div>

                      </article>
                      <article className="post">
                        <div className="post-media">
                          <a href="single.html">
                            <img
                              src="assets/images/blog/home/post-3.jpg"
                              data-zoom-image="assets/images/blog/home/post-3.jpg"
                              width={280}
                              height={209}
                              alt="Post"
                            />
                          </a>
                          <div className="post-date">
                            <span className="day">29</span>
                            <span className="month">Jun</span>
                          </div>

                          <span className="prod-full-screen">
                            <i className="fas fa-search" />
                          </span>
                        </div>

                        <div className="post-body">
                          <h2 className="post-title">
                            <a href="single.html">Post Format Video</a>
                          </h2>
                          <div className="post-content">
                            <p>
                              Leap into electronic typesetting, remaining essentially
                              unchanged. It was popularised in the 1960s with...{" "}
                            </p>
                            <a href="single.html" className="read-more">
                              read more <i className="icon-right-open" />
                            </a>
                          </div>

                        </div>

                      </article>
                    </div>

                  </div>

                </aside>

              </div>

            </div>

          </main>



        </div>

        <div className="mobile-menu-overlay" />

        <div className="mobile-menu-container">
          <div className="mobile-menu-wrapper">
            <span className="mobile-menu-close">
              <i className="fa fa-times" />
            </span>
            <nav className="mobile-nav">
              <ul className="mobile-menu menu-with-icon">
                <li>
                  <a href="demo1.html">
                    <i className="icon-home" />
                    Home
                  </a>
                </li>
                <li>
                  <a href="demo1-shop.html" className="sf-with-ul">
                    <i className="sicon-badge" />
                    Categories
                  </a>
                  <ul>
                    <li>
                      <a href="category.html">Full Width Banner</a>
                    </li>
                    <li>
                      <a href="category-banner-boxed-slider.html">
                        Boxed Slider Banner
                      </a>
                    </li>
                    <li>
                      <a href="category-banner-boxed-image.html">
                        Boxed Image Banner
                      </a>
                    </li>
                    <li>
                      <a href="category-sidebar-left.html">Left Sidebar</a>
                    </li>
                    <li>
                      <a href="category-sidebar-right.html">Right Sidebar</a>
                    </li>
                    <li>
                      <a href="category-off-canvas.html">Off Canvas Filter</a>
                    </li>
                    <li>
                      <a href="category-horizontal-filter1.html">
                        Horizontal Filter 1
                      </a>
                    </li>
                    <li>
                      <a href="category-horizontal-filter2.html">
                        Horizontal Filter 2
                      </a>
                    </li>
                    <li>
                      <a href="#">List Types</a>
                    </li>
                    <li>
                      <a href="category-infinite-scroll.html">
                        Ajax Infinite Scroll<span className="tip tip-new">New</span>
                      </a>
                    </li>
                    <li>
                      <a href="category.html">3 Columns Products</a>
                    </li>
                    <li>
                      <a href="category-4col.html">4 Columns Products</a>
                    </li>
                    <li>
                      <a href="category-5col.html">5 Columns Products</a>
                    </li>
                    <li>
                      <a href="category-6col.html">6 Columns Products</a>
                    </li>
                    <li>
                      <a href="category-7col.html">7 Columns Products</a>
                    </li>
                    <li>
                      <a href="category-8col.html">8 Columns Products</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="demo1-product.html" className="sf-with-ul">
                    <i className="sicon-basket" />
                    Products
                  </a>
                  <ul>
                    <li>
                      <a href="#" className="nolink">
                        PRODUCT PAGES
                      </a>
                      <ul>
                        <li>
                          <a href="product.html">SIMPLE PRODUCT</a>
                        </li>
                        <li>
                          <a href="product-variable.html">VARIABLE PRODUCT</a>
                        </li>
                        <li>
                          <a href="product.html">SALE PRODUCT</a>
                        </li>
                        <li>
                          <a href="product.html">FEATURED &amp; ON SALE</a>
                        </li>
                        <li>
                          <a href="product-sticky-info.html">WIDTH CUSTOM TAB</a>
                        </li>
                        <li>
                          <a href="product-sidebar-left.html">WITH LEFT SIDEBAR</a>
                        </li>
                        <li>
                          <a href="product-sidebar-right.html">WITH RIGHT SIDEBAR</a>
                        </li>
                        <li>
                          <a href="product-addcart-sticky.html">ADD CART STICKY</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#" className="nolink">
                        PRODUCT LAYOUTS
                      </a>
                      <ul>
                        <li>
                          <a href="product-extended-layout.html">EXTENDED LAYOUT</a>
                        </li>
                        <li>
                          <a href="product-grid-layout.html">GRID IMAGE</a>
                        </li>
                        <li>
                          <a href="product-full-width.html">FULL WIDTH LAYOUT</a>
                        </li>
                        <li>
                          <a href="product-sticky-info.html">STICKY INFO</a>
                        </li>
                        <li>
                          <a href="product-sticky-both.html">
                            LEFT &amp; RIGHT STICKY
                          </a>
                        </li>
                        <li>
                          <a href="product-transparent-image.html">
                            TRANSPARENT IMAGE
                          </a>
                        </li>
                        <li>
                          <a href="product-center-vertical.html">CENTER VERTICAL</a>
                        </li>
                        <li>
                          <a href="#">BUILD YOUR OWN</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="sf-with-ul">
                    <i className="sicon-envelope" />
                    Pages
                  </a>
                  <ul>
                    <li>
                      <a href="wishlist.html">Wishlist</a>
                    </li>
                    <li>
                      <a href="cart.html">Shopping Cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">Checkout</a>
                    </li>
                    <li>
                      <a href="dashboard.html">Dashboard</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="forgot-password.html">Forgot Password</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="blog.html">
                    <i className="sicon-book-open" />
                    Blog
                  </a>
                </li>
                <li>
                  <a href="demo1-about.html">
                    <i className="sicon-users" />
                    About Us
                  </a>
                </li>
              </ul>
              <ul className="mobile-menu menu-with-icon mt-2 mb-2">
                <li className="border-0">
                  <a href="#" target="_blank">
                    <i className="sicon-star" />
                    Buy Porto!<span className="tip tip-hot">Hot</span>
                  </a>
                </li>
              </ul>
              <ul className="mobile-menu">
                <li>
                  <a href="login.html">My Account</a>
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
                  <a href="login.html" className="login-link">
                    Log In
                  </a>
                </li>
              </ul>
            </nav>

            <form className="search-wrapper mb-2" action="#">
              <input
                type="text"
                className="form-control mb-0"
                placeholder="Search..."
                required=""
              />
              <button
                className="btn icon-search text-white bg-transparent p-0"
                type="submit"
              />
            </form>
            <div className="social-icons">
              <a
                href="#"
                className="social-icon social-facebook icon-facebook"
                target="_blank"
              ></a>
              <a
                href="#"
                className="social-icon social-twitter icon-twitter"
                target="_blank"
              ></a>
              <a
                href="#"
                className="social-icon social-instagram icon-instagram"
                target="_blank"
              ></a>
            </div>
          </div>

        </div>

        <div className="sticky-navbar">
          <div className="sticky-info">
            <a href="demo1.html">
              <i className="icon-home" />
              Home
            </a>
          </div>
          <div className="sticky-info">
            <a href="demo1-shop.html" className="">
              <i className="icon-bars" />
              Categories
            </a>
          </div>
          <div className="sticky-info">
            <a href="wishlist.html" className="">
              <i className="icon-wishlist-2" />
              Wishlist
            </a>
          </div>
          <div className="sticky-info">
            <a href="login.html" className="">
              <i className="icon-user-2" />
              Account
            </a>
          </div>
          <div className="sticky-info">
            <a href="cart.html" className="">
              <i className="icon-shopping-cart position-relative">
                <span className="cart-count badge-circle">3</span>
              </i>
              Cart
            </a>
          </div>
        </div>

      </>

    </div>
  );
};

export default Home;