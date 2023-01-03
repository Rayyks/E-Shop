import Header from "./Header"; //Include Header
import Footer from "./Footer"; //Include Footer
import Home from "./Home";
import Shop from "./Shop";
import SingleProduct from "./SingleProduct";
import Checkout from "./Checkout";
import Cart from "./Cart";
import Login from "./Login";
import Sigup from "./Sigup";
import ForgotPassword from "./ForgotPassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/single-product" element={<SingleProduct />} />
          <Route path="header.js/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sigup" element={<Sigup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
export default App;
