import React from "react";
import PetOverViewCard from "./PetOverViewCard";
import { petOverview } from "../data/pets";
import Image from "next/image";

function PetOverView() {
  return (
    <section className="mt-10 laptop:mt-[60px]">
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-[2px]">
          <p className="text-sm laptop:text-base font-medium text-black">
            Whats new?
          </p>
          <p className="text-xl laptop:text-2xl text-dark-blue-00 font-bold">
            Take A Look At Some Our Pets
          </p>
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
        <div className="grid grid-cols-2 laptop:grid-cols-4 gap-4 laptop:mt-10 mt-4">
          {petOverview.map((item, index) => {
            return <PetOverViewCard key={index} petsDetail={item} />;
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

export default PetOverView;
