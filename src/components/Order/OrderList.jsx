import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

const demoOrders = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  customerName: `Customer ${index + 1}`,
  date: new Date(
    2025,
    Math.floor(Math.random() * 12),
    Math.floor(Math.random() * 28) + 1
  )
    .toISOString()
    .split("T")[0],
  paymentMessage: ["Success", "Pending"][Math.floor(Math.random() * 2)],
  total: (Math.random() * 150).toFixed(2),
  items: orderItems[Math.floor(Math.random() * 20)],
  delivery: [
    "Delivered",
    "In Transit",
    "Pending",
    "Out for Delivery",
    "Shipped",
  ][Math.floor(Math.random() * 5)],
}));

const OrderList = () => (
  <section className="text-white bg-primary2/10 overflow-x-auto cursor-pointer hide-scrollbar min-w-[1050px]">
    <div className="min-w-[700px]">
      <OrderListHeader />
    </div>
    <div className="mt-5 space-y-2 text-white/70 min-w-[700px] font-medium text-[14px]">
      {demoOrders.map((od, idx) => (
        <div
          key={od.id}
          className="bg-primary1 flex items-center flex-nowrap gap-5 border-t border-b border-grayText/10 py-2 justify-between px-2 text-center"
        >
          <div className="flex-1 flex items-center gap-2 justify-center">
            <input className="w-3 h-3" type="checkbox" />
            <h2>#{idx + 1}</h2>
          </div>
          <div className="flex-1 text-nowrap">{od.date}</div>
          <div className="flex-1 text-nowrap">{od.customerName}</div>
          <div className="flex-1">
            <button
              className={` px-2 py-1 rounded-sm ${
                od.paymentMessage === "Success"
                  ? "bg-green-600/5 border text-green-600/70 border-green-400/30"
                  : "bg-amber-500/5 border text-amber-500/50 border-amber-400/30 "
              }`}
            >
              {od.paymentMessage}
            </button>
          </div>
          <div className="flex-1">{od.total}</div>
          <div className="flex-1">{od.delivery}</div>
          <div className="flex-1 text-xl flex justify-center gap-5">
            <button className="cursor-pointer">
              <MdDeleteOutline className="text-red-500/70" />
            </button>
            <button className="cursor-pointer">
              <CiEdit className="text-green-500" />
            </button>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default OrderList;

const OrderListHeader = () => (
  <div className=" bg-primary2/30 shadow-md shadow-white/5 flex flex-nowrap justify-between px-2 py-2 font-semibold text-center text-grayText">
    <div className="flex flex-1 gap-2 items-center justify-center">
      <input className="w-3 h-3" type="checkbox" />
      <p>order</p>
    </div>
    <div className="flex-1">Date</div>
    <div className="flex-1">Customer</div>
    <div className="flex-1">Payment</div>
    <div className="flex-1">Total</div>
    <div className="flex-1">Delivery</div>
    <div className="flex-1">Action</div>
  </div>
);

const orderItems = [
  "Coffee",
  "Bagel",
  "Latte",
  "Sandwich",
  "Espresso",
  "Croissant",
  "Cappuccino",
  "Muffin",
  "Mocha",
  "Brownie",
  "Tea",
  "Scone",
  "Macchiato",
  "Danish",
  "Flat White",
  "Toast",
  "Hot Chocolate",
  "Green Tea",
  "Cookies",
  "Iced Coffee",
];
