import { useState } from "react"
import PersonalDetails from "./components/personal_details.jsx"
import DisplayCV from "./components/displayCV.jsx"
import data from "./data.js"

function App() {
  const [personalInfo, setPersonalInfo] = useState(data.personalInfo);

  function handleInputChange(event){
    const {name, value} = event.target;

    setPersonalInfo((prev) => {
      return {...prev, [name]: value}
    })
  }

  return (
    <div id="page-content-container">
      <section>
        <PersonalDetails 
          personalInfo = {personalInfo}
          onChange={handleInputChange}
          name={personalInfo.name}
          email={personalInfo.email}
          phone={personalInfo.phone}
          address={personalInfo.address}
        />
      </section>
      <section>
        <DisplayCV
          personalInfo = {personalInfo}
        />
      </section>
    </div>
  )
}

export default App
