import React, { useState } from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const Product = ({
  id,
  title,
  price,
  description,
  category,
  image,
  rating,
}) => {
  const dispatch = useDispatch();
  // const MAX_RATING = 5;
  // const MIN_RATING = 1;

  // const [rating] = useState(
  //   Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING
  // );

  // const [hasPrime] = useState(Math.random() < 0.5);

  const addtoBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };

    // Sending the product as an action to the REDUX Store....  the basket slice
    dispatch(addToBasket(product));
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400 ">
        {category}
      </p>

      <Image
        src={image}
        alt=""
        height={200}
        width={200}
        className="product-img"
      />
      <h4 className="my-2 font-semibold line-clamp-1">{title}</h4>
      {/* <div className="flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div> */}

      <p className="text-sx my-1 line-clamp-2">{description}</p>

      <div className="mb-5">
        <Currency quantity={price} currency="INR" />
      </div>

      {/* {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <img src="/has-prime.png" alt="" className="w-12" />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )} */}

      <button onClick={addtoBasket} className="mt-auto button">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
