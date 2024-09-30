import { useContext, useMemo } from "react";
import { BlogContext } from "../context/BlogContext";
import { BlogType } from "../types/type";

// Custom Hook to fetch the data from BlogContext
// Filters the data based on the display type
// Used useMemo to memoize the data to avoid unnecessary re-renders
// Reduces the code complexity and improves performance
// Returns the filtered data
const useFetchBlogData = () => {
  const { blogs } = useContext(BlogContext);

  const FashionBlogsData = useMemo(
    () =>
      blogs.filter(
        (ele: BlogType) => ele?.display === "Fashion" && ele?.banner === false
      ),
    [blogs]
  );

  const FashionBannerData = useMemo(
    () =>
      blogs.filter(
        (ele: BlogType) => ele?.display === "Fashion" && ele?.banner === true
      ),
    [blogs]
  );

  const LifeStyleBlogsData = useMemo(
    () =>
      blogs.filter(
        (ele: BlogType) => ele?.display === "Lifestyle" && ele?.banner === false
      ),
    [blogs]
  );

  const LifeStyleBlogsBanner = useMemo(
    () =>
      blogs.filter(
        (ele: BlogType) => ele?.display === "Lifestyle" && ele?.banner === true
      ),
    [blogs]
  );

  const SpotlightBlogsData = useMemo(
    () =>
      blogs.filter(
        (ele: BlogType) => ele?.display === "Spotlight" && ele?.banner === false
      ),
    [blogs]
  );

  const SpotlightBannerData = useMemo(
    () =>
      blogs.filter(
        (ele: BlogType) => ele?.display === "Spotlight" && ele?.banner === true
      ),
    [blogs]
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
