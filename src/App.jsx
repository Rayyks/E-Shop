import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="MainDiv" id="HOME">
        <header class="header trans_300">
          <div class="main_nav_container">
            <div class="container">
              <div class="row">
                <div class="col-lg-12 text-right">
                  <div class="logo_container">
                    <a href="#">
                      MM<span>STORE</span>
                    </a>
                  </div>
                  <switch class="navbar">
                    <ul class="navbar_menu">
                      <li>
                        <a href="#HOME">home</a>
                      </li>
                      <li>
                        <a href="#SHOP">shop</a>
                      </li>
                      <li>
                        <a href="#CONTACT">contact</a>
                      </li>
                    </ul>
                    <div class="hamburger_container">
                      <i class="fa fa-bars" aria-hidden="true"></i>
                    </div>
                  </switch>
                </div>
              </div>
            </div>
          </div>
        </header>
        {/* mobile device=================================================== */}

        <div class="fs_menu_overlay"></div>
        <div class="hamburger_menu">
          <div class="hamburger_close">
            <i class="fa fa-times" aria-hidden="true"></i>
          </div>
          <div class="hamburger_menu_content text-right">
            <ul class="menu_top_nav">
              <li class="menu_item">
                <a href="#">home</a>
              </li>
              <li class="menu_item">
                <a href="#SHOP">shop</a>
              </li>
              <li class="menu_item">
                <a href="#CONTACT">contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="main_slider"
          style={{ backgroundImage: "url(assets/images/wp2.png)" }}
        >
          <div class="container fill_height">
            <div class="row align-items-center fill_height">
              <div class="col">
                <div class="main_slider_content">
                  <h6>Spring / Summer Collection 2021</h6>
                  <h1>Get up to 30% Off New Arrivals</h1>
                  <div class="red_button shop_now_button">
                    <a href="#SHOP">shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="banner">
          <div class="container">
            <div class="row"></div>
          </div>
        </div>

        <div class="new_arrivals" id="SHOP">
          <div class="container pt-5">
            <div class="row">
              <div class="col-6">
                <h3 class="mb-3">FASHION </h3>
              </div>
              <div class="col-6 text-right">
                <a
                  class="btn btn-primary mb-3 mr-1 arrow-kiri"
                  href="#carouselExampleIndicators1"
                  role="button"
                  data-slide="prev"
                >
                  <i class="fa fa-arrow-left"></i>
                </a>
                <a
                  class="btn btn-primary mb-3 arrow-kanan"
                  href="#carouselExampleIndicators1"
                  role="button"
                  data-slide="next"
                >
                  <i class="fa fa-arrow-right"></i>
                </a>
              </div>
              <div class="col-sm">
                <div
                  id="carouselExampleIndicators1"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="row">
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="assets/images/product_1.png"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <button className="btn btn-primary">
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="assets/images/product_2.png"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <button className="btn btn-primary">
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="assets/images/product_3.png"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <button className="btn btn-primary">
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="assets/images/product_4.png"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <button className="btn btn-primary">
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="assets/images/product_5.png"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <button className="btn btn-primary">
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="assets/images/product_6.png"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <button className="btn btn-primary">
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="assets/images/product_7.png"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <button className="btn btn-primary">
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="assets/images/product_8.png"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <button className="btn btn-primary">
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="assets/images/product_9.png"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <button className="btn btn-primary">
                                Buy Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MAKANAANNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN */}
          <div class="container pt-5">
            <div class="row">
              <div class="col-6">
                <h3 class="mb-3">MAKANAN </h3>
              </div>
              <div class="col-6 text-right">
                <a
                  class="btn btn-primary mb-3 mr-1"
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="prev"
                >
                  <i class="fa fa-arrow-left"></i>
                </a>
                <a
                  class="btn btn-primary mb-3 "
                  href="#carouselExampleIndicators2"
                  role="button"
                  data-slide="next"
                >
                  <i class="fa fa-arrow-right"></i>
                </a>
              </div>
              <div class="col-sm">
                <div
                  id="carouselExampleIndicators2"
                  class="carousel slide"
                  data-ride="carousel"
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <div class="row">
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532781914607-2031eca2f00d?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=7c625ea379640da3ef2e24f20df7ce8d"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <button className="btn btn-primary">
                                Order Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1517760444937-f6397edcbbcd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=42b2d9ae6feb9c4ff98b9133addfb698"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <button className="btn btn-primary">
                                Order Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3d2e8a2039c06dd26db977fe6ac6186a"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <button className="btn btn-primary">
                                Order Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532771098148-525cefe10c23?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=3f317c1f7a16116dec454fbc267dd8e4"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <button className="btn btn-primary">
                                Order Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532715088550-62f09305f765?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ebadb044b374504ef8e81bdec4d0e840"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <button className="btn btn-primary">
                                Order Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=0754ab085804ae8a3b562548e6b4aa2e"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <button className="btn btn-primary">
                                Order Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div class="row">
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=ee8417f0ea2a50d53a12665820b54e23"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <button className="btn btn-primary">
                                Order Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532777946373-b6783242f211?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=8ac55cf3a68785643998730839663129"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <button className="btn btn-primary">
                                Order Now
                              </button>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4 mb-3">
                          <div class="card">
                            <img
                              class="img-fluid"
                              alt="100%x280"
                              src="https://images.unsplash.com/photo-1532763303805-529d595877c5?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=1080&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjMyMDc0fQ&amp;s=5ee4fd5d19b40f93eadb21871757eda6"
                            />
                            <div class="card-body">
                              <h4 class="card-title">
                                Special title treatment
                              </h4>
                              <p class="card-text">
                                With supporting text below as a natural lead-in
                                to additional content.
                              </p>
                              <button className="btn btn-primary">
                                Order Now
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="deal_ofthe_week">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-6">
                <div class="deal_ofthe_week_img">
                  <img src="assets/images/deal_ofthe_week.png" alt="" />
                </div>
              </div>
              <div class="col-lg-6 text-right deal_ofthe_week_col">
                <div class="deal_ofthe_week_content d-flex flex-column align-items-center float-right">
                  <div class="section_title">
                    <h2>Deal Of The Week</h2>
                  </div>

                  <div class="red_button deal_ofthe_week_button">
                    <a href="#">shop now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="benefit">
          <div class="container">
            <div class="row benefit_row">
              <div class="col-lg-3 benefit_col">
                <div class="benefit_item d-flex flex-row align-items-center">
                  <div class="benefit_icon">
                    <i class="fa fa-truck" aria-hidden="true"></i>
                  </div>
                  <div class="benefit_content">
                    <h6>free shipping</h6>
                    <p>Suffered Alteration in Some Form</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 benefit_col">
                <div class="benefit_item d-flex flex-row align-items-center">
                  <div class="benefit_icon">
                    <i class="fa fa-money" aria-hidden="true"></i>
                  </div>
                  <div class="benefit_content">
                    <h6>cach on delivery</h6>
                    <p>The Internet Tend To Repeat</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 benefit_col">
                <div class="benefit_item d-flex flex-row align-items-center">
                  <div class="benefit_icon">
                    <i class="fa fa-undo" aria-hidden="true"></i>
                  </div>
                  <div class="benefit_content">
                    <h6>45 days return</h6>
                    <p>Making it Look Like Readable</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 benefit_col">
                <div class="benefit_item d-flex flex-row align-items-center">
                  <div class="benefit_icon">
                    <i class="fa fa-clock-o" aria-hidden="true"></i>
                  </div>
                  <div class="benefit_content">
                    <h6>opening all week</h6>
                    <p>8AM - 09PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div class="blogs">
          <div class="container">
            <div class="row">
              <div class="col text-center">
                <div class="section_title">
                  <h2>Latest Blogs</h2>
                </div>
              </div>
            </div>
            <div class="row blogs_container">
              <div class="col-lg-4 blog_item_col">
                <div class="blog_item">
                  <div
                    class="blog_background"
                    style={{ backgroundImage: "url(assets/images/blog_1.jpg)" }}
                  ></div>
                  <div class="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                    <h4 class="blog_title">
                      Here are the trends I see coming this fall
                    </h4>
                    <span class="blog_meta">by admin | dec 01, 2021</span>
                    <a class="blog_more" href="#">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 blog_item_col">
                <div class="blog_item">
                  <div
                    class="blog_background"
                    style={{ backgroundImage: "url(assets/images/blog_2.jpg)" }}
                  ></div>
                  <div class="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                    <h4 class="blog_title">
                      Here are the trends I see coming this fall
                    </h4>
                    <span class="blog_meta">by admin | dec 01, 2021</span>
                    <a class="blog_more" href="#">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 blog_item_col">
                <div class="blog_item">
                  <div
                    class="blog_background"
                    style={{ backgroundImage: "url(assets/images/blog_3.jpg)" }}
                  ></div>
                  <div class="blog_content d-flex flex-column align-items-center justify-content-center text-center">
                    <h4 class="blog_title">
                      Here are the trends I see coming this fall
                    </h4>
                    <span class="blog_meta">by admin | dec 01, 2021</span>
                    <a class="blog_more" href="#">
                      Read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div class="newsletter" id="CONTACT">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="newsletter_text d-flex flex-column justify-content-center align-items-lg-start align-items-md-center text-center">
                  <h4>Newsletter</h4>
                  <p>
                    Subscribe to our newsletter and get 20% off your first
                    purchase
                  </p>
                </div>
              </div>
              <div class="col-lg-6">
                <form action="post">
                  <div class="newsletter_form d-flex flex-md-row flex-column flex-xs-column align-items-center justify-content-lg-end justify-content-center">
                    <input
                      id="newsletter_email"
                      type="email"
                      placeholder="Your email"
                      required="required"
                      data-error="Valid email is required."
                    />
                    <button
                      id="newsletter_submit"
                      type="submit"
                      class="newsletter_submit_btn trans_300"
                      value="Submit"
                    >
                      subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer class="footer">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="footer_nav_container d-flex flex-sm-row flex-column align-items-center justify-content-lg-start justify-content-center text-center">
                  {/* <ul class="footer_nav">
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Contact us</a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div class="col-lg-6">
                <div class="footer_social d-flex flex-row align-items-center justify-content-lg-end justify-content-center">
                  <ul>
                    <li>
                      <a href="Linking.openURL('whatsapp://send?text=hello&phone=xxxxxxxxxxxxx')">
                        <i class="fa fa-facebook" aria-hidden="true">
                          tes
                        </i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-instagram" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                <div class="footer_nav_container">
                  <div class="cr">
                    ©2021 All Rights Reserverd. Made with{" "}
                    <i class="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                    <a href="#">MM</a>
                    <a href="#">Store</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default App;
