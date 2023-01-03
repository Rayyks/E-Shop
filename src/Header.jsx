import "jquery/dist/jquery.slim.min.js";
import "popper.js/dist/umd/popper.min.js";
import "bootstrap/dist/js/bootstrap.min.js";
import { Link } from "react-router-dom";
function Header() {
  return (
    <nav
      ClassName="navbar navbar-expand-lg navbar-light bg-white w-100 navigation"
      id="navbar"
    >
      <div ClassName="container">
        <Link ClassName="navbar-brand font-weight-bold" to={{ pathname: "/" }}>
          E-Shop
        </Link>
        <button
          ClassName="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#main-navbar"
          aria-controls="main-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span ClassName="navbar-toggler-icon"></span>
        </button>
        <div ClassName="collapse navbar-collapse " id="main-navbar">
          <ul ClassName="navbar-nav mx-auto">
            <li ClassName="nav-item active">
              <Link ClassName="nav-link" to={{ pathname: "/" }}>
                Home
              </Link>
            </li>
            <li ClassName="nav-item">
              <a ClassName="nav-link" href="#">
                About Us
              </a>
            </li>

            <li ClassName="nav-item dropdown dropdown-slide">
              <a
                ClassName="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown4"
                role="button"
                data-delay="350"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Pages.
              </a>
              <ul ClassName="dropdown-menu" aria-labelledby="navbarDropdown4">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Blog Single</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">404 Page</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
              </ul>
            </li>
            <li ClassName="nav-item dropdown dropdown-slide">
              <a
                ClassName="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown3"
                role="button"
                data-delay="350"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Shop.
              </a>
              <ul ClassName="dropdown-menu" aria-labelledby="navbarDropdown3">
                <li>
                  <Link to={{ pathname: "/shop" }}>Shop</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/single-product" }}>
                    Product Details
                  </Link>
                </li>
                <li>
                  <Link to={{ pathname: "/checkout" }}>Checkout</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/cart" }}>Cart</Link>
                </li>
              </ul>
            </li>

            <li ClassName="nav-item dropdown dropdown-slide">
              <a
                ClassName="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown5"
                role="button"
                data-delay="350"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Account.
              </a>
              <ul ClassName="dropdown-menu" aria-labelledby="navbarDropdown5">
                <li>
                  <Link to={{ pathname: "/login" }}>Login Page</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/signup" }}>SignUp Page</Link>
                </li>
                <li>
                  <Link to={{ pathname: "/forgot-password" }}>
                    Forgot Password
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <ul
          ClassName="top-menu list-inline mb-0 d-none d-lg-block"
          id="top-menu"
        >
          <li ClassName="list-inline-item">
            <a href="#" ClassName="search_toggle" id="search-icon">
              <i ClassName="tf-ion-android-search"></i>
            </a>
          </li>
          <li ClassName="dropdown cart-nav dropdown-slide list-inline-item">
            <a
              href="#"
              ClassName="dropdown-toggle cart-icon"
              data-toggle="dropdown"
              data-hover="dropdown"
            >
              <i ClassName="tf-ion-android-cart"></i>
            </a>
            <div ClassName="dropdown-menu cart-dropdown">
              <div ClassName="media">
                <a href="/product-single">
                  <img
                    ClassName="media-object img- mr-3"
                    src="assets/images/cart-1.jpg"
                    alt="image"
                  />
                </a>
                <div ClassName="media-body">
                  <h6>Ladies Bag</h6>
                  <div ClassName="cart-price">
                    <span>1 x</span>
                    <span>1250.00</span>
                  </div>
                </div>
                <a href="#" ClassName="remove">
                  <i ClassName="tf-ion-close"></i>
                </a>
              </div>

              <div ClassName="media">
                <a href="/product-single">
                  <img
                    ClassName="media-object img-fluid mr-3"
                    src="assets/images/cart-2.jpg"
                    alt="image"
                  />
                </a>
                <div ClassName="media-body">
                  <h6>Skinny Jeans</h6>
                  <div ClassName="cart-price">
                    <span>1 x</span>
                    <span>1250.00</span>
                  </div>
                </div>
                <a href="#" ClassName="remove">
                  <i ClassName="tf-ion-close"></i>
                </a>
              </div>
              <div ClassName="cart-summary">
                <span ClassName="h6">Total</span>
                <span ClassName="total-price h6">$1799.00</span>
                <div ClassName="text-center cart-buttons mt-3">
                  <a
                    href="#"
                    ClassName="btn btn-small btn-transparent btn-block"
                  >
                    View Cart
                  </a>
                  <a href="#" ClassName="btn btn-small btn-main btn-block">
                    Checkout
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li ClassName="list-inline-item">
            <a href="#">
              <i ClassName="tf-ion-ios-person mr-3"></i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Header;
