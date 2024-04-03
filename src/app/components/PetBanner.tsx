import Image from "next/image";
import React from "react";

function PetBanner() {
  return (
    <section className="laptop:mt-[60px] mt-10">
      <div className="laptop:h-[378px] h-full rounded-[20px] laptop:bg-[url(/images/banner-2.svg)] bg-[url(/images/banner-2-mobile.svg)] bg-no-repeat bg-cover bg-dark-blue-00 -z-10">
        <div className="flex flex-col-reverse laptop:flex-row z-10 justify-around items-center h-full">
          <Image
            width={500}
            height={500}
            className="hidden laptop:flex z-20 pt-14 w-full laptop:w-max h-full"
            src="/images/adult-girl.png"
            alt=""
          />
          <Image
            width={380}
            height={380}
            className="laptop:hidden flex relative z-20 w-full tablet:w-[80%] laptop:w-min"
            src="/images/adult-girl-mobile.png"
            alt=""
          />
          <div className="laptop:max-w-[490px] items-center laptop:items-end flex flex-col relative laptop:text-right">
            <h1 className="text-4xl text-center laptop:text-right laptop:text-[52px] leading-[54px] laptop:leading-[68px] text-dark-blue-80 font-extrabold mt-7 laptop:mt-6 z-10">
              One More Friend
            </h1>
            <h2 className=" text-2xl leading-[36px] laptop:text-4xl font-bold laptop:leading-[60px] text-dark-blue-00">
              Thousands more fun!
            </h2>
            <p className="laptop:max-w-[394px]  text-xs laptop:text-right  text-center laptop:px-0 px-5 text-neural-color-80 font-medium mt-2">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </p>
            <div className="flex mt-7 gap-7 items-center">
              <button className="flex items-center gap-2 border border-dark-blue-00 text-dark-blue-00 font-semi text-base rounded-[57px] py-[14px] px-7 font-medium">
                View Intro
                <Image
                  width={10}
                  height={10}
                  src="/images/play-button-icon.png"
                  alt=""
                />
              </button>
              <button className="flex items-center gap-1 border border-dark-blue-00 text-neural-color-00 font-semi text-base rounded-[57px] py-[14px] px-7 bg-dark-blue-00 font-medium">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PetBanner;
