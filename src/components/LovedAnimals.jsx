import React from "react";
import dummyProduct from "../assets/dummyproduct";
import Item from "./Item";

const LovedAnimals = () => {
  return (
    <>
      <p className="text-center font-bold text-darkBlue text-3xl tracking-widest">
        Last Visited Animals
      </p>
      <div className="py-10 px-8 flex flex-wrap gap-5 justify-center">
        {dummyProduct.slice(1,9).map(({ title, price, images,breed,adobtAvailabilty,gender,id }) => (
          <Item
            key={title}
            title={title}
            images={images.slice(0, 1)}
            price={price}
            breed={breed}
            id={id}
            gender={gender}
            adobtAvailabilty={adobtAvailabilty}
          />
        ))}
      </div>
    </>
  );
};

export default LovedAnimals;
