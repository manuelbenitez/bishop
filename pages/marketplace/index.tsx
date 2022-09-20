import React from "react";
import { useStoreState } from "../../store";
import ProductCard from "../../ui/product-card";
import { uuid } from "uuidv4";
import styles from "./marketplace.module.scss";
import Navbar from "../../ui/navbar";

function Marketplace() {
  const products = useStoreState((state) => state.marketplace.products);

  const ProductsCards =
    products &&
    products.map((product, index) => {
      const productUID = uuid();
      return (
        <div
          className={styles["container__product-card"]}
          key={index + productUID}
        >
          <ProductCard
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
          />
        </div>
      );
    });
  return (
    <>
      <Navbar />
      <div className={styles["container"]}>{ProductsCards}</div>
    </>
  );
}

export default Marketplace;
