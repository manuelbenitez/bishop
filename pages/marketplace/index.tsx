import React, { useCallback, useEffect, useState } from "react";
import { useStoreState, useStoreActions } from "../../store";
import ProductCard from "../../ui/product-card";
import { uuid } from "uuidv4";
import styles from "./marketplace.module.scss";
import Navbar from "../../ui/navbar";
import { IProductsModel } from "../../store/model/marketplace/marketplace.types";

const Marketplace = () => {
  const products = useStoreState((state) => state.marketplace.products);
  const cart = useStoreState((state) => state.marketplace.cart);
  const addToCart = useStoreActions((action) => action.marketplace.addToCart);
  const setTotalPrice = useStoreActions(
    (action) => action.marketplace.setTotalPrice
  );
  const [cartData, setCartData] = useState<Array<IProductsModel>>();
  const ProductsCards =
    products &&
    products.map((product, index) => {
      const productUID = uuid();

      const handleCart = () => {
        addToCart(product);
        setTotalPrice(product);
      };
      return (
        <div
          className={styles["products__product-card"]}
          key={index + productUID}
        >
          <ProductCard
            image={product.image}
            name={product.name}
            description={product.description}
            price={product.price}
            addToCart={() => handleCart()}
          />
        </div>
      );
    });

  const cartContainer =
    cartData &&
    cartData.map((product, index) => <div key={index}>{product.name}</div>);

  const fetchData = useCallback(async () => {
    setCartData(cart);
  }, [cart]);

  useEffect(() => {
    console.log("1");
    fetchData();
  }, [cartContainer]);
  return (
    <>
      <Navbar />
      <div className={styles["products"]}>{ProductsCards}</div>
      {cartContainer}
    </>
  );
};

export default Marketplace;
