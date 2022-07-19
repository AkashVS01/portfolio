import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoIosSchool } from "react-icons/io";
import { MdWork } from "react-icons/md";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import "./index.scss";

const workItems = [
    {
        date: "2022-present",
        isEducation: "no",
        title: "Software engineer II (2022-present)",
        place: "WALMART GLOBAL TECH INDIA, BANGALORE",
        content: "Currently working on building scalable front-end user interfaces for various walmart internal applications"
    },
    {
        date: "2018-2022",
        isEducation: "yes",
        title: "BE CSE (2018-2022)",
        place: "PSG COLLEGE OF TECHNOLOGY, COIMBATORE",
        content: "Completed with a CGPA of 9.44"
    },
    {
        date: "2017-2018",
        isEducation: "yes",
        title: "HSC (2017-2018)",
        place: "SSM LAKSHMIAMMAL MATRIC HR SEC SCHOOL, NAMAKKAL",
        content: "Completed with a percentage of 98. Secured overall school second mark"
    },
    {
        date: "2015-2016",
        isEducation: "yes",
        title: "SSLC (2015-2016)",
        place: "SSM LAKSHMIAMMAL MATRIC HR SEC SCHOOL, NAMAKKAL",
        content: "Completed with a percentage of 98"
    }
]

const Work = () => {
    return (
        <div id="work">
            <div className="title">
                <AnimationOnScroll animateIn="animate__bounceIn">
                    <h1>Experience</h1>
                    <p className="sub-title">My Education and Work timeline</p>
                </AnimationOnScroll>
            </div>

            <div className="work-section">
                <VerticalTimeline>
                    {workItems.map((item, index) => (
                        <>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date={item.date}
                                dateClassName="w-date"
                                iconStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
                                icon={item.isEducation === "yes" ? <IoIosSchool /> : <MdWork />}
                            >
                                <p className="vertical-timeline-element-title w-title">{item.title}</p>
                                <p className="vertical-timeline-element-subtitle w-place">{item.place}</p>
                                <p className="w-content">{item.content}</p>
                            </VerticalTimelineElement>
                        </>
                    ))}

                    {/* <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2010 - 2011"
                        iconStyle={{ background: 'rgb(0,0,0)', color: '#fff' }}
                        icon={<IoIosSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Art Director</h3>
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                            Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                        </p>
                    </VerticalTimelineElement> */}
                </VerticalTimeline>
            </div>

        </div>
    );
};

export default Work;