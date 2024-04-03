import React from "react";
import ToysCard from "./ToysCard";
import { toysList } from "../data/pets";
import Image from "next/image";

function PetToys() {
  return (
    <section className="mt-[60px]">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-[2px]">
          <p className="text-base font-medium text-black">
            Hard to choose right products for your pets?
          </p>
          <p className=" text-2xl text-dark-blue-00 font-bold">Our Products</p>
        </div>
        <button className="hidden laptop:flex items-center gap-2 border-[1.5px] border-dark-blue-00 text-dark-blue-00 font-semi text-sm rounded-[57px] py-3 px-7  font-medium">
          View More
          <Image
            width={20}
            height={20}
            src="/images/arrow-right-icon.svg"
            alt=""
          />
        </button>
      </div>
      <div className="flex justify-center">
        <div className="grid laptop:grid-cols-4 grid-cols-2 gap-4 mt-10">
          {toysList.map((item, index) => {
            return <ToysCard key={index} toysDetails={item} />;
          })}
        </div>
      </div>
      <button className="flex laptop:hidden w-full text-center justify-center mt-4 border-[1.5px] items-center gap-2 border-dark-blue-00 text-dark-blue-00 font-semi text-base rounded-[57px] py-[14px] px-7 font-medium">
        View More
        <Image
          width={20}
          height={20}
          src="/images/arrow-right-icon.svg"
          alt=""
        />
      </button>
    </section>
  );
}

export default PetToys;
