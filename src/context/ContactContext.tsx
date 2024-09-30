import { createContext, useState, ReactNode } from "react";
import { FAQS, FaqType, HELP_DESK, HelpDeskType } from "../../src/utils/mock";

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

export const ContactContext =
  createContext<ContactContextType>(defaultContextValue);

export const ContactProvider = ({ children }: { children: ReactNode }) => {
  const [helpDesk, setHelpDesk] = useState<HelpDeskType[]>(HELP_DESK);
  const [faq, setFaq] = useState<FaqType[]>(FAQS);

  return (
    <ContactContext.Provider value={{ helpDesk, setHelpDesk, faq, setFaq }}>
      {children}
    </ContactContext.Provider>
  );
};
