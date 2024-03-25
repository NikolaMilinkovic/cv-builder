import { useState } from "react"
import "../styles/displayCV.css"

function DisplayCV({personalInfo, userImg, educationInfo}) {

  return (
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
          <div key={obj.id}>
            <p>{obj.school}</p>
            <p>{obj.degree}</p>
            <p>Start date: {obj.startDate instanceof Date ? obj.startDate.toLocaleDateString() : obj.startDate.toString()}</p>
            <p>End date: {obj.endDate instanceof Date ? obj.endDate.toLocaleDateString() : obj.endDate.toString()}</p>
            <p>{obj.location}</p>
          </div>
        ))}
        {/* <p>{educationInfo.school}</p>
        <p>{educationInfo.degree}</p>
        <p>Start date: {educationInfo.startDate instanceof Date ? educationInfo.startDate.toLocaleDateString() : educationInfo.startDate.toString()}</p>
        <p>End date: {educationInfo.endDate instanceof Date ? educationInfo.endDate.toLocaleDateString() : educationInfo.endDate.toString()}</p>
        <p>{educationInfo.location}</p> */}
      </div>
    </div>
  )
}

export default DisplayCV