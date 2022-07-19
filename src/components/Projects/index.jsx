import React from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./index.scss";

const works = [
    {
        title: "Internationalisation Toolkit",
        subTitle: "Web Developement - Walmart",
        description: "A self-serve web application that helps users to translate UI verbiage and email templates in HTML from one language to another language in a single click"
    },
    {
        title: "Covid-19 Detection using Explainable AI",
        subTitle: "Machine learning",
        description: "A prototype that detects Covid-19 from CT scans and provides explanation for the prediction using XAI frameworks such as LIME and GradCAM"
    },
    {
        title: "Disease severity predictor using AutoML",
        subTitle: "Machine learning",
        description: "A web-based application that predicts the severity of disease from symptoms and medical units of the disease"
    },
    {
        title: "Facial Expression Detection using ResNet-50 and SqueezeNet",
        subTitle: "Machine learning",
        description: "A prototype that predicts the facial expressions of the person from video clips using CNN architectures ResNet-50 and SqueezeNet"
    },
    {
        title: "Guidly Days",
        subTitle: "Web development",
        description: "A web application that is designed for non-native tourists to book local guides to visit and explore more places within their planned time effectively"
    },
    {
        title: "Schedulify",
        subTitle: "Android app development",
        description: "An simple user-friendly app developed using Java to schedule important events to remind for the users"
    },
    {
        title: "Perfect destination",
        subTitle: "Web dvelopement",
        description: "A web-application developed using PHP and MySQL that acts as the platform for the users to book bus tickets"
    }
]

const Projects = () => {
    return (
        <div id="projects">
            <div className="title">
                <AnimationOnScroll animateIn="animate__bounceIn">
                    <h1>My Works</h1>
                    <p className="sub-title">Projects that showcase my skills</p>
                </AnimationOnScroll>
            </div>

            <div className="project-section">
                <div className="project-cards-section">
                    {works.map((item, index) => {
                        return (
                            <div className="project-item" key={index}>
                                <AnimationOnScroll animateIn="animate__zoomIn">
                                    <div className="project-card" >
                                        <p className="p-title">{item.title}</p>
                                        <p className="p-subTitle">{item.subTitle}</p>
                                        <p className="p-description">{item.description}</p>

                                    </div>
                                </AnimationOnScroll>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Projects;