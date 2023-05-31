import Image from "next/image";

import ProductDetails from "./ProductDetails";

export const generateStaticParams = async () => {
  const data = await fetch("http://localhost:3000/api/products");
  const products =await data.json();

  return products.map((product) => ({
    params: {
      product_id:product._id.toString(),
    },
  }));
};

const getProduct = async (id) => {
  const data = await fetch(`http://localhost:3000/api/products/${id}`);
  const product = await data.json();
  return product;
};


const Product = async({params}) => {
  const product= await getProduct(params.product_id)
  
   

 
  return (
    <div className="grid grid-cols-1 xs:grid-cols-2 xs:py-[3.5rem] md:px-[4rem] lg:px-[5rem]  mt-8">
      <Image
        src={product.img}
        height="1200"
        width="1200"
        alt=""
        className="h-[16rem] w-[20rem] xs:w-[18rem] sm:w-[22rem] md:h-[20rem] md:w-[24rem] object-cover rounded-lg mx-auto"
      />
        <ProductDetails product={product}/>
    </div>
  );
};

export default Product;
