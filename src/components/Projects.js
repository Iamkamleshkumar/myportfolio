import React from 'react';
import data from '../data.js';
import Project from './Project.js';
import { Player } from '@lottiefiles/react-lottie-player';
import '../index.css';

const Projects = ({ windowSize, windowWidth, isMediumScreen, isSmallScreen, liveSiteText, sourceCodeText }) => {

  return (
    <div>
      <div className='container-fluid mainHome'>
        <div className='d-sm-flex align-items-center justify-content-between'>
          <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
            <h1 className='fw-bold custom-font'>Check out the Projects I have worked on</h1>

          </div>
          <div>
            <Player
              src='https://assets7.lottiefiles.com/packages/lf20_JQ0bqPxiN9.json'
              className="player"
              loop
              autoplay
              style={{ maxHeight: '500px', maxWidth: '500px' }}
            />
          </div>


        </div>
      </div>
      <div className="container-fluid projectsDivColour p-5 min-vh-100 ">
        <div className="row">
          {data.ProjectsData.map((project) => {
            return (
              <div>
                <div className="col-12 d-flex justify-content-center" key={project.id}>
                  <Project id={project.id}
                    image={project.img}
                    image2={project.img2}
                    name={project.name}
                    stack={project.stack}
                    live={project.live}
                    source={project.source}
                    Tech={project.Tech}
                    date={project.date}
                    // desc1={project.description1}
                    // desc2={project.description2}
                    // desc3={project.description3}
                    // desc4={project.description4}
                    desc1={isMediumScreen ? project.description1 : project.description5}
                    desc2={isMediumScreen ? project.description2 : project.description6}
                    desc3={isMediumScreen ? project.description3 : project.description7}
                    desc4={windowWidth >= 1400 ? project.description8 : ''}

                    windowSize={windowSize}
                    isSmallScreen={isSmallScreen}
                    isMediumScreen={isMediumScreen}
                    liveSiteText={liveSiteText}
                    sourceCodeText={sourceCodeText}
                    windowWidth={windowWidth}
                  />
                </div>
                {project.name === "Parkinson Disease Detection Wristband with Full Stack GUI" && windowWidth < 1200 && <div><br /><br /><br /><br /></div>}
              </div>

            )
          })}
        </div>

      </div>

    </div>
  )
}

export default Projects