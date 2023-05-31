"use client";
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import ColorButton from "./ColorButton";
import QuantityButton from "./QuantityButton";
import SizeButton from "./SizeButton";
const ProductDetails = ({ product }) => {
  const [cartSubmitted, setCartSubmitted] = useState(false);
  const [loading,setLoading]=useState(false)
  const [productValue, setProductvalue] = useState({
    title: "",
    color: "",
    size: "",
    quantity: 1,
    price: product.price,
  });
  const handleColor = (value) => {
    setProductvalue({ ...productValue, color: value });
  };
  const handleSize = (value) => {
    setProductvalue({ ...productValue, size: value });
  };
  const handleQuantity = (value) => {
    setProductvalue({ ...productValue, quantity: value });
  };

  const handleCart=()=>{
    setLoading(true)
    setProductvalue({...productValue,title:product.title,price:product.price*productValue.quantity})
    setTimeout(()=>{
      setLoading(false)
      setCartSubmitted(true)
    },5000)
  }
  console.log(productValue);

  return (
    <div className=" px-6 py-3 flex flex-col w-[20rem] mx-auto">
      <div className="flex items-center justify-between ">
        <h3 className="text-base md:text-lg sm:text-lg font-bold text-gray-300 ">{product.title}</h3>
        <h4 className="text-lg font-bold ">{`$${product.price}`}</h4>
      </div>
      <p className="desc text-xs text-gray-500 mt-2">{product.desc}</p>
      <div className="flex items-center gap-x-2 mt-4">
        <h5 className="text-xs md:text-sm font-[500]">Available Color:</h5>
        <ColorButton colorChange={handleColor} />
      </div>
      <div className="flex flex-col  gap-x-2 mt-4">
        <h5 className="text-xs md:text-sm font-[500]">Available Size:</h5>
        <SizeButton sizeChange={handleSize} />
      </div>
      <div className="flex items-center gap-x-6 mt-4">
        <h5 className="text-xs md:text-sm font-[500]">Quantity:</h5>
        <QuantityButton quantityChange={handleQuantity} />
      </div>
      <div className="w-full flex justify-center mt-4">
        {cartSubmitted ? (
          <button className="btn gap-2">
            Added
            <TiTick />
          </button>
        ) : (
          <button
            disabled={productValue.color === "" || productValue.size === ""}
            onClick={handleCart}
            href=""
            className={`btn  btn-md btn-success px-14 shadow-lg ${
              loading ? "loading" : ""
            }`}
          >
            {loading ? "loading" : "add to cart"}
          </button>
        )}
      </div>
      {productValue.color === "" || productValue.size === "" ? (
        <p className="text-[0.6rem] text-red-500 mx-auto mt-2">Select a color and size </p>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductDetails;
