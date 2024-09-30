import { BLOGS, BlogType, FASHION_IMG_1 } from "../../../utils/mock";
import { BlogBannerCard } from "./BlogBannerCard";
import { BlogCard } from "./BlogCard";

const Fashion = () => {
  const FashionBlogsData = BLOGS.filter(
    (ele: BlogType) => ele?.display === "Fashion" && ele?.banner === false
  );

  const FashionBannerData = BLOGS.filter(
    (ele: BlogType) => ele?.display === "Fashion" && ele?.banner === true
  );

  return (
    <div className="max-w-7xl mx-auto px-4 mt-20">
      <div className="flex gap-3 items-center my-6">
        <div className="rounded-l-full rounded-r-full overflow-hidden">
          <img
            src={FASHION_IMG_1}
            alt="fashion-img"
            className="w-full h-full object-cover "
          />
        </div>
        <h1 className="text-3xl lg:text-5xl text-black">Fashion</h1>
      </div>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
        <BlogBannerCard data={FashionBannerData[0]} />
        <div className="col2 flex flex-col gap-3 h-full w-full overflow-hidden">
          {FashionBlogsData.map((ele) => (
            <BlogCard key={ele?.id} data={ele} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Fashion;
