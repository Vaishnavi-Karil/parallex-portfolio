import React from "react";
// import Project from "./Project";
// import phoneImg from "../img/phone.png";
// import phoneAppImg from "../img/phoneApp.png";
// import laptopImg from "../img/laptop.png";
// import laptopAppImg from "../img/laptopApp.png";

import { Images } from "../constant/Images.tsx";
import Project from "./Project.tsx";


const Projects = () => {
    const projectData = [
      
        {
            title: "Portfolio App",
            description:
                "A professional portfolio builder that helps users showcase their skills, projects, and achievements in an organized and visually appealing manner. It enables easy customization, media integration, and sharing, making it perfect for job seekers, freelancers, and professionals looking to enhance their online presence.",
            image: Images.laptop,
            screenImage: Images.laptop,
            type: "laptop",
        },
        {
            title: "Todo App",
            description:
                "The Todo App helps users overcome procrastination by managing daily tasks effectively. It ensures tasks are completed before setting new goals. Incomplete tasks are added to the next day’s list after confirmation. With reminders, tracking, and prioritization, it helps users stay productive and focused on their daily objectives.",
            image: Images.phone,
            screenImage: Images.phone,
            type: "phone",
        },
        {
            title: "Resume App",
            description:
                "A dedicated resume management system that allows users to create, edit, and update their resumes effortlessly. It offers customizable templates, easy formatting, and quick export options, ensuring job seekers always have a professional and up-to-date resume for interviews.",
            image: Images.phone,
            screenImage: Images.phone,
            type: "phone",
        },
        {
            title: "Project Management App",
            description:
                "An efficient project management tool that helps users plan, track, and collaborate on projects seamlessly. It includes task assignment, progress monitoring, and deadline tracking features, ensuring smooth workflow management for individuals and teams working on small to large-scale projects.",
            image: Images.phone,
            screenImage: Images.phone,
            type: "phone",
        },
    ];

    return (
        <div className="projects">
            <h1 className="projectsTitle">Here are some of my projects</h1>
            {projectData.map((project, index) => (
                <Project key={index} {...project} />
            ))}
        </div>
    );
};

export default Projects;
