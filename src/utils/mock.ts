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

export const LOGO_IMG = "https://cdn.shopify.com/s/files/1/0726/1221/7115/users/avatar_250x250_crop_center_7b84e44b-2e69-463a-83d1-09c0337c268c.png?v=1683616182";
