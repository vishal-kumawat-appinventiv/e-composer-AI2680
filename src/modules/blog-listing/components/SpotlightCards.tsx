import { BlogType } from "../../../utils/mock";

interface SpotlightCardsProps {
  data: BlogType[];
}

const SpotlightCards: React.FC<SpotlightCardsProps> = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
        {data.map((ele) => (
          <div
            key={ele.id}
            className="col1 flex flex-col gap-3 h-full w-full overflow-hidden"
          >
            <img
              src={ele?.img}
              alt="fashion-img"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="flex items-center justify-between w-full">
              <p className="text-sm font-bold">{ele.date}</p>
              <i className="bi bi-arrow-up-right text-black hover:text-red-500 cursor-pointer"></i>
            </div>
            <h4 className="text-black text-xl hover:text-red-500 cursor-pointer">
              {ele.title}
            </h4>
            <p className="text-gray-500 text-sm box-border">{ele.desc}</p>
            <div className="flex gap-4 items-center w-full">
              {ele?.tag.map((t, index) => (
                <button
                  key={index}
                  className="bg-[#edf1f8] text-black rounded-l-full rounded-r-full text-sm p-1 px-2"
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SpotlightCards;
