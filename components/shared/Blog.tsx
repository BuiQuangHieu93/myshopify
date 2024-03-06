import React from "react";
import WrapperContainer from "../Wrapper";
import BlogCard from "./BlogCard";
import { blog } from "@/constants";

const Blog = () => {
  return (
    <>
      <WrapperContainer
        title="LATES FROM BLOG"
        subtitle="The freshest and most exciting news"
      >
        <div className="grid grid-cols-3">
          {blog.map((blogItem, index) => (
            <BlogCard
              key={index}
              src={blogItem.src}
              alt={blogItem.alt}
              title={blogItem.title}
              author={blogItem.author}
              date={blogItem.date}
              des={blogItem.des}
            />
          ))}
        </div>
      </WrapperContainer>
    </>
  );
};

export default Blog;
