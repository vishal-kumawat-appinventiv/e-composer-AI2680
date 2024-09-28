import { HERO_IMG_1, HERO_IMG_2 } from "../utils/mock";

const HeroSection = () => {
  return (
    <>
      <section className="p-4 w-full box-border">
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-4 w-full max-w-full overflow-hidden">
          <div className="col1 max-h-[95vh] rounded-xl overflow-hidden">
            <img
              src={HERO_IMG_1}
              alt="hero-img"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="col2 flex flex-col justify-center gap-6 h-full w-full min-w-0 overflow-hidden">
            <div className="bg-[#bde48a] flex-grow h-[50%] lg:h-[30%] w-full rounded-xl">
              HELLO WORLD
            </div>
            <div className="flex-grow h-[50%] lg:h-[70%] rounded-xl overflow-hidden">
              <img
                src={HERO_IMG_2}
                alt="hero-img2"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
