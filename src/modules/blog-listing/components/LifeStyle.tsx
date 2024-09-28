import {
  LIFE_STYLE_IMG_1,
  LIFE_STYLE_IMG_2,
  LIFE_STYLE_IMG_3,
  LIFE_STYLE_IMG_4,
  LIFE_STYLE_IMG_5,
} from "../../../utils/mock";

const LifeStyle = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 mb-20">
      <div className="flex gap-3 items-center my-6">
        <div className="rounded-l-full rounded-r-full overflow-hidden">
          <img
            src={LIFE_STYLE_IMG_1}
            alt="fashion-img"
            className="w-full h-full object-cover "
          />
        </div>
        <h1 className="text-3xl lg:text-5xl text-black">Lifestyle</h1>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="col1 flex flex-col gap-3 h-full w-full overflow-hidden">
          <img
            src={LIFE_STYLE_IMG_2}
            alt="fashion-img"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="flex items-center justify-between w-full">
            <p className="text-sm font-bold">By Admin Dinh / in May 9, 2023</p>
            <i className="bi bi-arrow-up-right text-black hover:text-red-500 cursor-pointer"></i>
          </div>
          <h4 className="text-black text-xl hover:text-red-500 cursor-pointer">
            Embracing Mindfulness in a Busy World
          </h4>
          <p className="text-gray-500 text-sm box-border">
            we delve into the importance of incorporating mindfulness practices
            into our daily lives. Discover tips for finding inner peace,
            reducing stress, and cultivating...
          </p>
          <div className="flex gap-4 items-center w-full">
            <button className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2">
              LIFESTYLE
            </button>
          </div>
        </div>
        <div className="col2 flex flex-col gap-3 h-full w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[34%_63%] gap-4 w-full">
            <img
              src={LIFE_STYLE_IMG_3}
              alt="fashion-img"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-center justify-between w-full">
                <p className="text-sm font-bold">
                  By Admin Dinh / in May 9, 2023
                </p>
                <i className="bi bi-arrow-up-right text-black hover:text-red-500 cursor-pointer"></i>
              </div>
              <h4 className="text-black text-xl hover:text-red-500 cursor-pointer">
                Travel Tales and Cultural Immersion
              </h4>
              <p className="text-gray-500 text-sm box-border">
                Join us on a journey around the globe as we explore different...
              </p>
              <div className="flex gap-4 items-center w-full">
                <button className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2">
                  DESIGN
                </button>
                <button className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2">
                  LIFESTYLE
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[34%_63%] gap-4 w-full">
            <img
              src={LIFE_STYLE_IMG_4}
              alt="fashion-img"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-center justify-between w-full">
                <p className="text-sm font-bold">
                  By Admin Dinh / in May 9, 2023
                </p>
                <i className="bi bi-arrow-up-right text-black hover:text-red-500 cursor-pointer"></i>
              </div>
              <h4 className="text-black text-xl hover:text-red-500 cursor-pointer">
                Embracing Minimalism and Decluttering
              </h4>
              <p className="text-gray-500 text-sm box-border">
                In a world of constant consumerism, this blog invites you to
                simplify...
              </p>
              <div className="flex gap-4 items-center w-full">
                <button className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2">
                  DESIGN
                </button>
                <button className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2">
                  LIFESTYLE
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[34%_63%] gap-4 w-full">
            <img
              src={LIFE_STYLE_IMG_5}
              alt="fashion-img"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="flex flex-col gap-3 w-full">
              <div className="flex items-center justify-between w-full">
                <p className="text-sm font-bold">
                  By Admin Dinh / in May 9, 2023
                </p>
                <i className="bi bi-arrow-up-right text-black hover:text-red-500 cursor-pointer"></i>
              </div>
              <h4 className="text-black text-xl hover:text-red-500 cursor-pointer">
                Exploring Healthy Habits and Holistic Wellness
              </h4>
              <p className="text-gray-500 text-sm box-border">
                Dive into a world of holistic wellness as we explore nourishing
                habits...
              </p>
              <div className="flex gap-4 items-center w-full">
                <button className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2">
                  LIFESTYLE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LifeStyle;
