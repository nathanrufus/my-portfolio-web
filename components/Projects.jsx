import React from 'react';

function Projects() {
    const projects = [
        {
            title: 'Airline Booking System',
            description: 'It is a software platform that allows users to search for flights, compare prices, and book tickets online. ',
            videoUrl: '/videos/airline.mp4',
            detailsUrl: '/project-one'
        },
        {
            title: 'Health Tracker App',
            description: 'This kind of software tracks the health of a person based on the location and other aspects.',
            videoUrl: '/videos/healthtracker.mp4',
            detailsUrl: '/project-two'
        },
        {
            title: 'NGO website blog',
            description: 'It entails a website in which you can write various proceedings happening in the ngo.',
            videoUrl: '/videos/blog.mp4',
            detailsUrl: '/project-three'
        },
        {
            title: 'Student Community App',
            description: 'It is an app in which students can use it to social and get various commodities across the campus .',
            videoUrl: '/videos/study.mp4',
            detailsUrl: '/project-three'
        },
    ];

    return (
        <div className="p-4 md:px-14 max-w-screen-xl mx-auto mt-10" id='projects'>
            <h1 className="text-sm text-green-700 font-bold mb-2 text-center">My Projects</h1>
            <h2 className=' text-2xl font-bold text-center mb-3'>Projects that i have worked on</h2>
            <p class="text-base text-gray-700">
                These are a part of many projects that I have done. I have also worked on many tech stacks throughout these projects.
                You can look at the projects I have done here is the link to my GitHub account:
                <a href="https://github.com/nathanrufus" target="_blank" class="text-pink-500 hover:text-pink-700 underline">
                    https://github.com/nathanrufus
                </a>.
                If you want to view more details of the project, click on the "More Details" button and you will be taken to a page to view a video and more description about the project.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                    <div className="bg-slate-100 p-4 rounded-sm shadow-md mb-6" key={index}>
                        <h2 className="text-2xl text-green-700 font-bold mb-2">{project.title}</h2>
                        <p className="text-sm text-left mb-4">{project.description}</p>
                        <video controls className="w-full mb-4" muted autoPlay loop>
                            <source src={project.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <a href={project.detailsUrl} className="text-sm text-white bg-green-700 rounded hover:text-green-700 hover:bg-white px-3 py-2 hover:outline outline-1">More details</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;
