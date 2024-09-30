import { createContext, useState, ReactNode } from "react";
import { BLOGS, BlogType } from "../../src/utils/mock";

interface BlogContextType {
  blogs: BlogType[];
  setBlogs: React.Dispatch<React.SetStateAction<BlogType[]>>;
}

const defaultContextValue: BlogContextType = {
  blogs: [],
  setBlogs: () => {},
};

export const BlogContext = createContext<BlogContextType>(defaultContextValue);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  const [blogs, setBlogs] = useState<BlogType[]>(BLOGS);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};
