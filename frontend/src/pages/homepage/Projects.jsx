// import "../App.css";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import ProjectCard from "./ProjectCard";





function Project(props) {


    return (
        <div id="project" className=" pt-24 dark:bg-yellow-500 bg-slate-100 h-fit pb-20  text-black">


            <div className="text-center mb-16 "><mark className="bg-blue-700  text-white px-3 font-semibold py-2 rounded-2xl text-4xl md:text-5xl lg:text-6xl ">Projects</mark></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-fit  mx-auto px-20 ">

                {/* <div className="hover:scale-105 duration-200"><ProjectCard gitlink="https://github.com/legendary0911/decentralised-voting" sitelink="https://dection.vercel.app/" name="Dection" desc="100% decentralized app that uses aadhar auth and a smart contract enabling users to participate in elections, cast votes, and get results with transparency." img="/dection.png" /></div>
                <div className="hover:scale-105 duration-200"><ProjectCard gitlink="https://github.com/legendary0911/Pantheon2023" sitelink="www.pantheon2023.com" name="Pantheon-Website" desc="Worked on large-scale website for BIT Mesra’s renowned tech fest- Pantheon, the largest in East India, anticipates welcoming over 20,000+ visitors." img="/pantheon.png" /></div>
                <div className="hover:scale-105 duration-200"><ProjectCard gitlink="https://github.com/legendary0911/travel-tour" sitelink="https://traveltour19.netlify.app/" name="Travel Tour" desc="    Allows users to search, book add reviews about destinations. It has user auth system and RESTful API routes for CRUD actions for reviews and users." img="/travel.png" /></div> */}
                {/* <div className="hover:scale-105 duration-200"><ProjectCard gitlink="https://github.com/legendary0911/movie_api" sitelink="https://bingewatchers69.netlify.app" name="Bingewatchers" desc="Bingewatchers is a movie database. Search your favourite movies and see information about them. It uses TMDB movie api to fetch data and uses React JS." img="/binge.png" /></div> */}
                <div className="hover:scale-105 duration-200"><ProjectCard gitlink="https://github.com/amanraj1105/portfolio_website-main" sitelink="" name="Portfolio" desc="This is a portfolio website. It has details related to my skills & projects.It also highlights my Education details and has a contact section. It uses React JS." img="/portfolio.jpg" /></div>
                <div className="hover:scale-105 duration-200"><ProjectCard gitlink="https://github.com/amanraj1105/DocU" sitelink="" name="DocU" desc="DocU is a simple web app for booking doctor appointments, offering easy scheduling, real-time availability, for a hassle-free healthcare experience.. This site is under development. " img="/DocU.jpg" /></div>

            </div>


        </div>



    )
}

export default Project;

