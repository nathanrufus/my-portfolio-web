import React from "react";
import { BsBackpack2 } from "react-icons/bs";


function AboutMe() {
  return <div className=" p-4 md:px-14 max max-w-screen-xl mx-auto">
    <div className=" md:flex items-center justify-between space-x-10">
      <BsBackpack2 className="text-sm text-green-600 w-80 h-80 m-4" />
      <div className=" md:w-1/2 rounded-sm bg-slate-100 p-2 mb-4 ">
        <h1 className=" text-green-700 text-left text-sm font-semibold mb-1">About Me</h1>
        <h2 className=" text-2xl text-left mb-3 font-bold">Who i am</h2>
        <p className=" ">I am a dedicated and highly skilled software engineer with 3 years of experience in designing, developing, and implementing cutting-edge software solutions. My passion for technology and problem-solving drives me to continuously enhance my skills and stay abreast of the latest industry trends.
          My expertise spans a variety of programming languages including Python, Java, and JavaScript, and I have a strong background in software development methodologies such as Agile and Scrum. I excel in both front-end and back-end development, with a particular focus on creating seamless and efficient user experiences.</p>
          <button className=" text-sm text-white bg-green-700 rounded hover:text-green-700 hover:bg-white mt-2 px-3 py-2 hover:outline outline-1">Read more</button>
      </div>
    </div>
  </div>;
}

export default AboutMe;
