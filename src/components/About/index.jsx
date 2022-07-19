import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import me from "../../assets/img/me.jpg";
import "./index.scss";

const About = () => {
    return (
        <div id="about">
            <div className="title">
                <AnimationOnScroll animateIn="animate__bounceIn">
                    <h1>About Me</h1>
                    <p className="sub-title">who I am</p>
                </AnimationOnScroll>
            </div>

            <div className="content">
                <img src={me} alt="akash"></img>
                
                <div className="description">
                    <p className="greeting">Hello there!!</p>
                    <AnimationOnScroll animateIn="animate__fadeIn">
                        <p className="explanation">
                            I am <b>Akash VS</b>. I am currently working as a Software Engineer II at <b>Walmart Global Tech India</b>, Bangalore. I
                            completed my Bachelor of Engineering in Computer Science at <b>PSG College of Technology</b>, Coimbatore. I am so passionate
                            about exploring and learning new technologies and stuffs. I have a good expertise at front-end development. I have
                            been following Machine learning and full-stack web development in depth. I love coding and solving problems. I try to
                            keep myself busy and give my best at what I am doing. I follow cricket and a big fan of cinema. I spend my leisure time
                            by listening to songs, chatting with my family and friends and googling stuffs that interests me.
                        </p>
                    </AnimationOnScroll>
                </div>
            </div>
        </div>
    );
};

export default About;