import React from 'react';

function Projects() {
    const projects = [
        { 
            title: 'Project One', 
            description: 'Description for project one.', 
            videoUrl: '/videos/video2.mp4',
            detailsUrl: '/project-one'
        },
        { 
            title: 'Project Two', 
            description: 'Description for project two.', 
            videoUrl: '/videos/video2.mp4',
            detailsUrl: '/project-two'
        },
        { 
            title: 'Project Three', 
            description: 'Description for project three.', 
            videoUrl: '/videos/video2.mp4',
            detailsUrl: '/project-three'
        },
        // Add more projects here
    ];

    return (
        <div className="p-4 md:px-14 max-w-screen-xl mx-auto mt-10">
            <h1 className="text-sm text-green-700 font-bold mb-2 text-center">My Projects</h1>
            <h2 className=' text-2xl font-bold text-center mb-3'>Projects that i have worked on</h2>
            <p>This are a part of many projects that i have done ,also i have worked on many tech stack throughout the projects. You can look at the projects i have done here is the link to my github account :https://github.com/nathanrufus. If you want to view more details of the project click on more details button and you will taken to a page to view video and more descrition about the project.</p>
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
