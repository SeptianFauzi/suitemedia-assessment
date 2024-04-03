import Image from "next/image";
import React from "react";

function PetSellers() {
  return (
    <section className="laptop:mt-32 mt-10">
      <div className="flex justify-between items-end">
        <div className="flex items-end gap-2">
          <p className="text-base font-medium text-black">
            Proud to be part of
          </p>
          <p className=" text-2xl text-dark-blue-00 font-bold">Pet Sellers</p>
        </div>
        <button className="hidden laptop:flex items-center gap-2 border border-dark-blue-00 text-dark-blue-00 font-semi text-sm rounded-[57px] py-3 px-7  font-medium">
          View all our sellers
          <Image
            width={20}
            height={20}
            src="/images/arrow-right-icon.svg"
            alt=""
          />
        </button>
      </div>
      <div className="flex justify-center">
        <div className="grid laptop:grid-cols-7 grid-cols-3 mt-4">
          <Image
            width={200}
            height={200}
            className="hover:cursor-pointer"
            src="/images/pet-sellers-1.svg"
            alt=""
          />
          <Image
            width={200}
            height={200}
            className="hover:cursor-pointer"
            src="/images/pet-sellers-2.svg"
            alt=""
          />
          <Image
            width={200}
            height={200}
            className="hover:cursor-pointer"
            src="/images/pet-sellers-3.svg"
            alt=""
          />
          <Image
            width={200}
            height={200}
            className="hover:cursor-pointer"
            src="/images/pet-sellers-4.svg"
            alt=""
          />
          <Image
            width={200}
            height={200}
            className="hover:cursor-pointer"
            src="/images/pet-sellers-5.svg"
            alt=""
          />
          <Image
            width={200}
            height={200}
            className="hover:cursor-pointer"
            src="/images/pet-sellers-6.svg"
            alt=""
          />
          <Image
            width={200}
            height={200}
            className="hover:cursor-pointer"
            src="/images/pet-sellers-7.svg"
            alt=""
          />
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

export default PetSellers;
