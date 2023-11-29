import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        {/* <Home /> */}
        {/* <ProductList /> */}
        {/* <Product /> */}
        {/* <Register /> */}
        {/* <Login /> */}
        {/* <Cart /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
