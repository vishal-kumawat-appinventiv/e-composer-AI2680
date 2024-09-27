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
