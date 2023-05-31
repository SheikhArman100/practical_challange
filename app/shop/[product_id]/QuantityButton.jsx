import { set } from "mongoose";
import React, { useState } from "react";

const QuantityButton = ({ quantityChange }) => {
  const [count, setCount] = useState(1);
  const decreaseCount = () => {
    if (count > 1) {
    setCount(count - 1);
    quantityChange(count-1);
  };
}
  const increaseCount = () => {
    setCount(count + 1);
    quantityChange(count+1);
  };
  return (
    <div className="btn-group items-center">
      <button className="btn btn-sm" onClick={decreaseCount}>
        -
      </button>
      <p className="leading-[2rem] bg-base-300 px-6">{count}</p>
      <button className="btn btn-sm" onClick={increaseCount}>
        +
      </button>
    </div>
  );
};

export default QuantityButton;
