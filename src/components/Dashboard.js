import React from "react";
import ProductList from "../pages/product/ProductList";

export default function Dashboard() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          filter
        </div>
        <div className="col-9">
          <ProductList />
        </div>
      </div>
    </div>
  );
}
