export type DisplayType = "Fashion" | "Lifestyle" | "Spotlight";
export type TagType = "DESIGN" | "LIFESTYLE" | "FASHION";

export interface RoutesType {
  path: string;
  component: React.FC;
  isPrivate: boolean;
}

export interface BlogType {
  id: number;
  img: string;
  date: string;
  title: string;
  desc: string;
  tag: TagType[];
  display: DisplayType;
  banner: boolean;
}

export interface HelpDeskType {
  id: number;
  img: string;
  title: string;
  desc: string;
}

export interface FaqType {
  q: string;
  ans: string;
}

export interface OtherQuestionsType {
  img: string;
  title: string;
  desc: string;
}

export interface FooterLinkType {
  title: string;
  links: string[];
}

export interface ContactUsHeroCardType {
  id: number;
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: string;
}

export interface ContactUsFooterCompanyType {
  img: string;
  email: string;
  phone: string;
  desc: string;
}
