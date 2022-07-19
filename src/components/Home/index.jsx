import NavBar from "./NavBar";
import Typed from "react-typed"
import "./index.scss";
import Resume from "../../assets/resume.pdf"
import { Animated } from "react-animated-css";

const roles = [
    "Software Engineer at Walmart",
    "Technology Enthusiast"
]

const Home = () => {

    return (
        <div className="container">
            <NavBar />

            <div className="home">
                <Animated animationIn="slideInUp">
                    <p className="i-title">WELCOME TO MY WORLD</p>
                </Animated>
                <Animated animationIn="slideInDown">
                    <div className="i-name">
                        <p>I am</p>
                        <p>Akash VS</p>
                    </div>
                </Animated>
                <div className="i-roles">
                    <Typed
                        strings={roles}
                        typeSpeed={150}
                        backSpeed={100}
                        loop
                    />
                </div>
                <a href={Resume} download="resume.pdf">
                    <button className="cv-button">DOWNLOAD CV</button>
                </a>
            </div>

        </div>
    )
};

export default Home;