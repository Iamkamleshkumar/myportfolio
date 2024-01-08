import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';
import { BiLinkExternal } from 'react-icons/bi';

function Project({ liveSiteText, windowWidth, sourceCodeText, isSmallScreen, isMediumScreen, id, image, name, stack, live, source, Tech, date, image2, desc1, desc2, desc3, desc4, desc5, desc6, desc7, desc8, colour, job, location }) {
    const descriptions = [desc1, desc2, desc3, desc4, desc5, desc6];
    const filteredDescriptions = descriptions.filter(desc => desc);



    return (
        <div style={{ height: isSmallScreen ? '950px' : '', width: isSmallScreen ? '700px' : ''}} className="">
            <div className="shadow-lg mb-5" style={{ borderRadius: isSmallScreen ? "30px" : "30px 0 0 30px", position: "relative" }}>
                <div style={{ display: isSmallScreen ? 'block' : 'flex' }} className="justify-content-between">
                    <div className=''>
                        {name === 'Face Detector Full Stack Application'
                            && <img
                                src={image}
                                className="img-fluid"
                                style={{ width: isSmallScreen ? "1700px" : '2000px', height: "100%", objectFit: "fill", borderRadius: isSmallScreen ? "30px 30px 0 0" : "30px 0 0 30px" }}
                                alt={name}
                            />}
                        {name === 'Full Stack Application with Multiplayer Pong Game'
                            && <img
                                src={image}
                                className="img-fluid"
                                style={{ width: isSmallScreen ? "1400px" : '2200px', height: "100%", objectFit: "fill", borderRadius: isSmallScreen ? "30px 30px 0 0" : "30px 0 0 30px" }}
                                alt={name}
                            />}
                        {name === 'Parkinson Disease Detection Wristband with Full Stack GUI'
                            && <img
                                src={image}
                                className="img-fluid"
                                style={{ width: isSmallScreen ? "1820px" : '2390px', height: "100%", objectFit: "fill", borderRadius: isSmallScreen ? "30px 30px 0 0" : "30px 0 0 30px" }}
                                alt={name}
                            />}
                        {name === 'Bookstore Management App'
                            && <img
                                src={image}
                                className="img-fluid"
                                style={{ width: isSmallScreen? "1505px" : '2265px', height: "100%", objectFit: "fill", borderRadius: isSmallScreen ? "30px 30px 0 0" : "30px 0 0 30px" }}
                                alt={name}
                            />}
                    </div>
                    <div
                        className='p-4 cardBackgroundColour'
                        style={{
                            borderTopRightRadius: isSmallScreen ? '0' : '30px',
                            borderTopLeftRadius: isSmallScreen ? '3px0' : '0px',
                            borderBottomRightRadius: '30px',
                            borderBottomLeftRadius: isSmallScreen ? '30px' : '0px'
                         }}>
                        <h5 className="fw-bold text-white">{name}</h5>
                        <hr style={{ backgroundColor: "white" }} />

                        {filteredDescriptions.length > 0 && (
                            <ul>
                                {filteredDescriptions.map((desc, index) => (
                                    <li key={index} className="p-1 text-white">{desc}</li>
                                ))}
                            </ul>
                        )}

                        <hr style={{ backgroundColor: "white" }} />
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div><p className="techText">{Tech}</p></div>
                            <div>
                                {live && (
                                    <a href={live} target="_blank" rel="noreferrer" className='link'>
                                        {liveSiteText} <BiLinkExternal style={{ color: '#3edd8e' }} />
                                    </a>
                                )} &nbsp;&nbsp;&nbsp;
                                <a href={source} target="_blank" rel="noreferrer" className='link'>
                                    {sourceCodeText} <AiOutlineGithub style={{ color: '#3edd8e' }} />
                                </a>
                            </div>

                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Project;
