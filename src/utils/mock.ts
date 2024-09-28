import BlogListing from "../modules/blog-listing";
import ContactUs from "../modules/contact-us";

export const ROUTES = [
  {
    path: "/",
    component: BlogListing,
  },
  {
    path: "/contact",
    component: ContactUs,
  },
];

export const HERO_IMG_1 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/bn-bl-1.png?v=1683616783";

export const HERO_IMG_2 =
  "https://cdn.shopify.com/s/files/1/0726/1221/7115/files/bn-bl-2.png?v=1683619218";
