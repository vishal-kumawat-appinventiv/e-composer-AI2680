import React from "react";
import { BlogType } from "../../../utils/mock";

interface SpotlightBannerProps {
  data: BlogType;
}

const SpotlightBanner: React.FC<SpotlightBannerProps> = ({ data }) => {
  return (
    <>
      <div className="overflow-hidden w-full mt-[-120px] lg:mt-[-90px] mx-auto z-10 relative">
        <img
          src={data?.img}
          alt="Spotlight-img"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="bottomCard flex flex-col gap-3 items-center justify-center max-w-4xl mx-auto bg-white mt-[-10px] lg:mt-[-100px] z-20 relative rounded-xl p-8">
        <p className="text-sm font-bold">{data.date}</p>
        <h1 className="text-2xl lg:text-4xl text-black hover:text-red-400 text-center">
          {data.title}
        </h1>
        <p className="text-sm text-[#878787] text-center w-full lg:max-w-[75%]">
          {data.desc}
        </p>
        <div className="flex gap-4 items-center justify-center">
          {data.tag.map((tag, index) => (
            <button
              key={index}
              className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default React.memo(SpotlightBanner);
