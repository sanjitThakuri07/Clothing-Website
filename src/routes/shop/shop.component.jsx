import React, { useContext } from "react";

// import SHOP_DATA from "../../Raw/shop-data.json";

import { ProductContext } from "../../context/products.context";

import ProductCard from "../../components/product-card/productCard";

import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => {
        return <ProductCard key={product.id} product={product}></ProductCard>;
      })}
    </div>
  );
};

export default Shop;
