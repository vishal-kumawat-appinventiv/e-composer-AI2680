import { HERO_IMG_1, HERO_IMG_2, LOGO_IMG } from "../../../utils/mock";

const HeroSection = () => {
  return (
    <>
      <section className="p-4 w-full box-border">
        <div className="grid grid-cols-1 lg:grid-cols-[70%_29%] gap-4 w-full max-w-full overflow-hidden">
          <div className="relative col1 min-h-[50vh] lg:max-h-[90vh] rounded-xl overflow-hidden">
            <img
              src={HERO_IMG_1}
              alt="hero-img"
              className="object-cover w-full h-full -z-10"
            />
            <div className="absolute bottom-5 lg:bottom-16 left-5 lg:left-16 z-10 flex flex-col justify-center gap-3 lg:gap-8 w-full">
              <p className="text-white text-sm">FASHION</p>
              <h1 className="text-white text-3xl lg:text-7xl max-w-[60%]">
                {
                  "Here's what's new in your favourite stores & online this week..."
                }
              </h1>
              <div className="flex gap-3">
                <button className="flex items-center justify-center gap-2 rounded-r-full rounded-l-full py-2 px-4 text-sm font-bold text-white backdrop-blur-sm bg-white/20">
                  <img
                    src={LOGO_IMG}
                    alt="logo"
                    className="w-8 h-8 rounded-full"
                  />
                  Admin Dinh
                </button>
                <button className="p-2 px-4 rounded-full border border-white cursor-pointer hover:bg-red-400">
                  <i className="bi bi-arrow-up-right text-white"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="col2 flex flex-col justify-center gap-6 h-full w-full min-w-0 overflow-hidden">
            <div className="relative bg-[#bde48a] flex-grow h-[35vh] lg:h-[30%] w-full rounded-xl">
              <div className="absolute z-10 top-2 lg:top-5 right-2 lg:right-5">
                <button className="px-3 py-2 border-black border-2 rounded-full">
                  <i className="bi bi-lightning-charge"></i>
                </button>
              </div>
              <div className="absolute bottom-5 left-5 z-10 flex flex-col gap-2 lg:gap-4 font-bold">
                <p className="text-black text-sm">DESIGN</p>
                <h2 className="text-black text-xl lg:text-3xl">
                  Here's what's new in your favourite stores & online this
                  week...
                </h2>
                <button className="text-left underline text-sm text-black">
                  Read more <i className="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
            <div className="relative flex-grow h-[35vh] lg:h-[70%] rounded-xl overflow-hidden">
              <img
                src={HERO_IMG_2}
                alt="hero-img2"
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-6 left-5 z-10 flex flex-col gap-2 lg:gap-4 font-bold">
                <p className="text-white text-sm">FEATURED CATEGORIES</p>
                <h1 className="text-4xl lg:text-6xl font-normal text-white">
                  Lifestyle
                </h1>
                <button className="text-left underline text-sm text-white">
                  Read more <i className="bi bi-arrow-up-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
