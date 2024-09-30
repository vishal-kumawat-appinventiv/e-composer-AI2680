import React, { useContext, useState } from "react";
import { FAQS, FaqType } from "../../../utils/mock";
import { ContactContext } from "../../../context/ContactContext";

const PopularAskedQuestions: React.FC = () => {
  const { faq } = useContext(ContactContext);

  return (
    <>
      <section className="bg-[#e0e0ff] w-full py-20 mb-20 px-4">
        <div className="text-center mb-10 w-full">
          <h1 className="text-2xl lg:text-4xl text-black">
            Popular Searched Questions
          </h1>
        </div>
        <div className="p-4 max-w-7xl mx-auto border rounded-2xl bg-white">
          {faq.map((faq, index: number) => (
            <QuestionBox key={index} faq={faq} index={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularAskedQuestions;

interface Props {
  faq: FaqType;
  index: number;
}

const QuestionBox: React.FC<Props> = ({ faq, index }) => {
  const [open, setOpen] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div
      className={`${index !== FAQS.length - 1 && "border-b"} pb-4 p-4 lg:p-8`}
    >
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
        className={`overflow-hidden transition-all duration-400 ${
          open === index ? "max-h-52" : "max-h-0"
        }`}
      >
        <p className="mt-2 text-gray-600">{faq.ans}</p>
      </div>
    </div>
  );
};
