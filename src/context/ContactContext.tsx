import { createContext, useState, ReactNode } from "react";
import { FAQS, HELP_DESK } from "../../src/utils/mock";
import { FaqType, HelpDeskType } from "../types/type";

interface ContactContextType {
  helpDesk: HelpDeskType[];
  setHelpDesk: React.Dispatch<React.SetStateAction<HelpDeskType[]>>;
  faq: FaqType[];
  setFaq: React.Dispatch<React.SetStateAction<FaqType[]>>;
}

const defaultContextValue: ContactContextType = {
  helpDesk: [],
  setHelpDesk: () => {},
  faq: [],
  setFaq: () => {},
};

// Context Provider for Contact Context
// Takes children as props
// Returns the context value with the helpDesk and faq data
export const ContactContext =
  createContext<ContactContextType>(defaultContextValue);

export const ContactProvider = ({ children }: { children: ReactNode }) => {
  // for now as the data is static, we are using the mock data
  const [helpDesk, setHelpDesk] = useState<HelpDeskType[]>(HELP_DESK);
  const [faq, setFaq] = useState<FaqType[]>(FAQS);

  return (
    <ContactContext.Provider value={{ helpDesk, setHelpDesk, faq, setFaq }}>
      {children}
    </ContactContext.Provider>
  );
};
