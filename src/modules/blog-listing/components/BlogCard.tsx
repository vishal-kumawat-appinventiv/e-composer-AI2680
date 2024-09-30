import { BlogType } from "../../../utils/mock";
import React from "react";

const BlogCard = ({ data }: { data: BlogType }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[34%_63%] gap-4 w-full">
      <img
        src={data?.img}
        alt="fashion-img"
        className="w-full h-full object-cover rounded-xl"
      />
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
    </div>
  );
};

export default React.memo(BlogCard);
