import ScrollAnimation from 'react-animate-on-scroll'
import "animate.css/animate.compat.css"

import resume from '../assets/resume.svg'
import paperclip from '../assets/paperclip.png'

const Resume = () =>{
    return(
        <>
        <ScrollAnimation animateIn='fadeInRight' duration={4}>
            <div className="resume">
                <div className="resumeDiv">
                    <p className="resumeText">
                        experiences:
                    </p>
                </div>
                <div className="resumeFlex">
                    <img className="resume-icon" src={resume} alt="resume-icon" />
                    <div className="more-experiencesDiv">
                        <p className="more-experiences">
                            check out my other skills and experiences below:
                        </p>
                        <button className="paperclipB">
                            <a href="https://uconn-my.sharepoint.com/:w:/g/personal/mia_larkin_uconn_edu/ER1T2WMiVw9ZOQhEDo9R4nYB1ylI4yqKwO6gNnfRSwqpsQ" target='_blank' >
                                <img style={{width: '50px'}} src={paperclip} alt="paperclip" />
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </ScrollAnimation>
        
        </>
    )
}

export default Resume