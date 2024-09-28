import {
  FASHION_IMG_1,
  FASHION_IMG_2,
  FASHION_IMG_3,
  FASHION_IMG_4,
  FASHION_IMG_5,
} from "../../../utils/mock";

const Fashion = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 my-12">
      <div className="flex gap-3 items-center my-6">
        <div className="rounded-l-full rounded-r-full overflow-hidden">
          <img
            src={FASHION_IMG_1}
            alt="fashion-img"
            className="w-full h-full object-cover "
          />
        </div>
        <h1 className="text-3xl lg:text-5xl text-black">Fashion</h1>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <div className="col1 flex flex-col gap-3 h-full w-full overflow-hidden">
          <img
            src={FASHION_IMG_2}
            alt="fashion-img"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="flex items-center justify-between w-full">
            <p className="text-sm font-bold">By Admin Dinh / in May 9, 2023</p>
            <i className="bi bi-arrow-up-right text-black hover:text-red-500 cursor-pointer"></i>
          </div>
          <h4 className="text-black text-xl hover:text-red-500 cursor-pointer">
            Here's why you should try mood
          </h4>
          <p className="text-gray-500 text-sm box-border">
            But they weren't the only ones to lean into the high octane trend,
            with MoschinoCersace and Jil Sander plumping for bold prints...
          </p>
          <div className="flex gap-4 items-center w-full">
            <button className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2">
              DESIGN
            </button>
            <button className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2">
              FASHION
            </button>
          </div>
        </div>
        <div className="col2 flex flex-col gap-3 h-full w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-[33%_64%] gap-4 w-full">
            <img
              src={FASHION_IMG_3}
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
                Your Guide to Fashion Forward Living
              </h4>
              <p className="text-gray-500 text-sm box-border">
                Cersace and Jil Sander plumping for bold prints, from colourful
                stripes to...
              </p>
              <div className="flex gap-4 items-center w-full">
                <button className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2">
                  DESIGN
                </button>
                <button className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2">
                  FASHION
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[33%_64%] gap-4 w-full">
            <img
              src={FASHION_IMG_4}
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
                Where Style and Creativity Collide
              </h4>
              <p className="text-gray-500 text-sm box-border">
                Cersace and Jil Sander plumping for bold prints, from colourful
                stripes to...
              </p>
              <div className="flex gap-4 items-center w-full">
                <button className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2">
                  DESIGN
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[33%_64%] gap-4 w-full">
            <img
              src={FASHION_IMG_5}
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
                Unveiling the Latest Fashion Trends
              </h4>
              <p className="text-gray-500 text-sm box-border">
                Cersace and Jil Sander plumping for bold prints, from colourful
                stripes to...
              </p>
              <div className="flex gap-4 items-center w-full">
                <button className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2">
                  DESIGN
                </button>
                <button className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2">
                  FASHION
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Fashion;
