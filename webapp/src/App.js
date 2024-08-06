import './index.css';
import TypeWriter from 'typewriter-effect';
import githubImage from './Images/github.png';
import linkedinImage from './Images/linkedin.png';
import reactImage from './Images/react.png';
import netImage from './Images/.net.png';
import javaImage from './Images/java.png';
import cppImage from './Images/cpp.png';
import nodeJsImage from './Images/nodejs.png';
import mySQLImage from './Images/sql.webp';
import profileImage from './Images/profile.jpg';
import Navbar from './Components/Navbar';
import Stack from './Components/Stack';
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
import Projects from './Components/Projects';
function App() {
  return (
    <>
      <div className="first-section">

        <Navbar />
        <div className="App">
          <div className="content">
            <div className="landing">
              <h2>Hey, I'm</h2>
              <h3>David.</h3>

            </div>
            <div className="landing2">
              <h2>I am a</h2>
              <div className="typewriter">

                <TypeWriter
                  options={{
                    strings: ['Software Engineer', 'React Developer', 'CS Student', 'Full-Stack Developer', 'Thing Maker', 'Stack Overflow Addict'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
              <div className="buttons-container">
                <div className="button-container">
                  <a> <img src={githubImage} id="github-button" alt="GitHub Logo" /> </a>
                </div>
                <div className="button-container">
                  <a> <img src={linkedinImage} id="github-button" alt="GitHub Logo" /> </a>
                </div>
                <a><button>Resume</button></a>

              </div>
            </div>
          </div>
          <div className="skills">

            <div className="stack-container">
              <Stack image={reactImage} name="React.js" />
              <Stack image={netImage} name=".NET" />
              <Stack image={cppImage} name="C++" />
              <Stack image={javaImage} name="Java" />
              <Stack image={nodeJsImage} name="Node.js" />
              <Stack image={mySQLImage} name="MySQL" />
            </div>
          </div>
        </div>
      </div>
      <div className="second-section">
        <div className="split">

          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="HeroTiltGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: "#f8f9fa", stopOpacity: 1 }}></stop>
                <stop offset="100%" style={{ stopColor: "#f8f9fa", stopOpacity: 1 }}></stop>
              </linearGradient>
            </defs>
            <path d="M0 120L1200 16.48 1200 0 0 0 0 120z" fill="url(#HeroTiltGradient)" ></path>
          </svg>
        </div>

        <div className="about" id="about">
          <ScrollAnimation animateIn='fadeIn'>
            <h2 >About Me</h2>
          </ScrollAnimation>
          <div className="about-grid-container" >
            <div className="about-grid-first">
              <div className="about-text">
                <ScrollAnimation animateIn='fadeInLeft' delay={100}>
                  <p>I am a <span className="highlightedText">Computer Science </span> student at Champlain College interested in Artificial Intelligence, Mathematics, and Data Analytics.</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInLeft' delay={200}>
                  <p>My passion for technology ignited a love for software development, where I find a perfect blend of creativity and problem solving.</p>
                </ScrollAnimation>
                <ScrollAnimation animateIn='fadeInLeft' delay={300}>
                  <p>With proficiency in <span className="highlightedText">React</span>, <span className="highlightedText">.NET frameworks</span>, <span className="highlightedText">Node.js</span>, and <span className="highlightedText">Java</span>, I bring a strong technical foundation and
                    proven ability to deliver high-quality software solutions. </p>
                </ScrollAnimation>
              </div>
            </div>
            <div className="about-grid-second">
              <ScrollAnimation animateIn='fadeInRight' delay={400}>
                <img src={profileImage}></img>
                <div className="rectangle-behind"></div>
              </ScrollAnimation>
            </div>
          </div>
        </div>

      </div >
      <div className="Projects-Section" >
        <div className="projects-split" >
          <svg xmlns="http://www.w3.org/2000/svg" id="projects" viewBox="0 0 1000 100" fill="#000"><path d="M1000 100C500 100 500 4 0 4V0h1000v100Z" fill="currentColor"></path></svg>          </div>
        <div className="projects">
          <Projects  />
        </div>
      </div>
      <div className="Contact-Section">
        <div className="Contact-Split">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="currentColor"><path d="M0 0v100S500 4 1000 4V0H0Z"></path></svg>
        </div>
        <div className="contact-container">
          <h2 id="contact-title">Contact Me</h2>
          <hr />

          <p>Have a question or want to work with me? Contact me on one of the following platforms.</p>
          <p>I am always open to new professional opportunities as a software engineer.</p>
            <ul>
              <li>
                <a href="https://www.linkedin.com/in/davidrbelanger23/" target="_blank" rel="noopener noreferrer">Linkedin</a>
              </li>
            </ul>
        </div>
      </div>

    </>
  );
}

export default App;
