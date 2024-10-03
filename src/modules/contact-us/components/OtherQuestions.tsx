import React from "react";
import { OTHER_QUESTIONS } from "../../../utils/mock";
import { OtherQuestionsType } from "../../../types/type";

// Other Questions for Contact Us Page
// static data
const OtherQuestions: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-10 mb-32">
      <Heading />
      <div className="border rounded-xl grid grid-cols-2 lg:grid-cols-4 gap-4 w-full p-4 mt-20">
        {OTHER_QUESTIONS.map((ele, index: number) => (
          <OuestionCard
            key={index}
            ele={ele}
            borderStatus={index % 2 === 0}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default OtherQuestions;

// Heading for Other Questions
const Heading: React.FC = () => {
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
  borderStatus: boolean;
  index: number;
}

// Each Question Card for Other Questions Component
// takes element and index as props
const OuestionCard: React.FC<OuestionCardProps> = ({
  ele,
  borderStatus,
  index,
}) => {
  return (
    <div
      className={`flex flex-col gap-3 items-center justify-center w-full 
      ${borderStatus && "border-r-2"} ${index === 1 && "lg:border-r-2"}
      `}
    >
      <img
        src={ele?.img}
        alt="img"
        className="w-10 h-10 lg:w-16 lg:h-16 object-cover"
      />
      <h2 className="text-black text-2xl lg:text-3xl">{ele?.title}</h2>
      <h5 className="text-black underline hover:text-red-500">{ele?.desc}</h5>
    </div>
  );
};
