import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import './design.css';
import '../index.css';


const About = ({ isDarkMode }) => {
  return (
    <div className='container-fluid'>
      <div className='d-sm-flex align-items-center justify-content-between'>
        <div>
          <Player
            src='https://assets9.lottiefiles.com/packages/lf20_mXdqmT1SH2.json'
            className="player"
            loop
            autoplay
            style={{ maxHeight: '700px', maxWidth: '700px' }}
          />
        </div>
        <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
          <h1 className='custom-font'>Skills, Languages, and Technologies</h1>
        </div>
      </div>
      <br />
      {/* Front-End */}
      <div className='d-flex flex-column align-items-center justify-content-center'>
        <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center'>
          <h1 className='pt-5 pb-2 custom-color'>Front-End</h1>
          <div className='d-flex justify-content-center flex-wrap'>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="HTML5" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>HTML5</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="CSS3" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>CSS3</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>JavaScript</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>React</p>
            </div>
            <div className='text-center mx-4'>
              <img style={{ 'backgroundColor': 'white', 'borderRadius': '100px' }} className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="React" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>Next.js</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" alt="Vue.js" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>Vue.js</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg" alt="AngularJS" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>AngularJS</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>Bootstrap</p>
            </div>
          </div>
        </div>
      </div>

      <br />
      {/*Back-End*/}
      <div className='d-flex flex-column align-items-center justify-content-center'>
        <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center'>
          <h1 className='pt-5 pb-2 custom-color'>Back-End</h1>
          <div className='d-flex justify-content-center flex-wrap'>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="python" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>Python</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="nodejs" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>Node.js</p>
            </div>
            {isDarkMode
              ? <div className='text-center mx-4'>
                <img style={{ 'borderRadius': '20px' }} className='my-3' src="https://seeklogo.com/images/D/django-logo-4C5ECF7036-seeklogo.com.png" alt="React" width="60" height="60" />
                <p className='aboutTextColour mb-0 technology-name'>Django</p>
              </div>
              : <div className='text-center mx-4'>
                <img className='my-3' src="https://raw.githubusercontent.com/devicons/devicon/55609aa5bd817ff167afce0d965585c92040787a/icons/django/django-plain.svg" alt="React" width="60" height="60" />
                <p className='aboutTextColour mb-0 technology-name'>Django</p>
              </div>}

            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="gijavat" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>Java</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" alt="csharp" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>C#</p>
            </div>

            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg" alt="dotnetcore" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>.NET Core</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>C</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" alt="C++" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>C++</p>
            </div>
          </div>
        </div>
      </div>

      <br />
      {/* Databases and tech */}
      <div className='d-flex flex-column align-items-center justify-content-center'>
        <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center'>
          <h1 className='pt-5 pb-2 custom-color'>Technologies</h1>
          <div className='d-flex justify-content-center flex-wrap'>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="oracle" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>Docker</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg" alt="aws" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>AWS</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="azure" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>Azure</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="Google Clooud" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>googlecloud</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>Kubernetes</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="firebase" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>Firebase</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg" alt="arduino" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>Arduino</p>
            </div>
            <div className='text-center mx-4'>
              <img className='my-3' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg" alt="raspberrypi" width="60" height="60" />
              <p className='aboutTextColour mb-0 technology-name'>Raspberry Pi</p>
            </div>
          </div>
        </div>
      </div>
      <br /><br />
    </div>
  )
}

export default About
