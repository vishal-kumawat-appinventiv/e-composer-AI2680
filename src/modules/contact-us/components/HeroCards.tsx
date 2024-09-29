import { CONTACT_US_HERO_CARDS } from "../../../utils/mock";

const HeroCards = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 w-full px-4">
      {CONTACT_US_HERO_CARDS.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </section>
  );
};

export default HeroCards;

interface CardProps {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: string;
}

const Card: React.FC<CardProps> = ({
  icon,
  title,
  description,
  buttonText,
  buttonIcon,
}) => {
  return (
    <div className="bg-white flex flex-col p-4 justify-center items-center gap-3 h-full w-full overflow-hidden rounded-xl border-2">
      <i className={icon}></i>
      <h4 className="text-2xl text-black">{title}</h4>
      <p className="text-sm text-gray-500">{description}</p>
      <button className="text-white bg-black py-2 px-4 rounded-l-full rounded-r-full hover:bg-purple-200 hover:text-black transition-colors duration-500">
        {buttonText} <i className={buttonIcon}></i>
      </button>
    </div>
  );
};
