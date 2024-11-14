import React from "react";
import blogImg from "@/assets/images/blogImg.png";
import Image from "next/image";

const BlogPost = () => {
  return (
    <>
      <div className="blogPost_cont flex justify-center">
        <div className="max-w-l min-h-452 border border-solid border-gray-300 p-4 shadow-sm rounded-xl">
          <div className="blogPostImage">
            <Image className="rounded-lg w-full" src={blogImg} alt="blogImg" />
          </div>
          <div className="blogPostContent">
            <div className="text-2xl font-semibold leading-6 py-3">
              <h2>The dos and dont's of internal communication.</h2>
            </div>
            <div className="text-base font-normal py-4">
              <p>
                Effective internal communication is key to any organization's
                success. It brings employees together, boosts collaboration, and
                keeps morale high. To achieve this, follow these essential
                practices.
              </p>
            </div>
            <div className="py-4">
              <button className="border border-solid border-black py-2 px-4 rounded-full text-blue-500 font-semibold">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPost;
