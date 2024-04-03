import React from "react";
import { IPetsDetails } from "../data/pets.interface";
import Image from "next/image";

function PetOverViewCard({ petsDetail }: { petsDetail: IPetsDetails }) {
  return (
    <div className="w-full laptop:w-max-[280px] p-2 rounded-xl bg-white shadow-sm gap-2 flex flex-col">
      <Image width={280} height={280} src={petsDetail.imageSource} alt="" />
      <div className="p-2">
        <div className="flex flex-col gap-1">
          <p className="text-sm laptop:text-base font-bold text-neural-color-100">
            {petsDetail.name}
          </p>
          <div className="flex flex-col laptop:flex-row gap-1">
            <div className="flex gap-[6px] items-center">
              <p className="font-medium text-xs text-neural-color-60">Gene: </p>
              <p className="font-bold text-xs text-neural-color-60">
                {petsDetail.gender}
              </p>
            </div>
            <p className="text-neural-color-60 size-4 hidden laptop:flex items-center justify-center">
              ·
            </p>
            <div className="flex gap-[6px] items-center">
              <p className="font-medium text-xs text-neural-color-60">Age: </p>
              <p className="font-bold text-xs text-neural-color-60">
                {petsDetail.age} Months
              </p>
            </div>
          </div>
          <p className="font-bold text-sm text-neural-color-100">
            {petsDetail.price.toLocaleString("id-ID")} VND
          </p>
        </div>
      </div>
    </div>
  );
}

export default PetOverViewCard;
