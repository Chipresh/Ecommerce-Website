import React from "react";
import Navbar from "../Components/Navbar";
import CartTableBody from "../Components/CartTableBody";
import { cartData } from "../Data/cartData";

const Cart = () => {
  return (
    <div id="cart" className="font-[--poppins] bg-[--pri-bg]">
      <nav id="navigation">
        <Navbar />
      </nav>

      <div
        id="carted-product-table"
        className="mt-[100px] flex flex-col overflow-x-scroll"
      >
        <div
          id="table-head"
          className="min-w-[900px] px-[--px] py-[24px] grid grid-cols-4 items-center text-lg text-[--text2]"
        >
          <h1>Product</h1>
          <h1>Price</h1>
          <h1>Quantity</h1>
          <h1>Subtotal</h1>
        </div>

        <div id="table-body" className="mt-[40px] flex flex-col gap-[40px]">
          {cartData.map((data, index) => (
            <CartTableBody key={index} data={data} />
          ))}
        </div>
      </div>

      <div
        id="navigate-btns"
        className="w-full mt-[24px] flex items-center justify-between border border-red-600"
      >
        <button className="py-[16px] px-[48px] rounded-[4px] uppercase border border-[--cart-quantity-border]">
          Return to shop
        </button>

        <button className="py-[16px] px-[48px] rounded-[4px] uppercase border border-[--cart-quantity-border]">
          update cart
        </button>
      </div>

      <div id="discounts-and-checkout"></div>
    </div>
  );
};

export default Cart;
