import { BlogType } from "../../../types/type";
import DescCard from "./DescCard";

interface SpotlightCardsProps {
  data: BlogType[];
}

// Spotlight Cards for Blog Listing Page
// Takes data:BlogType[] as props
const SpotlightCards: React.FC<SpotlightCardsProps> = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto mt-16">
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
            <DescCard data={ele} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default SpotlightCards;
