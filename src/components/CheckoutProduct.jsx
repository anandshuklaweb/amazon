import Image from "next/image";
import React from "react";
import Currency from "react-currency-formatter";

const CheckoutProduct = ({
  id,
  title,
  price,
  rating,
  description,
  image,
  hasPrime,
}) => {
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={120} width={120} className="cart-img" />

      <div className="col-span-3 mx-5">
        <p className="font-semibold">{title}</p>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="INR" />
      </div>

      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button className="button">Add to Basket</button>
        <button className="button">Remove from Basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
