import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faTwitter,faInstagram,faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons'
const Social = () => {
    return (
        <>
       <div className="social-container"> 
        <a className="facebook socialicon" href="https://www.facebook.com/Adi72Hzb" target="_blank">
            <FontAwesomeIcon icon={faFacebook} size="3x"/>
        </a>
        <a className="instagram socialicon" href="https://www.instagram.com/adi72hzb/?hl=en" target="_blank">
            <FontAwesomeIcon icon={faInstagram} size="3x"/>
        </a>
        <a className="linkedin socialicon" href="https://www.linkedin.com/in/aditya-narayan-819b4a1a5/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="3x"/>
        </a>
        <a className="github socialicon" href="https://www.facebook.com/Adi72Hzb" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="3x"/>
        </a>
        <a className="twitter socialicon" href="https://twitter.com/Adi72Hzb" target="_blank">
            <FontAwesomeIcon icon={faTwitter} size="3x"/>
        </a>
       </div>
       <div class="lastdiv"><p class="last">By Adi72Hzb,2021</p></div>
       
       </>
    )
}

export default Social;
