import React, { useState } from 'react';
import { useEffect } from 'react';

import { useParams } from "react-router-dom";
import products from '../../assets/dummyproduct';



  const DetailPage = () => {
  const { id } = useParams();
  const [product,setProduct]=useState(null)

  useEffect(() => {
    // Find the product that matches the id from the URL
    const foundProduct = products.find(prod => prod.id === parseInt(id));
  
  if (foundProduct) {
      setProduct(foundProduct);
    } else {
      console.error("Product not found");
    }
  }, [id]);  // Dependency array includes 'id' to run effect when id changes

// If product is not found yet, return a loading message
if (!product) {
  return <div>Loading...</div>;
}

  return (
   
    <div className="bg-gray-100 min-h-screen py-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        {/* Product Image */}
        <div className="flex justify-center mb-6">
          <img 
            src={product.images[0]} 
            alt={product.title} 
            className="rounded-lg w-full max-w-md"
          />
        </div>
        
        {/* Product Details */}
       <div className='flex justify-between'>
       <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.title}</h1>
      {
          product.adobtAvailabilty  &&( <button className="bg-green rounded-xl px-5 py-2 text-black font-semibold hover:bg-darkGreen transition ease-linear hover:scale-95 mb-4">
          <i className="text-darkBlue   ri-mickey-line me-1"></i>{" "}
          <span className="text-darkBlue  sm:text-sm">Adopt Now</span>
        </button>)
      }

       </div>
        <p><span className="font-semibold text-gray-600 text-lg mb-4">Breed:</span> {product.breed}</p>
        <p><span className="font-semibold text-gray-600 text-lg mb-4">Vendor:</span> {product.vendor}</p>

        <div className="grid grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="text-lg">
            <p><span className="font-semibold">Age:</span> {product.age} years</p>
            <p><span className="font-semibold">Weight:</span> {product.weight} kg</p>
            <p><span className="font-semibold">Color:</span> {product.color}</p>
            <p><span className="font-semibold">Size:</span> {product.size}</p>
            <p><span className="font-semibold">Gender:</span> {product.gender}</p>
          </div>

          {/* Right Column */}
          <div className="text-lg">
            <p><span className="font-semibold">Human Friendly Level:</span> {product.humanFriendlyLevel}</p>
            <p><span className="font-semibold">Energy Level:</span> {product.energyLevel}</p>
            <p><span className="font-semibold">Ease of Training:</span> {product.easeOfTraining}</p>
            <p><span className="font-semibold">Adopt Availability:</span> {product.adobtAvailabilty ? "Available" : "Not Available"}</p>
            <p><span className="font-semibold">Price:</span> Rs {product.price}</p>
            <p><span className="font-semibold">Location:</span> {product.vendorLocation}</p>

          </div>
        </div>

        {/* Tags */}
        <div className="mt-6">
          <p className="font-semibold text-gray-700 text-lg">Tags:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {product.tags.map((tag, index) => (
              <span 
                key={index}
                className="bg-blue-200 text-blue-800 text-lg px-3 py-1 rounded-full "
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-8">
          <p className="text-gray-700 text-lg">For more details, contact the vendor:</p>
          <p> <span className="text-xl font-semibold text-blue-600 mt-2">Phone: </span> {product.vendor}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
