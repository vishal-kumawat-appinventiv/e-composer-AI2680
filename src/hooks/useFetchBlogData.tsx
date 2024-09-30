import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
import { BlogType } from "../utils/mock";

const useFetchBlogData = () => {
  const { blogs } = useContext(BlogContext);

  const FashionBlogsData = blogs.filter(
    (ele: BlogType) => ele?.display === "Fashion" && ele?.banner === false
  );

  const FashionBannerData = blogs.filter(
    (ele: BlogType) => ele?.display === "Fashion" && ele?.banner === true
  );

  const LifeStyleBlogsData = blogs.filter(
    (ele: BlogType) => ele?.display === "Lifestyle" && ele?.banner === false
  );

  const LifeStyleBlogsBanner = blogs.filter(
    (ele: BlogType) => ele?.display === "Lifestyle" && ele?.banner === true
  );

  const SpotlightBlogsData = blogs.filter(
    (ele: BlogType) => ele?.display === "Spotlight" && ele?.banner === false
  );

  const SpotlightBannerData = blogs.filter(
    (ele: BlogType) => ele?.display === "Spotlight" && ele?.banner === true
  );

  return {
    FashionBlogsData,
    FashionBannerData,
    LifeStyleBlogsData,
    LifeStyleBlogsBanner,
    SpotlightBlogsData,
    SpotlightBannerData,
  };
};

export default useFetchBlogData;
