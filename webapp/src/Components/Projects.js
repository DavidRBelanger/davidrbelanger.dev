import '../CSS/Projects.css';
import ATH_IMAGE from '../Images/alltimehoops.png';
import LEAHY_IMAGE from '../Images/leahy.png';
import ScrollAnimation from 'react-animate-on-scroll';

function Projects() {
    return (
        <div className="projects">
            <ScrollAnimation animateIn="fadeInLeft">

                <h1>Work & Projects</h1>
                <hr></hr>
            </ScrollAnimation>
            <div className="projects-container">
                <ScrollAnimation animateIn="fadeInLeft" delay="200">
                    <div className="project">
                        <div className="content-container">
                            <a href="https://www.linkedin.com/company/the-leahy-center" target="_blank" rel="noopener noreferrer"><h2>Software Developer</h2></a>
                            <p>1 year of experience at the Leahy Center for Digital Forensics & Cyerbsecurity.</p>
                            <div className="buttons-container">
                                <a href="https://github.com/davidrbelanger/alltimehoops" target="_blank" rel="noopener noreferrer">Github</a>
                                <a href="/leahy" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                        <div className="features-container">
                            <ul>
                                <li>.NET Framework</li>
                                <li>XAML</li>
                                <li>.NET Maui</li>
                                <li>RESTful API's</li>
                            </ul>
                        </div>
                        <div className="image-container">
                            <img src={LEAHY_IMAGE} alt="Leahy Center Logo" />
                        </div>
                    </div>
                </ScrollAnimation>
                <ScrollAnimation animateIn="fadeInLeft" delay="500">
                    <div className="project">
                        <div className="content-container">
                            <a href="https://alltimehoops.com" target="_blank" rel="noopener noreferrer"><h2>alltimehoops.com</h2></a>
                            <p>A Historical NBA Encylopedia, made for year-by-year reference.</p>
                            <div className="buttons-container">
                                <a href="https://github.com/davidrbelanger/alltimehoops" target="_blank" rel="noopener noreferrer">Github</a>
                                <a href="/alltimehoops" target="_blank" rel="noopener noreferrer">Learn More</a>
                            </div>
                        </div>
                        <div className="features-container">
                            <ul>
                                <li>React.js</li>
                                <li>Node.js</li>
                                <li>Firebase</li>
                                <li>RESTful API's</li>
                            </ul>
                        </div>
                        <div className="image-container">
                            <img src={ATH_IMAGE} alt="All Time Hoops Logo" />
                        </div>
                    </div>
                </ScrollAnimation>
                {/*} REMOVE THIS COMMENT FOR FUTURE PROJECTS
        <div className="right">
            <h2>Project 2</h2>
            <p>Project Description</p>
        </div>
        <div className="left">
            <h2>Project 3</h2>
            <p>Project Description</p>
        </div>
        <div className="right">
            <h2>Project 4</h2>
            <p>Project Description</p>
        </div>
        <div className="left">
            <h2>Project 5</h2>
            <p>Project Description</p>
        </div>
        */}
            </div>
        </div>
    );
}


export default Projects;