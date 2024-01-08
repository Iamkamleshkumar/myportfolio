import React from 'react'
import ExperienceData from '../ExperienceData.js'
import Experience from './Experience.js'
import { Player } from '@lottiefiles/react-lottie-player'
import '../index.css';

const Experiences = ({windowWidth, isSmallScreen, isMediumScreen}) => {
    return (
        <div>
            <div className='container-fluid mainHome'>
                <div className='d-sm-flex align-items-center justify-content-between'>
                    <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
                        <h1 className='fw-bold custom-font'>Relevant Experience as a Software Developer</h1>

                    </div>
                    <div>
                        <Player
                            src='https://assets8.lottiefiles.com/private_files/lf30_3rex3dkf.json'
                            className="player"
                            loop
                            autoplay
                            style={{ maxHeight: '700px', maxWidth: '700px' }}
                        />
                    </div>
                </div>
            </div>
            <div className="container-fluid projectsDivColour p-5 min-vh-100">
                <div className="row">
                    {ExperienceData.ExperiencesData.map((experience) => {
                        return (

                            <div className="col-12 d-flex justify-content-center" key={experience.id}>
                                <Experience id={experience.id}
                                    job={experience.job}
                                    image={experience.img}
                                    type={experience.Type}
                                    date={experience.date}
                                    name={experience.name}
                                    location={experience.location}
                                    stack={experience.stack}
                                    live={experience.live}
                                    source={experience.source}
                                    desc1={experience.description1}
                                    desc2={experience.description2}
                                    desc3={experience.description3}
                                    desc4={experience.description4}
                                    desc5={experience.description5}
                                    colour={experience.colour}
                                    windowWidth={windowWidth} 
                                    isSmallScreen={isSmallScreen} 
                                    isMediumScreen={isMediumScreen}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>

    )
}

export default Experiences