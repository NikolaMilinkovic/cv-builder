import { useState } from "react"
import "../styles/displayCV.css"
import "../styles/experience.css"
import InputGroup from "../input_group"
import InputDateGroup from "../input_group_date"
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuid } from "uuid";

function Experience({
  experienceInfo, 
  onChange, 
  onDateChange, 
  showToggle, 
  removeExperience, 
  addNewExperience, 
  clearExperience
}) {

  // Logic for tracking show / hide toggle
  const [showExperience, setShowExperience] = useState(false);
  function toggleShow(){
    showExperience === true ? setShowExperience(false) : setShowExperience(true);
  }

  //   Button generation methods
  function Button({onClick}){
    return <button className="section-btn" onClick={onClick}><h1>Experience</h1></button>
  }
  function ButtonNormal({btnText="", onClick, id="", className=""}){
    return <button id={id} onClick={onClick} className={className}>{btnText}</button>
  }

  return (
    <form id="experience-container">
      <Button
        onClick={toggleShow}
        id="btn-experience-container-show-toggle"
      />

      {showExperience === true && (
        <>
          {experienceInfo.map(obj => (
            
            <>
              <ButtonNormal
                btnText={obj.company}
                onClick={() => {showToggle(obj.id)}}
                className="btn-degree-show-toggle"
                id="btn-experience-show-toggle"
              />
              <div 
                className="experience-input-section-display"
                key={obj.id}
                id={obj.id} 
              >


                {obj.show && (
                  <>
                    {/* Company Name */}
                    <InputGroup
                      htmlFor="input-company"
                      labelText="Company name"
                      type="text"
                      name="company"
                      id="input-company"
                      placeholder="Like the worst company ever!"
                      ariaLabel="Company name"
                      value={obj.comapny}
                      onChange={onChange}
                    />

                    {/* Position */}
                    <InputGroup
                      htmlFor="input-position"
                      labelText="Position"
                      type="text"
                      name="position"
                      id="input-position"
                      placeholder="Professional full time rat chaser"
                      ariaLabel="Position"
                      value={obj.position}
                      onChange={onChange}
                    />

                    {/* Start Date */}
                    <InputDateGroup
                      htmlFor="input-position-start-date"
                      labelText="Start Date"
                      name="startDate"
                      id="input-position-start-date"
                      ariaLabel="Start Date"
                      selectedDate={obj.startDate}
                      onChange={onDateChange}
                      parentId={obj.id}
                    />

                    {/* End Date */}
                    <InputDateGroup
                      htmlFor="input-position-end-date"
                      labelText="End Date"
                      name="endDate"
                      id="input-position-end-date"
                      ariaLabel="End Date"
                      selectedDate={obj.endDate}
                      onChange={onDateChange}
                      parentId={obj.id}
                    />

                    {/* Location */}
                    <InputGroup
                      htmlFor="input-company-location"
                      labelText="School Location"
                      type="text"
                      name="location"
                      id="input-company-location"
                      placeholder="Insert Company Location"
                      ariaLabel="Company Location"
                      value={obj.location}
                      onChange={onChange}
                    />

                    {/* Description */}
                    <InputGroup
                      htmlFor="input-job-description"
                      labelText="Job Description"
                      type="text"
                      name="description"
                      id="input-job-description"
                      placeholder="Input Job Description"
                      ariaLabel="Job Description"
                      value={obj.location}
                      onChange={onChange}
                    />

                    <div className="degree-control-buttons">
                      <ButtonNormal
                        btnText="Clear fields"
                        onClick={() => {clearExperience(obj.id)}}
                      />
                      <ButtonNormal
                        btnText="Remove"
                        onClick={() => {removeExperience(obj.id)}}
                        className="remove-btn"
                      />
                    </div>
                  </>
                )}
              </div>
            </>
          ))}
          <ButtonNormal
            btnText="Add new Experience"
            onClick={addNewExperience}
            className="add-new-btn"
          />
        </>
      )}
    </form>
  )
}

export default Experience