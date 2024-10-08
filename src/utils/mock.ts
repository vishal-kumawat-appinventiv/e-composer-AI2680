import BlogListing from "../modules/blog-listing";
import ContactUs from "../modules/contact-us";
import NotFound from "../modules/not-found-404";
import {
  BlogType,
  ContactUsFooterCompanyType,
  ContactUsHeroCardType,
  FaqType,
  FooterLinkType,
  HelpDeskType,
  OtherQuestionsType,
  RoutesType,
} from "../types/type";

// Routes to Navigate
export const ROUTES: RoutesType[] = [
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

// BlogListing - Full Blogs Data to Render
export const BLOGS: BlogType[] = [
  {
    id: 1,
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-4_720x.png?v=1683621391",
    date: "By Admin Dinh / in May 9, 2023",
    title: "Here's why you should try mood",
    desc: "But they weren't the only ones to lean into the high octane trend, with MoschinoCersace and Jil Sander plumping for bold prints...",
    tag: ["DESIGN", "FASHION"],
    display: "Fashion",
    banner: true,
  },
  {
    id: 2,
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-3_720x.png?v=1683621366",
    date: "By Admin Dinh / in May 9, 2023",
    title: "Your Guide to Fashion Forward Living",
    desc: "Cersace and Jil Sander plumping for bold prints, from colourful stripes to...",
    tag: ["DESIGN", "FASHION"],
    display: "Fashion",
    banner: false,
  },
  {
    id: 3,
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-2_720x.png?v=1683621336",
    date: "By Admin Dinh / in May 9, 2023",
    title: "Where Style and Creativity Collide",
    desc: "Cersace and Jil Sander plumping for bold prints, from colourful stripes to...",
    tag: ["DESIGN"],
    display: "Fashion",
    banner: false,
  },
  {
    id: 4,
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-1_720x.png?v=1683621301",
    date: "By Admin Dinh / in May 9, 2023",
    title: "Unveiling the Latest Fashion Trends",
    desc: "Cersace and Jil Sander plumping for bold prints, from colourful stripes to...",
    tag: ["DESIGN", "FASHION"],
    display: "Fashion",
    banner: false,
  },
  {
    id: 5,
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-8_c9accd91-b5cc-4d1c-b7c5-27c324302426_720x.png?v=1683624775",
    date: "By Admin Dinh / in May 9, 2023",
    title: "Embracing Mindfulness in a Busy World",
    desc: "we delve into the importance of incorporating mindfulness practices into our daily lives. Discover tips for finding inner peace, reducing stress, and cultivating...",
    tag: ["LIFESTYLE"],
    display: "Lifestyle",
    banner: true,
  },
  {
    id: 6,
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-6_720x.png?v=1683624505",
    date: "By Admin Dinh / in May 9, 2023",
    title: "Travel Tales and Cultural Immersion",
    desc: "Join us on a journey around the globe as we explore different...",
    tag: ["DESIGN", "LIFESTYLE"],
    display: "Lifestyle",
    banner: false,
  },
  {
    id: 7,
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-7_720x.png?v=1683624537",
    date: "By Admin Dinh / in May 9, 2023",
    title: "Embracing Minimalism and Decluttering",
    desc: "In a world of constant consumerism, this blog invites you to simplify...",
    tag: ["DESIGN", "LIFESTYLE"],
    display: "Lifestyle",
    banner: false,
  },
  {
    id: 8,
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-5_720x.png?v=1683624796",
    date: "By Admin Dinh / in May 9, 2023",
    title: "Exploring Healthy Habits and Holistic Wellness",
    desc: "Dive into a world of holistic wellness as we explore nourishing habits...",
    tag: ["LIFESTYLE"],
    display: "Lifestyle",
    banner: false,
  },
  {
    id: 9,
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-12_1100x.png?v=1683625677",
    date: "By Admin Dinh / in May 9, 2023",
    title: "Travel Tales and Cultural Immersion",
    desc: "Forget the tourist hotspots and explore the road less traveled as we uncover hidden gems around the world. From enchanting small towns and...",
    tag: ["DESIGN", "LIFESTYLE"],
    display: "Spotlight",
    banner: true,
  },
  {
    id: 10,
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-11_720x.png?v=1683625649",
    date: "By Admin Dinh / in May 9, 2023",
    title: "Celebrating Artistic Visionaries",
    desc: "In this blog, we turn our attention to the world of art and creativity, showcasing...",
    tag: ["DESIGN", "LIFESTYLE"],
    display: "Spotlight",
    banner: false,
  },
  {
    id: 11,
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-10_720x.png?v=1683625618",
    date: "By Admin Dinh / in May 9, 2023",
    title: "Cutting-Edge Technologies and Ideas",
    desc: "Join us on a journey through the world of innovation as we highlight groundbreaking technologies,...",
    tag: ["DESIGN", "LIFESTYLE"],
    display: "Spotlight",
    banner: false,
  },
  {
    id: 12,
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/articles/img-bl-9_720x.png?v=1683625585",
    date: "By Admin Dinh / in May 9, 2023",
    title: "Stories of Triumph and Resilience",
    desc: "we shine a spotlight on individuals who have overcome adversity, achieved remarkable success, or made...",
    tag: ["DESIGN"],
    display: "Spotlight",
    banner: false,
  },
];

// Contact Us - Help Desk Data
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

// Contact US - Popular Searched Questions
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

// Contact Us - Any other questions
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

// Contact Us - Links for Footer
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

// Contact Us - Hero Cards
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

// Contact Us - Footer Details
export const CONTACT_US_FOOTER_COMPANY: ContactUsFooterCompanyType[] = [
  {
    img: "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-4V9nWEPuPOlogo-hc-1.png?v=1724641994",
    email: "info@ecomposershop.com",
    phone: "(212) 555-1234",
    desc: "Sign up for sale, new arrivals & more",
  },
];

// Static Images
export const HERO_IMG_1 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/bn-bl-1.png?v=1683616783";
export const HERO_IMG_2 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/bn-bl-2.png?v=1683619218";
export const LOGO_IMG =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/users/avatar_250x250_crop_center_7b84e44b-2e69-463a-83d1-09c0337c268c.png?v=1683616182";

export const FASHION_IMG_1 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/img-icon-bl.png?v=1683620903";

export const LIFE_STYLE_IMG_1 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/img-icon-bl2.png?v=1683624622";

export const CONTACT_US_IMG_1 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-2RgmJOxbvBbg-hr-search.png?v=1724402439";

export const FOOTER_IMG_1 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/ecom-no-replace-ZTbOOI3C6atrust-hc.png?v=1724641892";
