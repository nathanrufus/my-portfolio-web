import React from "react";
import { GrContact } from "react-icons/gr";
import { CiSquareQuestion } from "react-icons/ci";
import { MdDoneAll } from "react-icons/md";
import { MdPayments } from "react-icons/md";




function Order() {
    return <section className=" p-4 max-w-screen-xl md:px-14 mx-auto">
        <h1 className=" text-sm text-center text-green-700 font-bold mb-1">How I work</h1>
        <h2 className=" text-xl text-center font-bold mb-2">Get Helped In 4 Steps</h2>
        <div className=" md:flex grid grid-cols-2 justify-evenly items-center space-x-2 space-y-3">
            <div className=" space-y-1 flex flex-col items-center hover:bg-green-400 rounded p-2 transition-all duration-300 justify-between mx-auto pt-10">
                <GrContact className=" text-xl text-green-700 " />
                <h1 className=" font-bold">Contact Us</h1>
                <p className=" text-center">Reach out via our website on phone to connect with me to get services</p>
            </div>
            <div className=" space-y-1 flex flex-col items-center hover:bg-green-400 rounded p-2 transition-all duration-300 justify-between mx-auto pt-10">
                <CiSquareQuestion className=" text-xl text-green-700" />
                <h1 className=" font-bold">Submit Requirements</h1>
                <p className=" text-center">Provide detailed asssignment information including topic, length, deadline and secific instructions</p>
            </div>
            <div className=" space-y-1 flex flex-col items-center bg-green-400 rounded p-2 transition-all duration-300 justify-between mx-auto pt-10">
                <MdDoneAll className=" text-xl text-green-700" />
                <h1 className=" font-bold">Get Job Done</h1>
                <p className=" text-center">Using my expertise i draft a high-quality product which is free from plagiarism and serve you for greater purpose</p>
            </div>
            <div className=" space-y-1 flex flex-col items-center hover:bg-green-400 rounded p-2 transition-all duration-300 justify-center mx-auto pt-10">
                <MdPayments className=" text-xl text-green-700" />
                <h1 className=" font-bold">Pay</h1>
                <p className=" text-center">Once satisfied with the final product comlete your payment securely and confidently</p>
            </div>
        </div>
    </section>;
}

export default Order;
