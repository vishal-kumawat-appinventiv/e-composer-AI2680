import { OTHER_QUESTIONS, OtherQuestionsType } from "../../../utils/mock";

const OtherQuestions = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10 mb-20">
      <Heading />
      <div className="border rounded-xl grid grid-cols-2 lg:grid-cols-4 gap-4 w-full p-4 mt-20">
        {OTHER_QUESTIONS.map((ele, index: number) => (
          <OuestionCard key={index} ele={ele} index={index} />
        ))}
      </div>
    </section>
  );
};

export default OtherQuestions;

const Heading = () => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center w-full mb-10">
      <h1 className="text-2xl lg:text-4xl text-black">Any other questions?</h1>
      <p className="text-black text-sm lg:text-lg px-5">
        We're here to help. You can contact us: Weekdays: 6am to 6pm PT,
        Weekends: 6am to 6pm PT.
      </p>
    </div>
  );
};

interface OuestionCardProps {
  ele: OtherQuestionsType;
  index: number;
}

const OuestionCard: React.FC<OuestionCardProps> = ({ ele, index }) => {
  return (
    <div
      className={`flex flex-col gap-3 items-center justify-center w-full ${
        OTHER_QUESTIONS.length - 1 !== index ? "border-r-2" : ""
      }`}
    >
      <img src={ele?.img} alt="img" className="w-16 h-16 object-cover" />
      <h2 className="text-black text-2xl lg:text-3xl">{ele?.title}</h2>
      <h5 className="text-black underline hover:text-red-500">{ele?.desc}</h5>
    </div>
  );
};
