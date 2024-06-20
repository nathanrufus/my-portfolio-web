import React from "react";
import Image from "next/image";
import image from "/images/sm1.jpg"

function HomePage() {
  return (
    <section className="gradientBg h-screen ">
      <div className=" p-4 md:px-14 max-w-screen-xl mx-auto">
        <div className=" md:flex items-center justify-between">
          <div className=" md:w-1/2">
            <button className=" text-white text-sm bg-green-600 rounded px-2 py-2 mb-2">Proficient Software Developer</button>
            <h1 className=" text-xl font-bold w-1/2">Your Proof of Academic Excellence</h1>
            <p className=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis ipsum quas minus repudiandae iure. Facilis dolor quasi aliquid dolore iste enim culpa eligendi cum beatae, quaerat laborum officia temporibus perspiciatis.</p>
            <div className=" space-x-3">
              <button className=" py-3 px-2 rounded bg-green-600 text-white hover:bg-transparent hover:text-green-600 hover:outline outline-1">Write a review</button>
              <button className=" text-green-600 outline outline-1 rounded hover:bg-green-600 hover:text-white px-2 py-3.5 text-sm hover:outline-none">Contact me</button>
            </div>
          </div>
          <div>
            <Image src={image} height={400} width={400}  className=" rounded-3xl mt-5"/>
            <div className=" bg-green-600 rounded mt-3 px-4 py-2 flex items-center justify-between">
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
