import { SPOTLIGHT_IMG_1 } from "../../../utils/mock";

const Spotlight = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 relative">
      <div className="relative bg-[#f4f4f4] w-[85%] mx-auto text-center py-24 rounded-r-full rounded-l-full">
        <h1 className="absolute top-7 left-1/2 -translate-x-1/2 text-2xl lg:text-5xl text-black">
          Spotlight
        </h1>
      </div>

      <div className="overflow-hidden w-full mt-[-120px] lg:mt-[-90px] mx-auto z-10 relative">
        <img
          src={SPOTLIGHT_IMG_1}
          alt="Spotlight-img"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      <div className="bottomCard flex flex-col gap-3 items-center justify-center max-w-4xl mx-auto bg-white mt-[-10px] lg:mt-[-100px] z-20 relative rounded-xl p-8">
        <p className="text-sm font-bold">By Admin Dinh / in May 9, 2023</p>
        <h1 className="text-2xl lg:text-4xl text-black hover:text-red-400 text-center">
          Travel Tales and Cultural Immersion
        </h1>
        <p className="text-sm text-[#878787] text-center">
          Forget the tourist hotspots and explore the road less traveled as we
          uncover hidden gems around the world. From enchanting small towns
          and...
        </p>
        <div className="flex gap-4 items-center justify-center">
          <button className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2">
            DESIGN
          </button>
          <button className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2">
            LIFESTYLE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Spotlight;
