import Image from "next/image";
import svg1 from "../public/HomeSvg1.svg";
import image1 from "../public/home1.jpg";
import image2 from "../public/home2.jpg";


export default function Home() {
  return (
    <div className="relative flex mt-[4rem] sm:mt-[5rem] flex-col sm:flex-row text-center sm:text-left justify-between">

      {/* Left Side */}
      <div className=" flex flex-col gap-y-[1.25rem]  ">
        <h2 className="sm:text-[3.3rem] md:text-[3.5rem] xs:text-[3.2rem] lg:text-[3.8rem] text-[2.8rem]  sm:leading-[4rem] leading-[3rem] font-[500]">
          The one tool you <br className="hidden xs:block" /> need to{" "}
          <span className="bg-gradient-to-tr from-ascentColor  to-pink-500 text-transparent  bg-clip-text ">
            make
          </span>
          <br /> any demo
        </h2>
        <p className="font-[500] text-[1rem] leading-[1.5rem] text-[#989898]">
          Upload your song idea, license a voice and <br /> let our AI turn it
          into a hit
        </p>
        <div className="flex items-center justify-center  gap-x-[2rem] mt-[0.8rem] sm:mt-[1.5rem] sm:justify-start">
          {/* button1 */}
          <div
            style={{
              background:
                "linear-gradient(47.36deg, #2DF1E6 12.24%, #3694B0 37.45%, #468DB3 39.38%, #6F79BA 44.93%, #8D6BBF 49.97%, #9F63C2 54.29%, #A660C3 57.37%)",
            }}
            className="p-0.5 rounded-lg"
          >
            <button className="py-[0.85rem] px-[2rem] sm:px-[2.5rem]  rounded-lg font-[500] text-[0.8rem] sm:text-[1rem] leading-5 bg-bgColor">
              Try for free
            </button>
          </div>
          {/* button2 */}
          <button
            style={{
              background:
                "linear-gradient(90deg, #23AFB7 1.46%, #169AA4 79.47%)",
            }}
            className="py-[0.85rem] px-[2rem] md:px-[2.5rem] md:py-[1rem]  rounded-lg font-[500] text-[0.8rem] sm:text-[1rem]  leading-5 md:leading-3"
          >
            Create Music
          </button>
        </div>
      </div>

      {/* Right SIDe */}
      <div className="flex items-center justify-center mt-[2rem] lg:mt-0  gap-x-[0.8rem] lg:gap-x-[1rem] sm:gap-x-[0.5rem]">
        <Image
          src={image1}
          alt="home1"
          placeholder="blur"
          height="auto"
          className="rounded-lg lg:h-[25rem] lg:w-[17.5rem] md:h-[22rem] md:w-[14rem] sm:h-[20rem] sm:w-[12rem] xs:h-[18rem] xs:w-[13rem] h-[16rem] w-[10rem]"
        />
        <Image
          src={image2}
          alt="home1"
          placeholder="blur"
          height="auto"
          className="rounded-lg sm:h-[18rem] sm:w-[12rem]  md:h-[19rem] md:w-[14rem] lg:w-[17.5rem] lg:h-[22rem] xs:h-[16rem] xs:w-[12rem] h-[14rem] w-[8rem]"
        />
      </div>
      <Image
        src={svg1}
        alt="svg1"
        className="h-[3rem] aspect-square absolute right-60 lg:right-40 -top-10 xs:left-40 sm:left-[20rem] sm:top-[15rem]"
      />
      <Image
        src={svg1}
        alt="svg2"
        className="h-[3rem] aspect-square absolute left-[18rem] bottom-[28rem] xs:bottom-[24rem] xs:left-[28rem] sm:left-[45rem] sm:bottom-[22rem] lg:left-[70rem] lg:bottom-[24rem]"
      />
      

      {/* gradient blur background */}
      <div
        style={{
          background: "#B843B7",
          filter: "blur(200px)",
        }}
        className="h-[12.5rem] aspect-square rounded-full absolute bottom-10 right-10"
      />
      <div
        style={{
          background: "#B843B7",
          filter: "blur(200px)",
        }}
        className="h-[12.5rem] aspect-square rounded-full absolute bottom-[50%] right-[50%]"
      />
      <div
        style={{
          background: "#B843B7",
          filter: "blur(200px)",
        }}
        className="h-[9.3rem] aspect-square rounded-full absolute -top-20 right-0"
      />
    </div>
  )
}
