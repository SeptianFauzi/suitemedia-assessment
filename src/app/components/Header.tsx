import React from "react";
import Navigation from "./Navigation";
import Image from "next/image";

function Header() {
  return (
    <header
      className="laptop:h-[695px] w-full h-full pt-3 laptop:pt-0 rounded-b-[20px]"
      style={{
        background:
          "linear-gradient(102.87deg, #FCEED5 6.43%, #FCEED5 78.33%, #FFE7BA 104.24%)",
        zIndex: -2,
      }}
    >
      <div
        className="hidden bg-no-repeat laptop:flex "
        style={{
          height: "695px",
          width: "100%",
          position: "absolute",
          zIndex: -1,
          backgroundImage: `url(/images/banner.svg)`,
        }}
      />
      <div
        className="laptop:hidden bg-no-repeat flex -translate-y-12"
        style={{
          height: "400px",
          width: "100%",
          position: "absolute",
          zIndex: -1,
          backgroundImage: `url(/images/banner-mobile.svg)`,
        }}
      />
      <Navigation />
      <div className="flex flex-col laptop:flex-row justify-between desktop2k:px-[130px] laptop:px-[80px] pl-[14px] laptop:h-full">
        <div className="w-full laptop:max-w-[360px] desktop:max-w-[490px]">
          <h1 className="relative text-[46px] laptop:text-6xl laptop:leading-[68px] text-dark-blue-80 font-extrabold mt-8 desktop:pt-20 z-10">
            One More Friend
          </h1>
          <h2 className="text-[28px] leading-[38px] font-bold laptop:text-[46px]  laptop:leading-[60px] text-dark-blue-80">
            Thousands More Fun!
          </h2>
          <p className="text-xs laptop:text-base text-neural-color-80 font-medium mt-4 laptop:mt-6">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </p>
          <div className="flex mt-8 laptop:mt-10 gap-5 laptop:gap-7">
            <button className="flex items-center gap-2 border border-dark-blue-00 text-dark-blue-00 font-semi text-base rounded-[57px] py-[14px] px-7 font-medium">
              View Intro
              <Image
                width={20}
                height={20}
                src="/images/play-button-icon.png"
                alt=""
              />
            </button>
            <button className="flex items-center gap-1 border border-dark-blue-00 text-neural-color-00 font-semi text-base rounded-[57px] py-[14px] px-7 bg-dark-blue-00 font-medium">
              Explore Now
            </button>
          </div>
        </div>
        <div className="hidden absolute laptop:flex justify-end -translate-y-4 right-0 rounded-b-[20px] laptop:mt-[185px] desktop:mt-8 desktop2k:mt-0">
          <Image
            decoding="async"
            data-nimg="1"
            width={400}
            height={400}
            className="h-full w-full laptop:w-[70%] desktop:w-[95%] desktop2k:w-full"
            src="/images/women-with-dog.svg"
            alt=""
          />
        </div>
        <Image
          width={400}
          height={400}
          decoding="async"
          data-nimg="1"
          className="relative laptop:hidden mt-4 rounded-b-[20px]"
          src="/images/women-with-dog-mobile.svg"
          alt=""
        />
      </div>
    </header>
  );
}

export default Header;
