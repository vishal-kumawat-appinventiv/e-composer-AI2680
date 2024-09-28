import {
  MIDDLE_CARDS_IMG_1,
  MIDDLE_CARDS_IMG_2,
  MIDDLE_CARDS_IMG_3,
} from "../../../utils/mock";

const MiddleCards = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        <Card1 />
        <Card2 />
        <Card3 />
      </section>
    </div>
  );
};

export default MiddleCards;

const Card1 = () => {
  return (
    <div className="col1 flex flex-col gap-3 h-full w-full overflow-hidden">
      <img
        src={MIDDLE_CARDS_IMG_1}
        alt="fashion-img"
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="flex items-center justify-between w-full">
        <p className="text-sm font-bold">By Admin Dinh / in May 9, 2023</p>
        <i className="bi bi-arrow-up-right text-black hover:text-red-500 cursor-pointer"></i>
      </div>
      <h4 className="text-black text-xl hover:text-red-500 cursor-pointer">
        Celebrating Artistic Visionaries
      </h4>
      <p className="text-gray-500 text-sm box-border">
        In this blog, we turn our attention to the world of art and creativity,
        showcasing...
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
  );
};

const Card2 = () => {
  return (
    <div className="col1 flex flex-col gap-3 h-full w-full overflow-hidden">
      <img
        src={MIDDLE_CARDS_IMG_2}
        alt="fashion-img"
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="flex items-center justify-between w-full">
        <p className="text-sm font-bold">By Admin Dinh / in May 9, 2023</p>
        <i className="bi bi-arrow-up-right text-black hover:text-red-500 cursor-pointer"></i>
      </div>
      <h4 className="text-black text-xl hover:text-red-500 cursor-pointer">
        Cutting-Edge Technologies and Ideas
      </h4>
      <p className="text-gray-500 text-sm box-border">
        Join us on a journey through the world of innovation as we highlight
        groundbreaking technologies,...
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
  );
};

const Card3 = () => {
  return (
    <div className="col1 flex flex-col gap-3 h-full w-full overflow-hidden">
      <img
        src={MIDDLE_CARDS_IMG_3}
        alt="fashion-img"
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="flex items-center justify-between w-full">
        <p className="text-sm font-bold">By Admin Dinh / in May 9, 2023</p>
        <i className="bi bi-arrow-up-right text-black hover:text-red-500 cursor-pointer"></i>
      </div>
      <h4 className="text-black text-xl hover:text-red-500 cursor-pointer">
        Stories of Triumph and Resilience
      </h4>
      <p className="text-gray-500 text-sm box-border">
        we shine a spotlight on individuals who have overcome adversity,
        achieved remarkable success, or made...
      </p>
      <div className="flex gap-4 items-center w-full">
        <button className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2">
          DESIGN
        </button>
      </div>
    </div>
  );
};
