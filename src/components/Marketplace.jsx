import React from "react";
import { images } from "./commonfiles/data";
import ProductDescription from "./ProductDescription";
import ProductImageGallery from "./ProductImageGallery";
import { ProductOrder } from "./ProductOrder";

export const Marketplace = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="block md:flex md:flex-row">
        {/* <div className="block md:grid md:grid-cols-3"> */}
          <ProductImageGallery images={images} />
          <ProductDescription />
          <ProductOrder />
        </div>
      </div>
    </div>
  );
};
