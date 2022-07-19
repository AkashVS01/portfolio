import React, { useRef, useState } from "react";
import { FaUserCircle, FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import emailjs from '@emailjs/browser';
import "./index.scss";

const Contact = () => {

    const formData = useRef();

    const [msg, setMsg] = useState("");
    const [msgColor, setMsgColor] = useState("");
    
    const links = {
        linkedIn: "https://www.linkedin.com/in/akash-vs-7ba569198/",
        instagram: "https://www.instagram.com/akash__v__s/",
        twitter: "https://twitter.com/AkashVS78901792",
        gitHub: "https://github.com/AkashVS01"
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            emailjs.sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID,
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formData.current,
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
                .then((result) => {
                    setMsg("Message sent successfully!!");
                    setMsgColor("success");
                    e.target.reset();
                }, (error) => {
                    setMsg("Something went wrong. Please try later!!");
                    setMsgColor("failure");
                });
        } catch (err) {
            setMsg("Something went wrong. Please try later!!");
            setMsgColor("failure");
        }

    }

    return (
        <div id="contact">
            <div className="title">
                <AnimationOnScroll animateIn="animate__bounceIn">
                    <h1>Contact</h1>
                    <p className="sub-title">Get in Touch with me</p>
                </AnimationOnScroll>
            </div>


            <div className="contact-section">

                <div className="contact-flexbox">
                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                        <div className="left-column">
                            <p className="c-title">Let's catch up</p>
                            <div className="c-details">
                                <FaUserCircle className="react-icon" />
                                <p className="c-contact">Akash VS</p>
                                <GrMail className="react-icon" />
                                <p className="c-contact">akashvs5627@gmail.com</p>
                            </div>
                            <div className="social-flexbox">
                                <a href={links.linkedIn} target="_blank" rel="noopener noreferrer">
                                    <FaLinkedin className="react-icon" />
                                </a>
                                <a href={links.gitHub} target="_blank" rel="noopener noreferrer">
                                    <FaGithub className="react-icon" />
                                </a>
                                <a href={links.twitter} target="_blank" rel="noopener noreferrer">
                                    <FaTwitter className="react-icon" />
                                </a>
                                <a href={links.instagram} target="_blank" rel="noopener noreferrer">
                                    <FaInstagram className="react-icon" />
                                </a>
                            </div>
                        </div>
                    </AnimationOnScroll>

                    <AnimationOnScroll animateIn="animate__fadeInLeft">
                        <div className="right-column">
                            <form ref={formData} onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    name="from_name"
                                    className="input-field set-height"
                                    required></input>

                                <input
                                    type="text"
                                    placeholder="Your email"
                                    name="from_email"
                                    className="input-field set-height"
                                    required></input>

                                <textarea
                                    cols="30"
                                    rows="7"
                                    placeholder="Type message.."
                                    name="message"
                                    className="input-field"
                                    required></textarea>

                                <div>
                                    <input type="submit" className="submit-button"></input>
                                    <p className={msgColor}>{msg}</p>
                                </div>
                            </form>
                        </div>
                    </AnimationOnScroll>

                </div>
            </div>

        </div >

    );
};

export default Contact;