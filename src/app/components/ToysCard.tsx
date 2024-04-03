import React from "react";
import { IToysList } from "../data/pets.interface";
import Image from "next/image";

function ToysCard({ toysDetails }: { toysDetails: IToysList }) {
  return (
    <div className="w-max-[280px] p-2 rounded-xl bg-white shadow-sm gap-2 flex flex-col">
      <Image
        className="rounded-[10px]"
        width={280}
        height={280}
        src={toysDetails.imageSource}
        alt=""
      />
      <div className="p-2 flex flex-col justify-between h-full">
        <div className="flex flex-col gap-1">
          <p className="text-base font-bold text-neural-color-100">
            {toysDetails.name}
          </p>
          <div className="flex gap-1 flex-col laptop:flex-row">
            <div className="flex gap-[6px] items-center">
              <p className="font-medium text-xs text-neural-color-60">
                Product:{" "}
              </p>
              <p className="font-bold text-xs text-neural-color-60">
                {toysDetails.product}
              </p>
            </div>
            {toysDetails.size && (
              <>
                <p className="text-neural-color-60 hidden laptop:flex size-4  items-center justify-center">
                  ·
                </p>
                <div className="flex gap-[6px] items-center">
                  <p className="font-medium text-xs text-neural-color-60">
                    Size:{" "}
                  </p>
                  <p className="font-bold text-xs text-neural-color-60">
                    {toysDetails.size}
                  </p>
                </div>
              </>
            )}
          </div>
          <p className="font-bold text-sm text-neural-color-100">
            {toysDetails.price.toLocaleString("id-ID")} VND
          </p>
        </div>
        <button className="flex mt-1 bg-yellow-40 laptop:gap-[2px] gap-2  rounded-lg px-[10px] py-[6px] laptop:text-nowrap text-wrap text-sm font-bold items-center">
          <Image width={20} height={20} src="/images/gift-icon.svg" alt="" />
          <div className="hidden laptop:flex items-center justify-center px-2">
            ·
          </div>
          <span className="flex laptop:justify-center text-left laptop:text-center items-center">
            {toysDetails.bonus}
          </span>
        </button>
      </div>
    </div>
  );
}

export default ToysCard;
