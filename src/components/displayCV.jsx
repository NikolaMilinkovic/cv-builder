import { useState } from "react"
import "../styles/displayCV.css"

function DisplayCV({personalInfo, userImg, educationInfo, experienceInfo}) {

  return (
    <div id="cv-display-wrapper">
      <div id="cv-display-container">
        <div id="cv-header-container">
          <div id="image-container">
            <img id="display-image" src={userImg} />
          </div>
          <div id="img-name-container">
            <h1>{personalInfo.name}</h1>
            <div id="cv-header-contact-container">
              <p>{personalInfo.email}</p>
              <p>{personalInfo.phone}</p>
              <p>{personalInfo.address}</p>
            </div>
          </div>
        </div>
        <div id="cv-education-container">
          {educationInfo.map(obj => (
            <div key={obj.id} className="cv-education-section">
              <p>{obj.school}</p>
              <p>{obj.degree}</p>
              <p>Start date: {obj.startDate instanceof Date ? obj.startDate.toLocaleDateString() : obj.startDate.toString()}</p>
              <p>End date: {obj.endDate instanceof Date ? obj.endDate.toLocaleDateString() : obj.endDate.toString()}</p>
              <p>{obj.location}</p>
            </div>
          ))}
        </div>
        <div id="cv-experience-container">
          {experienceInfo.map(obj => (
            <div key={obj.id}>
              <p>{obj.company}</p>
              <p>{obj.position}</p>
              <p>Start date: {obj.startDate instanceof Date ? obj.startDate.toLocaleDateString() : obj.startDate.toString()}</p>
              <p>End date: {obj.endDate instanceof Date ? obj.endDate.toLocaleDateString() : obj.endDate.toString()}</p>
              <p>{obj.location}</p>
              <p>{obj.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default DisplayCV