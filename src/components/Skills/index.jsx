import React from "react";
import img1 from "../../assets/img/html.png";
import img2 from "../../assets/img/c.png";
import img3 from "../../assets/img/c++.svg";
import img4 from "../../assets/img/java.png";
import img5 from "../../assets/img/python.png";
import img6 from "../../assets/img/mysql.svg";
import img7 from "../../assets/img/react-icon.png";
import img8 from "../../assets/img/node-js.png";
import img9 from "../../assets/img/android.png";
import img10 from "../../assets/img/django.png";
import img11 from "../../assets/img/css.png";
import img12 from "../../assets/img/jss.svg";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./index.scss";

const Skills = () => {

    const skillItems = [
        {
            imgSrc: img1,
            name: "HTML"
        },
        {
            imgSrc: img11,
            name: "CSS"
        },
        {
            imgSrc: img12,
            name: "JS",
            extraClass: "skill-certain-item"
        },
        {
            imgSrc: img2,
            name: "C",
            extraClass: "skill-certain-item"
        },
        {
            imgSrc: img3,
            name: "C++",
            extraClass: "skill-certain-item"
        },
        {
            imgSrc: img4,
            name: "Java"
        },
        {
            imgSrc: img5,
            name: "Python"
        },
        {
            imgSrc: img6,
            name: "MySQL"
        },
        {
            imgSrc: img7,
            name: "React.js"
        },
        {
            imgSrc: img8,
            name: "Node.js"
        },
        {
            imgSrc: img9,
            name: "Android app dev",
            extraClass: "skill-android"
        },
        {
            imgSrc: img10,
            name: "Django"
        },

    ]
    return (
        <div id="skills">
            <div className="title">
                <AnimationOnScroll animateIn="animate__bounceIn">
                    <h1>My Skills</h1>
                    <p className="sub-title">Tech stacks I have worked with</p>
                </AnimationOnScroll>
            </div>

            <div className="tech-stacks">
                
                <div className="skill-container">
                    {skillItems.map((item, index) => {
                        const { extraClass = "" } = item;
                        const className = `skill-name ${extraClass}`;

                        return (
                            <div key={index} className="skill-item">
                                <AnimationOnScroll animateIn="animate__fadeInLeft">
                                    <div className="card">
                                        <img src={item.imgSrc} alt={item.name} />
                                    </div>
                                    <p className={className}>{item.name}</p>
                                </AnimationOnScroll>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default Skills;