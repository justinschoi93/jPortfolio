// import React from 'react';
import { FaAward, FaUsers, FaTasks } from 'react-icons/fa';

export default function About () {
    return (
        <section id="about__me">
            <div className="about__container">
                <div className="about__profile">
                    <div className="about__profile name">
                        <h1>Justin Choi</h1>
                        <h5>Full-Stack Developer</h5>
                    </div>
                    <div className="about__profile photo">
                        <img src="https://via.placeholder.com/300" alt="profile"/>
                    </div>
                </div>
                <div className="about__cards">
                        <article className="about__card">
                            <svg className="about__icon">
                                <FaAward/>
                            </svg>
                            <h5>Experience</h5>
                            <small>X Years Working</small>
                        </article>
                        <article className="about__card">
                            <div className="about__icon">
                                <FaUsers/>
                            </div>
                            <h5>Clients</h5>
                            <small>X+ Worldwide</small>
                        </article>
                        <article className="about__card">
                            <div className="about__icon">
                                <FaTasks/>
                            </div>
                            <h5>Projects</h5>
                            <small>X+ Completed</small>
                        </article>
                    </div>
                <div className="about__resume">
                    <div className="about__resume">Resume</div>
                    <div className="about__contact">Contact</div>
                </div>
            </div>

        </section>
    )
}