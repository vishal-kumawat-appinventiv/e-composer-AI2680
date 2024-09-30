import React from "react";
import { BlogType } from "../../../types/type";
import DescCard from "./DescCard";

interface BlogBannerProps {
  data: BlogType;
}

// Blog Banner Card for Blog Listing Page
// Takes BlogType as props
const BlogBannerCard: React.FC<BlogBannerProps> = ({ data }) => {
  return (
    <div className="col1 flex flex-col gap-3 h-full w-full overflow-hidden">
      <img
        src={data?.img}
        alt="fashion-img"
        className="w-full h-full object-cover rounded-xl"
      />
      <DescCard data={data} />
    </div>
  );
};

export default React.memo(BlogBannerCard);
