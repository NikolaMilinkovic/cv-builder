import { useState } from "react"
import "../styles/displayCV.css"
import Icon from "../icon";


function DisplayCV({personalInfo, userImg, educationInfo, experienceInfo}) {

  return (
    <div id="cv-display-wrapper">
      <div id="cv-display-container">
        <div id="cv-header-container">
          <div id="image-container">
            <img id="display-image" src={userImg} />
          </div>

          {/* Header */}
          <div id="img-name-container">
            <h1>{personalInfo.name}</h1>
            <div id="cv-header-contact-container">
              <div className="icon-text-display">
                <Icon
                  path="src/assets/img/icons/dark-theme/envelope-dark.svg"
                  alt="Email icon"
                  className={"icon-container"}
                /> 
                <p>{personalInfo.email}</p>
              </div>
              <div className="icon-text-display">
                <Icon
                  path="src/assets/img/icons/dark-theme/phone-dark.svg"
                  alt="Phone icon"
                  className={"icon-container"}
                /> 
                <p>{personalInfo.phone}</p>
              </div>
              <div className="icon-text-display">
                <Icon
                  path="src/assets/img/icons/dark-theme/address-dark.svg"
                  alt="Address icon"
                  className={"icon-container"}
                /> 
                <p>{personalInfo.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Education */}
        <div>
          <div id="cv-education-container">
            <div className="icon-header-display">
              <Icon
                path="src/assets/img/icons/dark-theme/graduate-dark.svg"
                alt="Education icon"
                className={"icon-container-reverse"}
              /> 
              <h1 className="cv-header">Education</h1>
            </div>
            {educationInfo.map(obj => (
              <div key={obj.id} className="cv-education-section">
                <div className="border-right">
                  <div className="flex">
                    <p>{obj.startDate instanceof Date ? obj.startDate.toLocaleDateString() : obj.startDate.toString()}</p>
                    <pre>  -  </pre>
                    <p>{obj.endDate instanceof Date ? obj.endDate.toLocaleDateString() : obj.endDate.toString()}</p>
                  </div>
                  <p className="location-p">{obj.location}</p>
                </div>
                <div>
                  <h2>{obj.school}</h2>
                  <p>{obj.degree}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Experience */}
          <div id="cv-experience-container">
            <div className="icon-header-display">
              <Icon
                path="src/assets/img/icons/dark-theme/briefcase-dark.svg"
                alt="Education icon"
                className={"icon-container-reverse"}
              /> 
              <h1 className="cv-header">Experience</h1>
            </div>
            {experienceInfo.map(obj => (
              <div key={obj.id} className="cv-experience-section">
                <div className="border-right">
                  <div className="flex">
                    <p>{obj.startDate instanceof Date ? obj.startDate.toLocaleDateString() : obj.startDate.toString()}</p>
                    <pre>  -  </pre>
                    <p>{obj.endDate instanceof Date ? obj.endDate.toLocaleDateString() : obj.endDate.toString()}</p>
                  </div>
                  <p className="location-p">{obj.location}</p>
                </div>
                <div>
                  <h2>{obj.company}</h2>
                  <h3>{obj.position}</h3>
                  <p>{obj.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayCV