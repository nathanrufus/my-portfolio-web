import React from "react";
import Image from "next/image";
import image from "/images/Kibet.jpg"

function HomePage() {
  return (
    <section className="gradientBg" id="home">
      <div className=" p-4 md:px-14 max-w-screen-xl mx-auto pt-10 mt-20">
        <div className=" md:flex items-center justify-between">
          <div className=" md:w-1/2">
            <button className=" text-white text-sm bg-green-600 rounded px-2 py-2 mb-2">Proficient Software Developer</button>
            <h1 className=" text-xl font-bold w-1/2">Your Proof of Academic Excellence</h1>
            <p className=" ">
              Showcase your achievements and expertise with verified academic credentials. Gain credibility, enhance your professional profile, and unlock new career opportunities with industry-recognized certifications. Whether you're a student, professional, or lifelong learner, your academic journey deserves recognition.
            </p>
            <div className=" space-x-3">
              <button className=" py-3 px-2 rounded bg-green-600 text-white hover:bg-transparent hover:text-green-600 hover:outline outline-1">
                Write a review
              </button>
              <button className=" text-green-600 outline outline-1 rounded hover:bg-green-600 hover:text-white px-2 py-3.5 text-sm hover:outline-none">
                Contact me
              </button>
            </div>
          </div>
          <div>
            <Image src={image} height={500} width={500} className=" rounded-3xl mt-5" />
            <div className=" bg-green-600 rounded mt-3 px-4 py-2 flex items-center justify-between mb-10">
              <div className=" flex flex-col space-y-1 items-center">
                <span className=" text-white text-xl font-bold">OK+</span>
                <h2 className=" text-white text-sm">Completed projects</h2>
              </div>
              <div className=" flex flex-col space-y-1 items-center">
                <span className=" text-white text-xl font-bold">100%</span>
                <h2 className=" text-white text-sm">Success Rate</h2>
              </div>
              <div className=" flex flex-col space-y-1 items-center">
                <span className=" text-white text-xl font-bold">100%</span>
                <h2 className=" text-white text-sm">Reliability</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HomePage;
