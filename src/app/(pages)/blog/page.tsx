"use client";
import BlogPagination from "@/components/BlogPagination";
import BlogPost from "@/components/BlogPost";
import Navbar from "@/components/Navbar";
import React, { useEffect, useState } from "react";

const Blog: React.FC = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  let [blogCount, setBlogCount] = useState<JSX.Element[]>([]);

  useEffect(() => {
    let blogCount: JSX.Element[] = [];
    for (let i = 0; i < 30; i++) {
      blogCount = [...blogCount, <BlogPost key={i} />];
    }
    setBlogCount(blogCount);

    console.log("This is blog :- ", blogCount);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(9);

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;

  const currentRecord = blogCount.slice(indexOfFirstRecord, indexOfLastRecord);

  const nPages = Math.ceil(blogCount.length / recordsPerPage);

  return (
    <>
    <Navbar navbarBg={"bg-gradient-light"}/>
      <div className="bg-gradient-to-r from-purple-200 via-teal-300 to-pink-200 w-full h-96 relative">
        <div className="max-w-470 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="text-4xl font-extrabold text-blue-900 mb-5">
            <h2>Blog</h2>
          </div>
          <div className="text-base text-blue-900">
            <p>
              Discover expert tips and best practices on the SearchAds.com Blog
              for maximizing app visibility and driving growth. Join our
              community of app developers and marketers today!
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto w-full xsm:px-4 xs:px-6 md:px-6 lg:px-8 ">
        <div className="tab_contianer">
          <div className="flex justify-center items-center text-center mx-auto gap-5 my-9">
            <div
              className={
                toggleState === 1
                  ? `inline-block border border-solid border-black rounded-full px-4 py-1 cursor-pointer ${
                      toggleState === 1
                        ? "border-0 bg-blue-300 text-blue-700"
                        : ""
                    }`
                  : "inline-block border border-solid border-black rounded-full px-4 py-1 cursor-pointer"
              }
              onClick={() => toggleTab(1)}
            >
              All
            </div>

            <div
              className={
                toggleState === 2
                  ? `inline-block border border-solid border-black rounded-full px-4 py-1 cursor-pointer ${
                      toggleState === 2
                        ? "border-0 bg-blue-300 text-blue-700"
                        : ""
                    }`
                  : "inline-block border border-solid border-black rounded-full px-4 py-1 cursor-pointer"
              }
              onClick={() => toggleTab(2)}
            >
              News & Products Announcements
            </div>

            <div
              className={
                toggleState === 3
                  ? `inline-block border border-solid border-black rounded-full px-4 py-1 cursor-pointer ${
                      toggleState === 3
                        ? "border-0 bg-blue-300 text-blue-700"
                        : ""
                    }`
                  : "inline-block border border-solid border-black rounded-full px-4 py-1 cursor-pointer"
              }
              onClick={() => toggleTab(3)}
            >
              Advanced Tips
            </div>
          </div>
          <div className="content_blog_tabs">
            <div className={toggleState === 1 ? "block" : "hidden"}>
              {/* <h2>Content 1</h2> */}
              {/* <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
                quidem?
              </p> */}
              {/* <BlogPost /> */}
              <div className=" grid grid-cols-3 justify-center gap-10 xsm:grid-cols-1 xs:grid-cols-1 xs:gap-4 sm:grid-cols-2 md:grid-cols-2 md:gap-5 lg:grid-cols-3  lg:gap-5">
                {currentRecord.map((item, index) => (
                  <div className="blog_post" key={index}>
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <BlogPagination
                  nPages={nPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>

            <div className={toggleState === 2 ? "block" : "hidden"}>
              <h2>Content 2</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
                quas dolores id, laborum, voluptatibus ut quaerat asperiores
                voluptatem nisi, ipsam veniam. Odit ut aspernatur aliquam ad eum
                inventore nulla veniam maiores! Ullam sint aliquid, beatae
                corporis ratione rem delectus voluptas! Perspiciatis delectus
                aliquid, cum quod alias aliquam neque! Odit, quos!
              </p>
            </div>

            <div className={toggleState === 3 ? "block" : "hidden"}>
              <h2>Content 3</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
                obcaecati, vel atque eos consequatur quidem sed dignissimos
                magnam, nostrum numquam ex! Blanditiis magnam dolorum rem
                necessitatibus, consectetur inventore tenetur facilis aliquid
                sit unde sed ullam vero nihil repellendus. Possimus dolorem illo
                ipsa autem nesciunt repellat repellendus repudiandae facere
                temporibus accusamus unde, exercitationem necessitatibus facilis
                rem eligendi porro ratione eius, laboriosam quibusdam maiores
                tempora ea dignissimos voluptas officia! Ipsa error dolore,
                voluptatem corrupti aut soluta illum vel iure consequuntur animi
                praesentium perferendis nisi alias maiores deserunt quasi
                inventore ad corporis impedit cum eaque harum quibusdam ipsam
                sapiente. Impedit, dicta. Sequi, officia!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
