import { useState } from 'react';

const ColorButton = ({productValue,colorChange}) => {
     const [selectedColor, setSelectedColor] = useState("");

     const handleColorChange = (event) => {
       const newValue = event.target.value;

    
    if (newValue === selectedColor) {
      
      setSelectedColor('');
    } else {
        setSelectedColor(newValue);
        colorChange(newValue)
    }
  };
    
  return (
    <div className="flex items-center gap-x-2">
      {/* red */}
      <div className="relative h-6 w-6 md:h-8 md:w-8 bg-red-700 rounded">
        <input
          type="radio"
          className={`h-6 w-6 md:h-8 md:w-8 appearance-none cursor-pointer ${
            selectedColor === "red" ? "border-2 " : ""
          } `}
          value="red"
          checked={selectedColor === "red"}
          onChange={handleColorChange}
        />
      </div>
      {/* blue */}
      <div className="relative h-6 w-6 md:h-8 md:w-8 bg-blue-700 rounded">
        <input
          type="radio"
          className={`h-6 w-6 md:h-8 md:w-8 appearance-none cursor-pointer  ${
            selectedColor === "blue" ? "border-2" : ""
          } `}
          value="blue"
          checked={selectedColor === "blue"}
          onChange={handleColorChange}
        />
      </div>
      {/* yellow */}
      <div className="relative h-6 w-6 md:h-8 md:w-8 bg-yellow-700 rounded">
        <input
          type="radio"
          className={`h-6 w-6 md:h-8 md:w-8 appearance-none cursor-pointer  ${
            selectedColor === "yellow" ? "border-2" : ""
          } `}
          value="yellow"
          checked={selectedColor === "yellow"}
          onChange={handleColorChange}
        />
      </div>
      {/* green */}
      <div className="relative h-6 w-6 md:h-8 md:w-8 bg-green-700 rounded">
        <input
          type="radio"
          className={`h-6 w-6 md:h-8 md:w-8 appearance-none cursor-pointer  ${
            selectedColor === "green" ? "border-2" : ""
          } `}
          value="green"
          checked={selectedColor === "green"}
          onChange={handleColorChange}
        />
      </div>
    </div>
  );
}

export default ColorButton