import React from "react";

const CartTableBody = ({ data }) => {
  return (
    <div className="min-w-[900px] py-[24px] px-[--px] grid grid-cols-4 items-center shadow-sm">
      <div id="product-image-and-title" className="flex items-center gap-5">
        <img
          src={data.productImg}
          alt={`${data.productName}`}
          className="w-[50px] object-cover"
        />
        <p className="max-w-[140px] truncate uppercase">{data.productName}</p>
      </div>

      <p id="price" className="max-w-[140px] truncate">
        ${data.price}
      </p>

      <input
        type="number"
        id="quantity"
        value={data.quantity}
        className="w-[72px] px-[12px] py-[6px] rounded-md border-[1.6px] border-[--cart-quantity-border] outline-none"
      />

      <p id="subtotal" className="max-w-[140px] truncate">
        ${data.subtotal}
      </p>
    </div>
  );
};

export default CartTableBody;
