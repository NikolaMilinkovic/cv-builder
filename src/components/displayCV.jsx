import { useState } from "react"
import "../styles/displayCV.css"

function DisplayCV({personalInfo}) {

  return (
    <div id="cv-header-container">
      <h1>{personalInfo.name}</h1>
      <div id="cv-header-contact-container">
        <p>{personalInfo.email}</p>
        <p>{personalInfo.phone}</p>
        <p>{personalInfo.address}</p>
      </div>
    </div>
  )
}

export default DisplayCV