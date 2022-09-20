import Image from "next/image";
import React from "react";
import Button from "../button";
import { HeaderOne, HeaderTwo, SubTextOne } from "../typography/common";
import { manatee } from "../typography/common/colors";
import styles from "./product-card.module.scss";
import { IProductCardProps } from "./product-card.types";
import soda from "./soda.jpg";
const ProductCard = ({
  image,
  name,
  description,
  price,
  addToCart,
  buy,
}: IProductCardProps) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["container__header"]}>
        <Image src={soda} layout="fill" objectFit="cover" alt="Product Image" />
      </div>
      <div className={styles["container__content"]}>
        <HeaderTwo color={manatee} label={name} />
        <SubTextOne color={manatee} label={description} />
        <div className={styles["container__content__price_and_buttons"]}>
          <HeaderOne color={manatee} label={String(`$ ${price}`)} />
          <div
            className={styles["container__content__price_and_buttons__buttons"]}
          >
            <Button
              label={"Add to cart"}
              type={"secondary"}
              onClick={addToCart}
            />
            <Button label={"Buy"} type={"secondary"} onClick={buy} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
