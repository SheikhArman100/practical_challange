import Image from "next/image";
import Link from "next/link";
import home2 from "../../../public/home2.jpg";
import ColorButton from "./ColorButton";


const Product = () => {
   

 
  return (
    <div className="flex flex-col  mt-8">
      <Image
        src={home2}
        height="auto"
        alt=""
        className="w-[20rem]  aspect-[2/1.6] object-cover rounded-lg mx-auto"
      />
      <div className=" px-6 py-3">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-gray-300 ">
            White Cotton Casual Shirt{" "}
          </h3>
          <h4 className="text-lg font-bold ">$546</h4>
        </div>
        <div className="flex items-center gap-x-2 mt-4">
          <h5 className="text-xs font-[500]">Available Color:</h5>
          <ColorButton />
        
            
        
        </div>
        <div className="mt-4">
          <h5 className="text-xs font-[500]">Available Size:</h5>
          
        </div>
        <div>
          <h5>Quantity</h5>
          <p>1,2,3,4</p>
        </div>
        <Link href="" className="btn btn-md">
          Add to cart
        </Link>
      </div>
    </div>
  );
};

export default Product;
