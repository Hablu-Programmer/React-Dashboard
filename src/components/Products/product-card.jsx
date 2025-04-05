import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const ProductCard = ({ products = [] }) => {
  return (
    <div className="overflow-x-auto min-w-[1050px] flex flex-col mb-4">
      <div
        className="grid gap-x-4 items-center p-3 bg-primary2 font-medium "
        style={{
          gridTemplateColumns: `
            minmax(10px, 20px)
            minmax(40px, 1fr)
            minmax(250px, 1fr)
            minmax(160px, 1fr)
            minmax(100px, 1fr)
            minmax(240px, 1fr)
            minmax(60px, 1fr)
          `,
        }}
      >
        <input type="checkbox" className="size-4" />
        <p>Image</p>
        <h1>Name</h1>
        <h1>Price</h1>
        <p>Status</p>
        <div>Permissions</div>
        <div>Actions</div>
      </div>

      <div className="">
        {Array.from({ length: products.length || 25 }, (_, index) => (
          <div
            key={index}
            className="grid gap-x-4 items-center p-3 bg-primary1 hover:bg-primary2/65 border-b border-grayText/10 cursor-pointer"
            style={{
              gridTemplateColumns: `
              minmax(10px, 20px)
              minmax(40px, 1fr)
              minmax(250px, 1fr)
              minmax(160px, 1fr)
              minmax(100px, 1fr)
              minmax(240px, 1fr)
              minmax(60px, 1fr)
            `,
            }}
          >
            <input type="checkbox" className="size-4" />
            <img
              src={products[index]?.image || "./product-1.jpg"}
              alt=""
              className="size-10 rounded-lg"
            />
            <p>{products[index]?.name || `Product ${index + 1}`}</p>
            <p>${products[index]?.price || "0.00"}</p>
            <p>{products[index]?.status || "Active"}</p>
            <div>{products[index]?.permissions || "All"}</div>
            <div className="flex gap-2">
              <button className="cursor-pointer ">
                <MdDeleteOutline className="text-red-500/70" size={20} />
              </button>
              <button className="cursor-pointer">
                <CiEdit className="text-green-500" size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
