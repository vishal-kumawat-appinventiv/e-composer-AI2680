import { createContext, useState, ReactNode } from "react";
import { BLOGS } from "../../src/utils/mock";
import { BlogType } from "../types/type";

interface BlogContextType {
  blogs: BlogType[];
  setBlogs: React.Dispatch<React.SetStateAction<BlogType[]>>;
}

const defaultContextValue: BlogContextType = {
  blogs: [],
  setBlogs: () => {},
};

// Context Provider for Blog Context
// Takes children as props
// Returns the context value with the blogs data
export const BlogContext = createContext<BlogContextType>(defaultContextValue);

export const BlogProvider = ({ children }: { children: ReactNode }) => {
  // for now as the data is static, we are using the mock data
  const [blogs, setBlogs] = useState<BlogType[]>(BLOGS);

  return (
    <BlogContext.Provider value={{ blogs, setBlogs }}>
      {children}
    </BlogContext.Provider>
  );
};
