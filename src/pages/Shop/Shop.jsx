import React from "react";
import dummyProduct from "../../assets/dummyproduct";
import Item from "../../components/Item";
const Shop = () => {
  return (
    <>
      <div className="px-10 py-8">
        <div className="text-4xl text-darkBlue tracking-widest font-semibold">
          Choose a <span className="text-darkGreen text-4xl">PET </span> For Yourself.
        </div>
        <div className="py-20 px-18 flex flex-wrap gap-4 justify-center">
        {dummyProduct.map(({ title, price, images,breed,adobtAvailabilty,gender,id }) => (
          <Item
            key={title}
            title={title}
            images={images.slice(0, 1)}
            price={price}
            breed={breed}
            gender={gender}
            id={id}            
            adobtAvailabilty={adobtAvailabilty}
          />
        ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
