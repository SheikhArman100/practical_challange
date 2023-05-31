/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import home1 from "../../public/home1.jpg";

const getProducts = async () => {
  const data = await fetch("http://localhost:3000/api/products", {
    next: {
      revalidate: 120,
    },
  });
  const products = await data.json();

  return products;
};

const Shop = async () => {
  const products = await getProducts();
  // console.log(products);
  return (
    <div className="flex flex-col items-center mt-4">
      <h2 className="text-xl font-bold">All The products</h2>
      {/* all products */}
      <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-x-4 sm:gap-y-6 md:gap-x-10 md:gap-y-10 gap-x-2 gap-y-4 mt-4">
        {/* card */}
        {products.map((product) => (
          <div
            key={product._id}
            className="h-[14rem] w-[10rem] xs:h-[16rem] xs:w-[12rem] lg:w-[14rem] p-2 bg-gray-900 rounded-lg cursor-pointer flex flex-col justify-between shadow"
          >
            <Image
              src={product.img}
              alt=""
              width="800"
              height="800"
              className="w-full h-[60%] xs:h-[70%] rounded-lg object-cover"
            />
            <h3 className="text-sm text-gray-400  font-semibold lg:px-3">
              {product.title}
            </h3>
            <div className="flex items-center justify-between lg:px-3">
              <p className="text-base lg:text-lg font-medium">
                {`$${product.price}`}
              </p>
              <Link
                href={`/shop/${product._id}`}
                className="btn btn-sm btn-success z-20 text-xs lg:text-sm"
              >
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
