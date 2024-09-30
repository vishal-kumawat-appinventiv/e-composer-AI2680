import { useContext } from "react";
import { BlogType, LIFE_STYLE_IMG_1 } from "../../../utils/mock";
import BlogBannerCard from "./BlogBannerCard";
import BlogCard from "./BlogCard";
import { BlogContext } from "../../../context/BlogContext";

const LifeStyle = () => {
  const { blogs } = useContext(BlogContext);

  const LifeStyleBlogsData = blogs.filter(
    (ele: BlogType) => ele?.display === "Lifestyle" && ele?.banner === false
  );

  const LifeStyleBlogsBanner = blogs.filter(
    (ele: BlogType) => ele?.display === "Lifestyle" && ele?.banner === true
  );

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20 mb-20">
      <div className="flex gap-3 items-center my-6">
        <div className="rounded-l-full rounded-r-full overflow-hidden">
          <img
            src={LIFE_STYLE_IMG_1}
            alt="fashion-img"
            className="w-full h-full object-cover "
          />
        </div>
        <h1 className="text-3xl lg:text-5xl text-black">Lifestyle</h1>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <BlogBannerCard data={LifeStyleBlogsBanner[0]} />
        <div className="col2 flex flex-col gap-3 h-full w-full overflow-hidden">
          {LifeStyleBlogsData.map((ele) => (
            <BlogCard key={ele?.id} data={ele} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LifeStyle;
