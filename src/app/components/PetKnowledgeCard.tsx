import Image from "next/image";
import React from "react";
import { IPetKnowledge } from "../data/pets.interface";

function PetKnowledgeCard({ petKnowlegde }: { petKnowlegde: IPetKnowledge }) {
  return (
    <div className="w-full laptop:w-max-[380px] h-[424px] p-2 rounded-xl bg-white shadow-sm gap-2 flex flex-col">
      <Image
        className="rounded-[10px]"
        width={380}
        height={380}
        src={petKnowlegde.imageSource}
        alt=""
      />
      <div className="p-2">
        <div className="flex flex-col gap-[10px]">
          <div>
            <button className=" bg-blue-sea py-1 px-[10px] text-[10px] leading-[16px]  text-neural-color-00 rounded-[28px]">
              Pet knowledge
            </button>
          </div>
          <div className="flex flex-col gap-[6px] overflow-auto h-[114px]">
            <p className=" text-neural-color-100 text-base font-bold">
              {petKnowlegde.title}
            </p>
            <p className="text-sm font-normal text-neural-color-80">
              {petKnowlegde.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PetKnowledgeCard;
