import React from "react";
import { Link } from "react-router-dom";

const Messages = () => {
  return (
    <div>
      <h1 className="text-xl text-center font-semibold lg:text-4xl">
        Messages
      </h1>
      <div className="overflow-x-auto mt-8 pt-3 pb-5 mx-auto px-2">
        <div className="min-w-[400px] grid grid-cols-[2fr,1fr,1fr,2fr] gap-3">
          <div>
            <h4 className="font-medium">Subject</h4>
          </div>
          <div>
            <h4 className="font-medium">Id</h4>
          </div>
          <div>
            <h4 className="font-medium">Date</h4>
          </div>
          <div>
            <h4 className="font-medium">Email</h4>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-1 text-[#120059]">
          <Link
            to="/user/messages/123"
            className="min-w-[400px] grid grid-cols-[2fr,1fr,1fr,2fr] gap-3"
          >
            <div>
              <p>Test</p>
            </div>
            <div>
              <p>123456</p>
            </div>
            <div>
              <p>12-12-12</p>
            </div>
            <div>
              <p>abc@gmail.com</p>
            </div>
          </Link>
          <Link
            to="/user/messages/123"
            className="min-w-[400px] grid grid-cols-[2fr,1fr,1fr,2fr] gap-3"
          >
            <div>
              <p>Test</p>
            </div>
            <div>
              <p>123456</p>
            </div>
            <div>
              <p>12-12-12</p>
            </div>
            <div>
              <p>abc@gmail.com</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Messages;
