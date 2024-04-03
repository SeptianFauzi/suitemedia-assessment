import Image from "next/image";
import React from "react";

function Footer() {
  return (
    <footer
      className="laptop:mt-[60px] mt-10 flex flex-col justify-center items-center laptop:h-[440px] h-full  rounded-t-[40px] laptop:px-[130px] px-[14px]"
      style={{
        background:
          "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
      }}
    >
      <div className="flex flex-col relative w-full gap-10 border-b border-neural-color-20 pb-10 pt-10">
        <div className="flex laptop:flex-row flex-col gap-5 bg-dark-blue-00 laptop:p-8 p-4 rounded-2xl">
          <p className="text-xl laptop:text-2xl text-neural-color-00 font-bold">
            Register now so you don&apos;t miss our programs
          </p>
          <div className="p-3 rounded-xl bg-white gap-3 flex desktop:flex-row flex-col laptop:w-max desktop:w-min justify-between items-center">
            <input
              type="text"
              className="laptop:w-[508px] text-center desktop:text-start w-full h-min py-[14px] px-7 text-neural-color-40 text-[14px] rounded-lg border border-neural-color-40 leading-[0px]"
              placeholder="Enter your email"
            />
            <button className="py-[14px] w-full text-nowrap px-7 bg-dark-blue-00 text-base rounded-lg font-medium text-neural-color-00 ">
              Subcribe Now
            </button>
          </div>
        </div>
        <div className="flex laptop:gap-0 gap-5 laptop:flex-row flex-col laptop:justify-between w-full">
          <ul className="flex justify-between laptop:gap-[60px] gap-10">
            <li>
              <a
                href=""
                aria-label="Home"
                className="text-base text-neural-color-100 font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                aria-label="Category"
                className="text-base text-neural-color-100 font-medium"
              >
                Category
              </a>
            </li>
            <li>
              <a
                href=""
                aria-label="About"
                className="text-base text-neural-color-100 font-medium"
              >
                About
              </a>
            </li>
            <li>
              <a
                href=""
                aria-label="Contact"
                className="text-base text-neural-color-100 font-medium"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex gap-10 justify-center">
            <a href="" aria-label="Facebook">
              <Image width={20} height={20} src="/images/facebook.svg" alt="" />
            </a>
            <a href="" aria-label="Twitter">
              <Image width={20} height={20} src="/images/twitter.svg" alt="" />
            </a>
            <a href="" aria-label="Instagram">
              <Image
                width={20}
                height={20}
                src="/images/instagram.svg"
                alt=""
              />
            </a>
            <a href="" aria-label="Youtube">
              <Image width={20} height={20} src="/images/youtube.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="flex laptop:flex-row flex-col items-center laptop:justify-between pt-10 w-full">
        <p className="text-neural-color-60 hidden laptop:flex text-sm font-medium">
          © 2022 Monito. All rights reserved.
        </p>
        <Image
          width={150}
          height={150}
          className="w-[150px] laptop:pb-0 pb-10"
          src="/images/monito-logo.svg"
          alt=""
        />
        <ul className="flex justify-center laptop:justify-between laptop:gap-16 gap-6">
          <li>
            <a
              href=""
              aria-label="Terms of Service"
              className=" text-neural-color-60 laptop:text-sm text-xs font-medium"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              aria-label="Privacy Policy"
              href=""
              className="text-neural-color-60 laptop:text-sm text-xs font-medium"
            >
              Privacy Policy
            </a>
          </li>
        </ul>
        <p className="text-neural-color-60 laptop:hidden laptop:text-sm text-[10px] font-medium py-3">
          © 2022 Monito. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
