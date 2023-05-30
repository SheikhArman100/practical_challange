"use client";

import { signin_validation } from "@/libs/validation/signin_validation";
import { useFormik } from "formik";
import Link from "next/link";
import { useState } from "react";
import { BiHide } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { FaInfinity } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineEye, HiOutlineMail } from "react-icons/hi";
import { SiGmail } from "react-icons/si";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [focused, setFocused] = useState({
    email: false,
    password: false,
  });
  const [error, setError] = useState("");
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: signin_validation,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }
  return (
    <div className="w-[90%]  xs:w-[20rem] bg-gray-900 mt-10 xs:mt-5 mx-auto rounded-lg py-4 px-2 ">
      <div className="flex flex-col items-center">
        <FaInfinity size={40} />
        <h3 className="text-xl font-medium">Sign in</h3>
        <p className="text-gray-400 text-sm">Enter your information below</p>
      </div>
      <form
        className="mt-2 px-2 flex flex-col gap-y-2"
        onSubmit={formik.handleSubmit}
      >
        {/* Email------------ */}
        <div>
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <div
            className={`input input-bordered w-full flex items-center gap-x-2 justify-between ${
              formik.errors.email && formik.touched.email
                ? "border-rose-600"
                : focused.email
                ? "border-blue-600"
                : ""
            }`}
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent w-full text-sm"
              onFocus={() =>
                setFocused({
                  email: true,
                  password: false,
                })
              }
              {...formik.getFieldProps("email")}
            />
            <HiOutlineMail
              size={28}
              className={`${
                formik.errors.email && formik.touched.email
                  ? "text-rose-600"
                  : focused.email
                  ? "text-blue-600"
                  : "text-gray-400"
              }`}
            />
          </div>
          {formik.errors.email && formik.touched.email ? (
            <span className="text-rose-500 text-xs">{formik.errors.email}</span>
          ) : (
            ""
          )}
          {error === "Email Already Used...!" ? (
            <span className="text-rose-500 text-xs">
              Email Already Used...!
            </span>
          ) : (
            ""
          )}
        </div>

        {/* Password------------ */}
        <div>
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div
            className={`input input-bordered w-full flex items-center gap-x-2 justify-between  ${
              formik.errors.password && formik.touched.password
                ? "border-rose-600"
                : focused.password
                ? "border-blue-600"
                : ""
            }`}
          >
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="bg-transparent w-full text-sm "
              onFocus={() =>
                setFocused({
                  email: false,
                  password: true,
                })
              }
              {...formik.getFieldProps("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword.password ? (
                <HiOutlineEye
                  size={28}
                  className={`${
                    formik.errors.password && formik.touched.password
                      ? "text-rose-600"
                      : focused.password
                      ? "text-blue-600"
                      : "text-gray-400"
                  }`}
                />
              ) : (
                <BiHide
                  size={28}
                  className={`${
                    formik.errors.password && formik.touched.password
                      ? "text-rose-600"
                      : focused.password
                      ? "text-blue-600"
                      : "text-gray-400"
                  }`}
                />
              )}
            </button>
          </div>
          {formik.errors.password && formik.touched.password ? (
            <span className="text-rose-500 text-xs">
              {formik.errors.password}
            </span>
          ) : (
            ""
          )}
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-[#1e6fdf] mt-2 py-3 text-base font-[500] rounded-md"
        >
          Sign in
        </button>
        {/* other sign in option */}
        <div className="w-full flex flex-col items-center gap-y-3 mt-2">
          <p>-- or Sign in with --</p>
          <div className="flex items-center justify-center gap-1 flex-wrap">
            <button className="py-2 px-2 border border-gray-500 rounded-md flex items-center gap-2 text-sm">
              <FcGoogle size={20} />
              Google
            </button>

            <button className="py-2 px-2 border border-gray-500 rounded-md flex items-center gap-2 text-sm">
              <BsGithub size={20} />
              Github
            </button>

            <button className="py-2 px-2 border border-gray-500 rounded-md flex items-center gap-2 text-sm">
              <SiGmail size={20} />
              Email
            </button>
          </div>
        </div>
      </form>

      <div className="text-center mt-4 px-2 mb-2">
        <p className="text-gray-400 text-xs font-[500]">
          By signing up, I agree to the{" "}
          <span className="text-blue-500">Terms & Conditions</span> and{" "}
          <span className="text-blue-500">Privacy Policy</span>
        </p>
        <p className="text-sm text-gray-500">
          Have no account yet?
          <Link href="/signup" className="text-blue-400">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
