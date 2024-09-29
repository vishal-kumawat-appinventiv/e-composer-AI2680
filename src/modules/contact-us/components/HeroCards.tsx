import {
  CONTACT_US_HERO_CARDS,
  ContactUsHeroCardType,
} from "../../../utils/mock";

const HeroCards = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full px-4">
      {CONTACT_US_HERO_CARDS.map((card) => (
        <Card key={card.id} ele={card} />
      ))}
    </section>
  );
};

export default HeroCards;

interface CardProps {
  ele: ContactUsHeroCardType;
}

const Card: React.FC<CardProps> = ({ ele }) => {
  return (
    <div className="bg-white flex flex-col p-4 juele?.stify-center items-center gap-3 h-full w-full overflow-hidden rounded-xl border-2">
      <i className={ele?.icon}></i>
      <h4 className="text-2xl text-black">{ele?.title}</h4>
      <p className="text-sm text-gray-500">{ele?.description}</p>
      <button className="text-white bg-black py-2 px-4 rounded-l-full rounded-r-full hover:bg-purple-200 hover:text-black transition-colors duration-500">
        {ele?.buttonText} <i className={ele?.buttonIcon}></i>
      </button>
    </div>
  );
};
