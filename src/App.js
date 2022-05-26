import React from "react";
import { Route, Routes } from "react-router-dom";
import Navi from "./components/Navi";
import Dashboard from "./components/Dashboard";
import Login from "./pages/Login";
import ProductDetail from "./pages/product/ProductDetail";
import RegisterCustomer from "./pages/RegisterCustomer";
import RegisterSupplier from "./pages/RegisterSupplier";
import RegisterAdmin from "./pages/RegisterAdmin";
import ProductSave from "./pages/product/ProductSave";
import ProductUpdate from "./pages/product/ProductUpdate";
import Cart from "./pages/Cart";
import MyProducts from "./pages/product/MyProducts";
import ConfirmToken from "./pages/ConfirmToken";
import CategorySave from "./pages/CategorySave";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-dark">
      <div className="container bg-warning" style={{ height: "100%" }}>
        <Navi />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Dashboard />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/product/:id" element={<ProductDetail />} />
          <Route
            exact
            path="/register/customer"
            element={<RegisterCustomer />}
          />
          <Route
            exact
            path="/register/supplier"
            element={<RegisterSupplier />}
          />
          <Route exact path="/register/admin" element={<RegisterAdmin />} />
          <Route exact path="/product-save" element={<ProductSave />} />
          <Route exact path="/product/:id/edit" element={<ProductUpdate />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/my-products" element={<MyProducts />} />
          <Route
            exact
            path="/confirm-token/:token"
            element={<ConfirmToken />}
          />
          <Route exact path="/category-save" element={<CategorySave />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
