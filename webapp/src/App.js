import './index.css';
import TypeWriter from 'typewriter-effect';
import githubImage from './Images/github.png';
import linkedinImage from './Images/linkedin.png';
import reactImage from './Images/react.png';
import Navbar from './Components/Navbar';
import Stack from './Components/Stack';
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <div className="content">
          <div className="landing">
            <h2>Hey, I am</h2>
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
              <a><button>Resume</button></a>
              <a> <img src={githubImage} id="github-button" alt="GitHub Logo" /> </a>
              <a> <img src={linkedinImage} id="github-button" alt="GitHub Logo" /> </a>
            </div>
          </div>
        </div>
        <div className="skills">
          <ScrollAnimation animateIn="fadeIn">



            <div className="stack-container">
              <Stack image={reactImage} name="React" />
              <Stack image={reactImage} name="React" />
              <Stack image={reactImage} name="React" />
              <Stack image={reactImage} name="React" />
              <Stack image={reactImage} name="React" />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </>
  );
}

export default App;
