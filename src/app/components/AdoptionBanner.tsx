import Image from "next/image";
import React from "react";

function AdoptionBanner() {
  return (
    <section className="mt-10 ">
      <div className="h-max-[378px] rounded-[20px] laptop:bg-[url(/images/banner-3.svg)] bg-[#FFB775] -z-10">
        <div className="flex flex-col-reverse laptop:flex-row z-10 justify-around items-center">
          <div className="max-w-[490px] items-start flex laptop:text-start text-center flex-col relative laptop:pl-8 pl-0 ">
            <div className="flex items-center gap-4 w-full laptop:text-start laptop:justify-start justify-center">
              <h1 className="laptop:text-[52px] text-4xl leading-[68px] text-dark-blue-80 font-extrabold z-10">
                Adoption
              </h1>
              <Image width={50} height={50} src="/images/dog-foot.svg" alt="" />
            </div>
            <h2 className="laptop:text-4xl text-2xl laptop:text-start text-center w-full font-bold leading-[54px] text-dark-blue-00">
              We need help. so do they.
            </h2>
            <p className="max-w-[394px] text-xs text-neural-color-80 font-medium mt-2">
              Adopt a pet and give it a home, it will be love you back \n
              unconditionally.
            </p>
            <div className="flex mt-10 laptop:pb-0 pb-4 gap-7 laptop:justify-start justify-center w-full">
              <button className="flex items-center gap-1 border border-dark-blue-00 text-neural-color-00 font-semi text-base rounded-[57px] py-[14px] px-7 bg-dark-blue-00 font-medium">
                Explore Now
              </button>
              <button className="flex items-center gap-2 border border-dark-blue-00 text-dark-blue-00 font-semi text-base rounded-[57px] py-[14px] px-7 font-medium">
                View Intro
                <Image
                  width={20}
                  height={20}
                  src="/images/play-button-icon.png"
                  alt=""
                />
              </button>
            </div>
          </div>
          <Image
            width={500}
            height={500}
            className="relative z-20"
            src="/images/human-dog.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default AdoptionBanner;
