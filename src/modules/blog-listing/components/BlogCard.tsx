import React from "react";
import { BlogType } from "../../../types/type";
import DescCard from "./DescCard";

interface BlogCardProps {
  data: BlogType;
}

// BlogCard for Blog Listing Page
// Takes BlogType as props
const BlogCard: React.FC<BlogCardProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[34%_63%] gap-4 w-full">
      <img
        src={data?.img}
        alt="fashion-img"
        className="w-full h-full object-cover rounded-xl"
      />
      <DescCard data={data} />
    </div>
  );
};

export default React.memo(BlogCard);
