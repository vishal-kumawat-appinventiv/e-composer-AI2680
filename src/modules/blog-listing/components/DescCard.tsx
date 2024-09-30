import React from "react";
import { BlogType } from "../../../types/type";

interface DescProps {
  data: BlogType;
}

// Description Box Card for Blog Listing Page
// Takes data:BlogType as props
// Generic compoent for all the cards
const DescCard: React.FC<DescProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center justify-between w-full">
        <p className="text-sm font-bold">{data?.date}</p>
        <i className="bi bi-arrow-up-right text-black hover:text-red-500 cursor-pointer"></i>
      </div>
      <h4 className="text-black text-xl hover:text-red-500 cursor-pointer">
        {data?.title}
      </h4>
      <p className="text-gray-500 text-sm box-border">{data?.desc}</p>
      <div className="flex gap-4 items-center w-full">
        {data?.tag.map((t) => (
          <button
            key={t}
            className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2"
          >
            {t}
          </button>
        ))}
      </div>
    </div>
  );
};

export default React.memo(DescCard);
