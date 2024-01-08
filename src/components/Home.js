import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import About from './About';
import Experiences from './Experiences';
import Projects from './Projects';
import Contact from './Contact';
import '../index.css';

import { FaLinkedin, FaGithub } from 'react-icons/fa';
const Home = ({ theme, isDarkMode, isMediumScreen, isSmallScreen, windowSize, windowWidth, liveSiteText, sourceCodeText }) => {
  return (
    <section id='home' className="background p-5 min-vh-100">
      <div className='container-fluid mainHome'>
        <div className='d-sm-flex align-items-center justify-content-between'>
          <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
            <h1 className='NameColour'>Hey! I'm Kamlesh Kumar</h1>
            <h1 id='AboutMe' className='fw-bold custom-font'>Software Developer</h1>
          </div>
          {windowWidth <= 700 && <div>
            <Player
              src='https://assets6.lottiefiles.com/packages/lf20_DbCYKfCXBZ.json'
              className="player"
              loop
              autoplay
              style={{ maxHeight: '150px', maxWidth: '150px' }}
            />
          </div>}
          {windowWidth > 700  && windowWidth < 1100 && <div>
            <Player
              src='https://assets6.lottiefiles.com/packages/lf20_DbCYKfCXBZ.json'
              className="player"
              loop
              autoplay
              style={{ maxHeight: '350px', maxWidth: '350px' }}
            />
          </div>}
          {windowWidth > 1100 && <div>
            <Player
              src='https://assets6.lottiefiles.com/packages/lf20_DbCYKfCXBZ.json'
              className="player"
              loop
              autoplay
              style={{ maxHeight: '400px', maxWidth: '400px' }}
            />
          </div>}
        </div>
      </div>
      <hr style={{ backgroundColor: theme }} /><br />
      <div className='displayFlexT'>
        {windowWidth > 1200 && <div>
          <Player
            src='https://assets4.lottiefiles.com/packages/lf20_5ko2mBiWUp.json'
            className="player spLottie"
            loop
            autoplay
            style={{ maxHeight: '700px', maxWidth: '700px' }}
          />
        </div>}
        <div>
          <h1 className='fw-bold custom-font DescMe DescMe2'>About me</h1>
          <p className='DescMe aboutTextColour'>
          I am graduated in August 2023 from Electronics & Communication Engineering (ECE)  at Greater Noida Institute of Technology but found my love in computers and code with a strong foundation in various programming languages and technologies. My expertise includes Java, Python, C++, and JavaScript, along with proficiency in working with databases like MySQL and MongoDB. Additionally, I have gained hands-on experience during my time at Blaccsckull Platforms Private Limited, Omikron Technologies Private Limited., where I contributed to the development of applications, refining my skills in agile methodologies. I've also completed diverse projects using React.js,Express.js, Node.js, PHP,MySQL,MongoDB, Full Stack development.<br /><br />
            I thrive in dynamic environments and am always eager to learn new technologies and methodologies. In my free time outside of work, I find joy in engaging in sports such as Cricket. I'm very approachable and easy to talk to so feel free to reach out: <a style={{'color': '#3EDD8e'}} href='mailto:Kamleshcoder@gmail.com'>Kamleshcoder@gmail.com</a><br /><br />
            {/* <a href='https://www.linkedin.com/in/adamazizi/' target='_blank' rel='noreferrer' style={{ fontSize: '20px', marginRight: '10px' }}>
              <FaLinkedin style={{ color: '#3edd8e' }} />
            </a> */}
            <a href='https://github.com/Kamleshcoderr' target='_blank' rel='noreferrer' style={{ fontSize: '20px', marginRight: '10px' }}>
              <FaGithub style={{ color: '#3edd8e' }} />
            </a>
          </p>
        </div>
      </div>

      <br /><hr id='skills' style={{ backgroundColor: theme }}></hr><br /><br /><br />
      <About isDarkMode={isDarkMode} windowWidth={windowWidth} isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen} />
      <hr id='experience' style={{ backgroundColor: theme }} />
      <Experiences windowWidth={windowWidth} isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen}/>
      <hr id='projects' style={{ backgroundColor: theme }} />
      <Projects windowSize={windowSize} windowWidth={windowWidth} isSmallScreen={isSmallScreen} isMediumScreen={isMediumScreen} liveSiteText={liveSiteText} sourceCodeText={sourceCodeText} />
      <hr id='contact' style={{ backgroundColor: theme }} />
      <Contact />
    </section>
  )
}

export default Home