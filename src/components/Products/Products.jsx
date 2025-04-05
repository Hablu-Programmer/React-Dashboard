import React from "react";
import { CgAdd } from "react-icons/cg";
import ProductCard from "./product-card";

const demoProducts = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: (Math.random() * 1000).toFixed(2),
  status: ["In Stock", "Out of Stock", "Low Stock"][
    Math.floor(Math.random() * 3)
  ],
  permissions: ["All", "Admin", "Staff"][Math.floor(Math.random() * 3)],
  image: `https://picsum.photos/100/100?random=${index}`,
}));

const Products = () => {
  return (
    <div className="text-gray-200 w-full">
      <div className="flex justify-between items-center gap-x-2 pt-6 pb-2 px-2">
        <h1 className="text-2xl font-bold ">Product List</h1>
        <button className="flex gap-2 items-center border border-grayText/30 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-700 active:scale-90">
          <CgAdd />
          <p>Add Product</p>
        </button>
      </div>
      <ProductCard products={demoProducts} />
    </div>
  );
};

export default Products;
