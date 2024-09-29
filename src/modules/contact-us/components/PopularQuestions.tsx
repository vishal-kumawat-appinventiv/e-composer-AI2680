import React, { useState } from "react";
import { faqs } from "../../../utils/mock";

const PopularAskedQuestions: React.FC = () => {
  return (
    <>
      <section className="bg-[#e0e0ff] w-full py-20 mb-20 px-4">
        <div className="text-center mb-10 w-full">
          <h1 className="text-2xl lg:text-4xl text-black">
            Popular Searched Questions
          </h1>
        </div>
        <div className="p-4 max-w-7xl mx-auto border rounded-2xl bg-white">
          {faqs.map((faq, index) => (
            <QuestionBox key={index} faq={faq} index={0} />
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularAskedQuestions;

interface Props {
  faq: any;
  index: number;
}

const QuestionBox: React.FC<Props> = ({ faq, index }) => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div className="border-b pb-4 p-4 lg:p-8">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => toggleFAQ(index)}
      >
        <p className="text-lg lg:text-2xl text-gray-600 cursor-pointer hover:text-black">
          {faq.q}
        </p>
        <button className="border border-gray-400 rounded-full p-1 lg:p-2 px-2 lg:px-3 hover:bg-purple-200 hover:text-black transition-colors duration-500 hover:border-transparent">
          {open === index ? (
            <i className="bi bi-chevron-up"></i>
          ) : (
            <i className="bi bi-chevron-down"></i>
          )}
        </button>
      </div>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open === index ? "max-h-52" : "max-h-0"
        }`}
      >
        <p className="mt-2 text-gray-600">{faq.ans}</p>
      </div>
    </div>
  );
};
