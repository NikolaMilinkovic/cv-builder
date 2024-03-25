import { useState } from "react"
import PersonalDetails from "./components/personal_details.jsx"
import Education from "./components/education.jsx"
import DisplayCV from "./components/displayCV.jsx"
import ContentControls from "./components/input_layout_selectors.jsx"
import data from "./data.js"
import { v4 as uuid } from "uuid";

function App() {
  // State trackers
  const [displayOption, setDisplayOption] = useState("input") // Can be input / layout
  const [personalInfo, setPersonalInfo] = useState(data.personalInfo);
  const [educationInfo, setEducationInfo] = useState(data.educationInfo);
  const [numOfDegrees, setNumOfDegrees] = useState(0);
  const [userImg, newUserImg] = useState("src/assets/img/profile-img-placeholder.jpg");

  // State handling methods
  function handleDisplayOptions(event){
    setDisplayOption(event.target.name);
  }
  function handleInputChange(objectName, event){
    const parentId = event.target.parentNode.getAttribute("id");
    const {name, value} = event.target;
    switch (objectName) {
    case "personalInfo":
      setPersonalInfo(prev => ({ ...prev, [name]: value }));
      break;
    case "educationInfo":
      setEducationInfo(prev => {
        return prev.map((item) => {
          if(item.id === parentId){
            return { ...item, [name]: value }
          }
          return item;
        });
      });
      break;
    default:
      break;
    }
  }
  function handleDateChange(objectName, name, value, parentId){
    console.log("Parent id is: ",parentId);
    switch (objectName) {
    case "personalInfo":
      setPersonalInfo(prev => ({ ...prev, [name]: value }));
      break;
    case "educationInfo":
      setEducationInfo(prev => {
        return prev.map((item) => {
          if(item.id === parentId){
            return { ...item, [name]: value }
          }
          return item;
        });
      });
      break;
    default:
      break;
    }
  }
  function DegreeShowToggle(parentId){
    event.preventDefault();
    setEducationInfo(prev => {
      return prev.map(item => {
        if(item.id === parentId){
          return {...item, show: !item.show};
        }
        return item;
      })
    })
  }
  function addNewDegree(){
    const newEducationInfo = [...educationInfo];
    const newDegree = {
      id: uuid(),
      school: "New Degree",
      degree: "",
      location: "",
      startDate: "",
      endDate: "",
      show: true,
    }
    newEducationInfo.push(newDegree);
    setEducationInfo(newEducationInfo);
  }
  function removeDegree(parentId){
    event.preventDefault();
    for(let i = 0; i <= educationInfo.length; i++){
      if(educationInfo[i].id === parentId){
        const newEducationInfo = [...educationInfo];
        newEducationInfo.splice(i,1);
        setEducationInfo(newEducationInfo)
      }
    }
  }
  function clearDegree(parentId){
    for(let i = 0; i <= educationInfo.length; i++){
      if(educationInfo[i].id === parentId){
        const newEducationInfo = [...educationInfo];
        const traverse = ["degree","location","startDate","endDate"];
        traverse.forEach(attribute => {
          `${newEducationInfo[i][attribute]= ""}`
        });
        newEducationInfo[i].show = true;
        newEducationInfo[i].school = "Enter School name";

        setEducationInfo(newEducationInfo)
      }
    }
  }

  function handleImageUpload(){
    const image = document.getElementById("upload").files[0];
    const reader = new FileReader();
    reader.onload = function(event) {
      document.getElementById("display-image").src = event.target.result;
    }
    reader.readAsDataURL(image);
  }

  return (
    <div id="page-content-container">
  
      <section>
        <ContentControls onClick={handleDisplayOptions} active={displayOption}/>
        {displayOption === "input" && (
          <>
            <PersonalDetails 
              personalInfo = {personalInfo}
              onChange={(e) => handleInputChange("personalInfo", e)}
              handleUserImg={handleImageUpload}
            />

            <Education
              educationInfo = {educationInfo}
              onChange={(e) => handleInputChange("educationInfo", e)}
              onDateChange={(name, date, event) => handleDateChange("educationInfo", name, date, event)}
              degreeShowToggle={DegreeShowToggle}
              removeDegree={removeDegree}
              addNewDegree={addNewDegree}
              clearDegree={clearDegree}
            />
          </>
        )}
      </section>
      <section>
        <DisplayCV
          personalInfo = {personalInfo}
          userImg = {userImg}
          educationInfo = {educationInfo}
        />
      </section>
    </div>
  )
}

export default App