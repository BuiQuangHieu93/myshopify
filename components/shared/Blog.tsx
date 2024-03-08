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
        <div className="flex-center lg:flex-between flex-wrap">
          {blog.map((blogItem, index) => (
            <div className="max-w-[300px] md:max-w-[400px] pb-4">
              <BlogCard
                key={index}
                src={blogItem.src}
                alt={blogItem.alt}
                title={blogItem.title}
                author={blogItem.author}
                date={blogItem.date}
                des={blogItem.des}
              />
            </div>
          ))}
        </div>
      </WrapperContainer>
    </>
  );
};

export default Blog;
