import React from "react";
import { DatePicker, Space } from "antd";

// IMAGE
import blogCardImg from "../assets/blogCardImg.jpg";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const { RangePicker } = DatePicker;

  return (
    <div className="px-3 lg:px-10">
      <h1 className="text-center text-3xl font-semibold lg:text-5xl">
        Latest News
      </h1>
      <p className="text-[#120059] text-center mx-auto max-w-[900px] mt-10 lg:mt-16">
        Stay updated with the latest news and developments in our dynamic world.
        From groundbreaking discoveries to current events shaping society, delve
        into insightful articles, updates, and analyses that keep you informed
        and engaged. Explore our "Latest News" section to stay ahead of the
        curve.
      </p>
      <div className="w-fit mx-auto  mt-16">
        <Space direction="vertical" size={12}>
          <RangePicker />
        </Space>
      </div>
      <div className="latestNewsCards max-w-[1200px] mx-auto mt-12 w-fit">
        <Link
          to="/blog/123"
          className="newsCard max-w-[320px] lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow "
        >
          <a href="#">
            <img className="rounded-t-lg" src={blogCardImg} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="newsCardHeading mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Lorem Ipsum
              </h5>
            </a>
            <p className="newsCardPara mb-3 font-normal text-gray-700 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              pharetra tempor lectus, ut imperdiet justo f
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </Link>
        <Link
          to="/blog/123"
          className="newsCard max-w-[320px] lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow "
        >
          <a href="#">
            <img className="rounded-t-lg" src={blogCardImg} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="newsCardHeading mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Lorem Ipsum
              </h5>
            </a>
            <p className="newsCardPara mb-3 font-normal text-gray-700 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              pharetra tempor lectus, ut imperdiet justo f
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </Link>
        <Link
          to="/blog/123"
          className="newsCard max-w-[320px] lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow "
        >
          <a href="#">
            <img className="rounded-t-lg" src={blogCardImg} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="newsCardHeading mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Lorem Ipsum
              </h5>
            </a>
            <p className="newsCardPara mb-3 font-normal text-gray-700 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              pharetra tempor lectus, ut imperdiet justo f
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </Link>
        <Link
          to="/blog/123"
          className="newsCard max-w-[320px] lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow "
        >
          <a href="#">
            <img className="rounded-t-lg" src={blogCardImg} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="newsCardHeading mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Lorem Ipsum
              </h5>
            </a>
            <p className="newsCardPara mb-3 font-normal text-gray-700 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              pharetra tempor lectus, ut imperdiet justo f
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </Link>
        <Link
          to="/blog/123"
          className="newsCard max-w-[320px] lg:max-w-sm bg-white border border-gray-200 rounded-lg shadow "
        >
          <a href="#">
            <img className="rounded-t-lg" src={blogCardImg} />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="newsCardHeading mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                Lorem Ipsum
              </h5>
            </a>
            <p className="newsCardPara mb-3 font-normal text-gray-700 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              pharetra tempor lectus, ut imperdiet justo f
            </p>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LatestNews;
