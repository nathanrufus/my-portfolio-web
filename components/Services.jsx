import React from "react";
import { IoCodeSlash } from "react-icons/io5";
import { FaScrewdriverWrench } from "react-icons/fa6";
import { FaDatabase } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";

function Services() {
    return <section className=" p-4 max-w-screen-xl md:px-14 mx-auto" id="services">
        <h1 className=" text-sm text-green-700 mb-1 text-center font-semibold">My services</h1>
        <h2 className=" font-bold text-center mb-2 text-xl">How I Can Prove My Academic Excellence</h2>
        <div className=" md:flex md:space-x-2">
            <div className=" flex flex-col space-y-3 hover:bg-green-300 transition-all duration-300 p-4 gradientBg">
                <IoCodeSlash className=" text-xl text-green-700 h-8 w-8" />
                <h1 className=" font-bold">Web Development</h1>
                <p>I build and maintain websites and web applications. This includes both front-end development (UI/UX design, HTML, CSS, JavaScript) and back-end development (server, database, application logic) to ensure your site is functional, user-friendly, and visually appealing.</p>
                <div className=" space-x-3">
                    <button className=" py-3 px-2 rounded bg-green-600 text-white hover:bg-transparent hover:text-green-600 hover:outline outline-1">View Other services</button>
                    <button className=" text-green-600 outline outline-1 rounded hover:bg-green-600 hover:text-white px-2 py-3.5 text-sm hover:outline-none">Get a quote</button>
                </div>
            </div>
            <div className=" flex flex-col space-y-2">
                <div className=" flex space-x-2">
                    <div className=" bg-green-600 p-2 rounded">
                        <FaScrewdriverWrench className=" text-xl text-gray-400 h-8 w-8" />
                        <h1 className=" font-bold">Software Maintenance and Support</h1>
                        <p className=" text-sm">I provide ongoing support and updates for your existing software. This involves fixing bugs, updating software to improve performance or add new features, and ensuring compatibility with new hardware and software environments.</p>
                    </div>
                    <div className="p-2 hover:bg-green-600 rounded transition-all duration-300">
                        <FaDatabase className=" text-xl text-gray-400 h-8 w-8" />
                        <h1 className=" font-bold">Database Design and Management</h1>
                        <p className=" text-sm">I develop and integrate APIs to enable different software systems to communicate. This ensures that your software applications can work together seamlessly, enhancing functionality and interoperability.</p>
                    </div>
                </div>
                <div className=" flex space-x-2">
                    <div className="p-2 hover:bg-green-600 rounded transition-all duration-300">
                        <FaCloudDownloadAlt className=" text-xl text-gray-400 h-8 w-8" />
                        <h1 className=" font-bold">Cloud Services</h1>
                        <p className="text-sm">I develop and manage cloud-based applications and services. This includes deploying applications to cloud platforms (such as AWS, Azure, Google Cloud), managing cloud resources, and ensuring scalability and reliability.</p>
                    </div>
                    <div className="p-2 hover:bg-green-600 rounded transition-all duration-300">
                        <FaChalkboardTeacher className=" text-xl text-green-700 h-8 w-8" />
                        <h1 className=" font-bold">Software Consulting</h1>
                        <p className=" text-sm">I will provide expert advice on software development and technology solutions. This involves analyzing your current systems and processes, recommending improvements, and advising on the best technologies and practices to achieve your business goals.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>;
}

export default Services;
