'use client'
import React, { useState } from "react";
import { BsPlus } from "react-icons/bs";

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What is your experience in software development?",
      answer: "I have 3 years of experience in designing, developing, and implementing cutting-edge software solutions. My journey began with an interest in solving complex problems and creating efficient solutions. Over the years, I've honed my skills in various programming languages and frameworks, allowing me to deliver robust and scalable software products. My experience spans multiple industries, and I've worked on projects ranging from small applications to large-scale systems."
    },
    {
      question: "Which programming languages do you specialize in?",
      answer: "I specialize in Python,  and JavaScript. Python is my go-to language for its versatility and ease of use, allowing me to quickly prototype and develop applications.JavaScript, along with its libraries and frameworks such as React, is crucial for creating dynamic and interactive web applications. My proficiency in these languages enables me to tackle a wide range of software development tasks."
    },
    {
      question: "What development methodologies do you use?",
      answer: "I have a strong background in Agile and Scrum methodologies. Agile allows for iterative development, where requirements and solutions evolve through collaboration between cross-functional teams whereas Scrum, a subset of Agile, is particularly effective in managing and completing complex projects by breaking them down into manageable sprints."
    },
    {
      question: "Do you work on both front-end and back-end development?",
      answer: "On the front-end, I use technologies like HTML, CSS, and JavaScript (with frameworks like React) to build responsive and interactive user interfaces. For back-end development, I rely on Python (Django/Flask) and Java (Spring) to create powerful and scalable server-side applications. This full-stack capability allows me to understand and manage the complete software development lifecycle, ensuring a cohesive and integrated product."
    },
    // Add more FAQs here
  ];

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4 md:px-14 max-w-screen-xl mx-auto bg-slate-100">
      <h1 className=" text-center text-sm mb-2 text-green-700">FAQS</h1>
      <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className=" p-4 rounded-sm ">
            <div
              className="flex justify-between items-center cursor-pointer hover:bg-green-500 p-3 rounded bg-white"
              onClick={() => toggleAnswer(index)}
              onMouseEnter={() => setOpenIndex(index)}
              onMouseLeave={() => setOpenIndex(null)}
            >
              <h2 className="text-xl">{faq.question}</h2>
              <BsPlus className={`text-green-700 w-6 h-6 transform transition-transform ${openIndex === index ? 'rotate-45' : ''}`} />
            </div>
            {openIndex === index && (
              <p className="text-sm mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
