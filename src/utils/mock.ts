import BlogListing from "../modules/blog-listing";
import ContactUs from "../modules/contact-us";
import NotFound from "../modules/not-found-404";

export const ROUTES = [
  {
    path: "/",
    component: BlogListing,
    isPrivate: true,
  },
  {
    path: "/contact",
    component: ContactUs,
    isPrivate: false,
  },
  {
    path: "/*",
    component: NotFound,
    isPrivate: false,
  },
];

export const HERO_IMG_1 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/bn-bl-1.png?v=1683616783";
export const HERO_IMG_2 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/bn-bl-2.png?v=1683619218";
export const LOGO_IMG =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/users/avatar_250x250_crop_center_7b84e44b-2e69-463a-83d1-09c0337c268c.png?v=1683616182";

export const FASHION_IMG_1 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/img-icon-bl.png?v=1683620903";
export const FASHION_IMG_2 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-4_720x.png?v=1683621391";
export const FASHION_IMG_3 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-3_720x.png?v=1683621366";
export const FASHION_IMG_4 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-2_720x.png?v=1683621336";
export const FASHION_IMG_5 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-1_720x.png?v=1683621301";

export const LIFE_STYLE_IMG_1 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/img-icon-bl2.png?v=1683624622";
export const LIFE_STYLE_IMG_2 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-8_c9accd91-b5cc-4d1c-b7c5-27c324302426_720x.png?v=1683624775";
export const LIFE_STYLE_IMG_3 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-6_720x.png?v=1683624505";
export const LIFE_STYLE_IMG_4 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-7_720x.png?v=1683624537";
export const LIFE_STYLE_IMG_5 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-5_720x.png?v=1683624796";

export const MIDDLE_CARDS_IMG_1 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-11_720x.png?v=1683625649";
export const MIDDLE_CARDS_IMG_2 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-10_720x.png?v=1683625618";
export const MIDDLE_CARDS_IMG_3 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-9_720x.png?v=1683625585";

export const SPOTLIGHT_IMG_1 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-12_1100x.png?v=1683625677";

export const CONTACT_US_IMG_1 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-2RgmJOxbvBbg-hr-search.png?v=1724402439";

export interface HelpDeskType {
  id: number;
  img: string;
  title: string;
  desc: string;
}

export const HELP_DESK: HelpDeskType[] = [
  {
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-TSKqG0pC2uic-hp-1.png?v=1724407135",
    title: "Size Guide",
    desc: "Ensure your customers get the right fit",
  },
  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-ry1vhOiRg8ic-hp-2.png?v=1724407185",
    title: "Loyalty Program",
    desc: "Offer exclusive rewards",
  },
  {
    id: 3,
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-1hx43OngFRic-hp-3.png?v=1724407203",
    title: "Order & Shipping",
    desc: "Looking for your order status",
  },
  {
    id: 4,
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-JYbi3Qpv20ic-hp-4.png?v=1724634293",
    title: "Payment & Gift cards",
    desc: "Wonder of what payment we accept?",
  },
  {
    id: 5,
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-NcXYj3LOv3ic-hp-5.png?v=1724634338",
    title: "Discount Codes",
    desc: "Have a discount you like to use?",
  },
  {
    id: 6,
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-zO0BfEcTlSic-hp-6.png?v=1724634383",
    title: "Store Location",
    desc: "Want to find a store near you?",
  },
];

export interface FaqType {
  q: string;
  ans: string;
}

export const FAQS: FaqType[] = [
  {
    q: "How do I join the affiliate program?",
    ans: "Simply sign up through our affiliate program page by filling out the registration form. Once approved, you'll receive a unique affiliate link to start promoting our products.",
  },
  {
    q: "What commission rates do you offer?",
    ans: "We offer over 400 unique products to support a wide variety of wellness needs. The majority of these products are available through our website, however there are some that are available exclusively through our retailer partners.",
  },
  {
    q: "How and when do I get paid?",
    ans: "For over 50 years, we have set a standard for trust, safety, and efficacy, and these values have never been more relevant. During this pandemic, we remain committed to producing the highest quality products possible, from ingredient sourcing to rigorous testing and approvals, before they make their way to you and your family.",
  },
  {
    q: "What marketing resources are available to affiliates?",
    ans: "Our headquarters is in Green Bay, WI. We also have an office in Minneapolis, and a distribution center in Green Bay, WI.",
  },
];

export interface OtherQuestionsType {
  img: string;
  title: string;
  desc: string;
}

export const OTHER_QUESTIONS: OtherQuestionsType[] = [
  {
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-YGrRM9IVGXicon-lc-1.png?v=1724638892",
    title: "Call",
    desc: "012-345-6789",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-Lv4LCle25Yicon-lc-2.png?v=1724639488",
    title: "Email",
    desc: "Contact Us",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-nXKveOYRkzicon-lc-3.png?v=1724639522",
    title: "Chat",
    desc: "Chat Now",
  },
  {
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-qX7d2R8frVicon-lc-4.png?v=1724639557",
    title: "Message",
    desc: "Support Now",
  },
];

export const FOOTER_IMG_1 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-4V9nWEPuPOlogo-hc-1.png?v=1724641994";
export const FOOTER_IMG_2 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-ZTbOOI3C6atrust-hc.png?v=1724641892";

export interface FooterLinkType {
  title: string;
  links: string[];
}

export const FOOTER_LINKS: FooterLinkType[] = [
  {
    title: "About Us",
    links: [
      "About Us",
      "Careers",
      "Blog",
      "Affiliate",
      "Contact Us",
      "Terms of use",
    ],
  },
  {
    title: "Resource",
    links: [
      "Return policy",
      "My Account",
      "Find a Store",
      "Legal & Privacy",
      "Contact",
    ],
  },
  {
    title: "Information",
    links: ["Our Story", "Visit Our Store", "Contact Us", "Account"],
  },
  {
    title: "Help",
    links: [
      "FAQ",
      "Terms of Use",
      "Privacy Policy",
      "Cookie Policy",
      "Sitemap",
    ],
  },
];

export interface ContactUsHeroCardType {
  id: number;
  icon: string;
  title: string;
  description: string;
  buttonText: string;
  buttonIcon: string;
}

export const CONTACT_US_HERO_CARDS: ContactUsHeroCardType[] = [
  {
    id: 1,
    icon: "bi bi-geo-alt text-red-500 text-4xl",
    title: "Order Tracking",
    description: "Log in to check the status of your order",
    buttonText: "Track your order",
    buttonIcon: "bi bi-arrow-right",
  },
  {
    id: 2,
    icon: "bi bi-box-seam text-red-500 text-4xl",
    title: "Return & Exchange",
    description: "We make it easy to return and exchange styles",
    buttonText: "Start a return",
    buttonIcon: "bi bi-arrow-right",
  },
];
