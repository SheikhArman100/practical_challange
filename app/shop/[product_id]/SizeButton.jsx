import React, { useState } from "react";

const SizeButton = ({ sizeChange }) => {
  const [selectedSize, setSelectedSize] = useState("");

  const handleSizeChange = (e) => {
    const newValue = e.target.value;

    if (newValue === selectedSize) {
      setSelectedSize("");
    } else {
      setSelectedSize(newValue);
      sizeChange(newValue);
    }
  };
  return (
    <div className="flex items-center gap-x-2 ml-10 mt-2">
      {/* button1 */}
      <div
        className={`h-6 w-6 md:h-8 md:w-8 relative border  border-white ${
          selectedSize === "S" ? "bg-white text-black" : ""
        }`}
      >
        <input
          type="radio"
          id="sizeS"
          className="h-6 w-6 md:h-8 md:w-8 appearance-none"
          value="S"
          checked={selectedSize === "S"}
          onChange={handleSizeChange}
        />
        <label
          htmlFor="sizeS"
          className="h-6 w-6 md:h-8 md:w-8 cursor-pointer absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-[0.6rem]"
        >
          S
        </label>
      </div>

      {/* button2 */}
      <div
        className={`h-6 w-6 md:h-8 md:w-8 relative border  border-white ${
          selectedSize === "M" ? "bg-white text-black" : ""
        }`}
      >
        <input
          type="radio"
          id="sizeM"
          className="h-6 w-6 md:h-8 md:w-8 appearance-none"
          value="M"
          checked={selectedSize === "M"}
          onChange={handleSizeChange}
        />
        <label
          htmlFor="sizeM"
          className="h-6 w-6 md:h-8 md:w-8 cursor-pointer absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-[0.6rem]"
        >
          M
        </label>
      </div>

      {/* button3 */}
      <div
        className={`h-6 w-6 md:h-8 md:w-8 relative border  border-white ${
          selectedSize === "L" ? "bg-white text-black" : ""
        }`}
      >
        <input
          type="radio"
          id="sizeL"
          className="h-6 w-6 md:h-8 md:w-8 block appearance-none"
          value="L"
          checked={selectedSize === "L"}
          onChange={handleSizeChange}
        />
        <label
          htmlFor="sizeL"
          className="h-6 w-6 md:h-8 md:w-8 cursor-pointer absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-[0.6rem]"
        >
          L
        </label>
      </div>

      {/* button4 */}
      <div
        className={`h-6 w-6 md:h-8 md:w-8 relative border  border-white ${
          selectedSize === "XL" ? "bg-white text-black" : ""
        }`}
      >
        <input
          type="radio"
          id="sizeXL"
          className="h-6 w-6 md:h-8 md:w-8 block appearance-none "
          value="XL"
          checked={selectedSize === "XL"}
          onChange={handleSizeChange}
        />
        <label
          htmlFor="sizeXL"
          className="h-6 w-6 md:h-8 md:w-8 cursor-pointer absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-[0.6rem]"
        >
          XL
        </label>
      </div>

      {/* button5 */}
      <div
        className={`h-6 w-6 md:h-8 md:w-8 relative border  border-white ${
          selectedSize === "XXL" ? "bg-white text-black" : ""
        }`}
      >
        <input
          type="radio"
          id="sizeXXL"
          className="h-6 w-6 md:h-8 md:w-8 block appearance-none "
          value="XXL"
          checked={selectedSize === "XXL"}
          onChange={handleSizeChange}
        />
        <label
          htmlFor="sizeXXL"
          className="h-6 w-6 md:h-8 md:w-8 cursor-pointer absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-[0.6rem]"
        >
          XXL
        </label>
      </div>
    </div>
  );
};

export default SizeButton;
