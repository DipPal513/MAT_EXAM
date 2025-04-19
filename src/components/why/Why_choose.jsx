import React from "react";
import { FaSign } from "react-icons/fa";
import { MdDone } from "react-icons/md";

export default function Why_choose() {
  return (
    <section className="bg-gradient-to-tr from-white to-blue-100 py-12">
      <div className="why-choose grid grid-cols-1 md:grid-cols-2  gap-4 px-2  justify-items-center max-w-screen-xl mx-auto">
        <div className="why-choose-left grid gap-2">
          <div className="relative">
            <img
              src="heart.jpg"
              alt="Image 2"
              className="image image2 rounded-lg shadow-md w-[90%] h-[90%]"
            />
            <img
              src="/kidney.jpg"
              alt="Image 1"
              className="image image1 absolute right-0 bottom-0 w-48 h-48 object-cover rounded-lg shadow-md border-white border-4"
            />
          </div>
        </div>
        <div className="why-choose-right text-center md:text-left">
            <p className="uppercase text-blue-500 font-semibold">
                our specialist you like
            </p>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Why Choose Us?
          </h2>
          <div className="rounded-lg flex gap-3 shadow bg-white w-[90%] px-6 py-4">
            <div className="rounded-full text-white bg-blue-500 w-6 h-6 text-xl flex items-center justify-center ">

            <MdDone />
            </div>
            <div>
              <h3 className="font-bold text-xl">Thousands of proven exam centric questions</h3>{" "}
              <p className="text-lg ">These programs cover a wide range of subjects</p>
            </div>
          </div>
          <div className="my-5 ms-24 w-fit rounded-lg flex gap-3 shadow bg-white px-6 py-4">
            <div className="rounded-full text-white bg-blue-500 w-6 h-6 text-xl flex items-center justify-center">

            <MdDone />
            </div>
            <div>
              <h3 className="font-bold text-xl">Detailed answers and explanations</h3>{" "}
              <p className="text-lg ">Doubt resolution of complex & controversial questions</p>
            </div>
          </div>
          <div className="rounded-lg flex gap-3 shadow w-[90%] bg-white px-6 py-4">
            <div className="rounded-full text-white bg-blue-500 w-6 h-6 text-xl flex items-center justify-center">

            <MdDone />
            </div>
            <div>
              <h3 className="font-bold text-xl">Personalised learning environment</h3>{" "}
              <p className="text-lg ">Learn with Med Exam Pass that provide own learning environment</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
