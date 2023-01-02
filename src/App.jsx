import Header from "./page/header"; //Include Header
import Footer from "./page/footer"; //Include Footer
import Home from "./page/Home";
import Shop from "./page/Shop";
import SingleProduct from "./page/singleProduct";
import Checkout from "./page/checkout";
import Cart from "./page/cart";
import Login from "./page/login";
import Signup from "./page/signup";
import ForgotPassword from "./page/forgotPass";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page/shop" element={<Shop />} />
          <Route path="/page/single-product" element={<SingleProduct />} />
          <Route path="/page/checkout" element={<Checkout />} />
          <Route path="/page/cart" element={<Cart />} />
          <Route path="/page/login" element={<Login />} />
          <Route path="/page/signup" element={<Signup />} />
          <Route path="/page/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
export default App;
