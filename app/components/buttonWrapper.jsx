"use client";
import { useRouter } from "next/navigation";
const ButtonWrapper = () => {
  const router = useRouter();
  return (
    <div
      style={{
        background:
          "linear-gradient(47.36deg, #2DF1E6 12.24%, #3694B0 37.45%, #468DB3 39.38%, #6F79BA 44.93%, #8D6BBF 49.97%, #9F63C2 54.29%, #A660C3 57.37%)",
      }}
      className="p-0.5  rounded-lg"
    >
      <button
        type="button"
        className=" px-6 py-3  rounded-lg text-base leading-4 font-[500] bg-bgColor whitespace-nowrap md:text-[1.2rem]"
        onClick={() => router.push("/signin")}
      >
        Sign In
      </button>
    </div>
  );
};

export default ButtonWrapper;
