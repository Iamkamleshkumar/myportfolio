import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import '../index.css';

const Contact = () => {

  return (
    <div className='container-fluid mainHome'>
      <div id='testingthis' className='d-sm-flex align-items-center justify-content-between'>
        <div className='ms-sm-5 ps-sm-5 d-flex flex-column text-center align-items-center align-items-lg-start'>
          <h1 className='fw-bold custom-font'>Reach out to me!</h1>
          <p className='fw-bold custom-font'>Email: Kamleshcoder@gmail.com</p>
          <p className='fw-bold custom-font'>Mobile No: +918969685914</p>
          <div class="containerSM">
            {/* <a href="https://www.linkedin.com/in/adamazizi/" target="_blank" rel="noreferrer" class="btnSM in contactButtons">
              <i id='iTarget'><FaLinkedin /></i>
            </a> */}
            <a href="https://github.com/Kamleshcoderr" target="_blank" rel="noreferrer" class="btnSM gh contactButtons">
              <i id='iTarget' ><FaGithub /></i>
            </a>
              <a href="mailto:Kamleshcoder@gmail.com" class="btnSM en contactButtons">
                <i id='iTarget'><FaEnvelope /></i>
              </a>
          </div>
        </div>

        <div>
          <Player
            src='https://assets10.lottiefiles.com/packages/lf20_u25cckyh.json'
            className="player"
            loop
            autoplay
            style={{ maxHeight: '600px', maxWidth: '600px' }}
          /> 
        </div>
      </div>
    </div>
  )
}

export default Contact
