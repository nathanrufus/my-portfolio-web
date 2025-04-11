import React from "react"
import facebook from "../public/assets/facebook.png"
import instagram from "../public/assets/instagram.png"
import dribble from "../public/assets/dribbble.png"
import email from "../public/assets/sms.png"

function Footer() {
  return (
    <div className=" bg-green-500">
      {/* text area */}
      <div className=" flex flex-row items-center justify-between">
        <p className=" font-light text-sm px-7 m-4 shadow-sm transition-all duration-500">
          @Copyright 2024 | Kibet Nathan
        </p>
        <p className=" font-light  text-sm px-7 m-4  shadow-sm transition-all duration-500">
          Fullstack Developer
        </p>
        <p className=" font-light  text-sm px-7 m-4 shadow-sm transition-all duration-500">UI Designer</p>
        <p className=" font-light  text-sm px-7 m-4 shadow-sm transition-all duration-500">Data analyst</p>
        <p className=" font-light  text-sm px-7 m-4  shadow-sm transition-all duration-500">
          Designed by nathankibet
        </p>
      </div>
      {/* socials */}
      <div className=" flex ml-8 px-4 ">
        <a href="">
          <img src="assets/facebook.png" alt="" className=" text-gray-400" />
        </a>
        <a href="" className=" ml-3">
          <img src="assets/instagram.png" alt="" className=" text-gray-400"  />
        </a>
        <a href="" className=" ml-3">
          <img src="assets/dribbble.png" alt=""  className=" text-gray-400" />
        </a>
        <a href="" className="ml-3">
          <img src="assets/sms.png" alt="" className=" text-gray-400"  />
        </a>
      </div>
      <div></div>
    </div>
  )
}

export default Footer
