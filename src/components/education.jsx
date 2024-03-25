import { useState } from "react"
import "../styles/displayCV.css"
import "../styles/education.css"
import InputGroup from "../input_group"
import InputDateGroup from "../input_group_date"
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuid } from "uuid";

function Education({educationInfo, onChange, onDateChange, degreeShowToggle, removeDegree, addNewDegree, clearDegree}) {
  const [showEducation, setShowEducation] = useState(false);
  function toggleShow(){
    showEducation === true ? setShowEducation(false) : setShowEducation(true);
  }
  function Button({onClick}){
    return <button className="section-btn" onClick={onClick}><h1>Education</h1></button>
  }
  function ButtonNormal({btnText="", onClick, id="", className=""}){
    return <button id={id} onClick={onClick} className={className}>{btnText}</button>
  }

  return (
    <form id="education-container">
      <Button
        onClick={toggleShow}
      />

      {showEducation === true && (
        <div className="btn-flex">
          {educationInfo.map(obj => (
            <>
              <ButtonNormal
                btnText={obj.school}
                onClick={() => {degreeShowToggle(obj.id)}}
                className={`btn-degree-show-toggle ${obj.show ? "btn-active" : ""}`}
              />
              <div 
                key={obj.id} 
                id={obj.id} 
                className="education-input-section-display"
              >


                {obj.show && (
                  <>
                    {/* School Name */}
                    <InputGroup
                      htmlFor="input-school"
                      labelText="School name"
                      type="text"
                      name="school"
                      id="input-school"
                      placeholder="Private School for doing nothing"
                      ariaLabel="School name"
                      value={obj.school}
                      onChange={onChange}
                    />

                    {/* Degree */}
                    <InputGroup
                      htmlFor="input-degree"
                      labelText="Degree"
                      type="text"
                      name="degree"
                      id="input-degree"
                      placeholder="Certification for professional bird watching - CPBW"
                      ariaLabel="Degree name"
                      value={obj.degree}
                      onChange={onChange}
                    />

                    {/* htmlFor, labelText, selectedDate, name, id, ariaLabel, onChange */}
                    {/* Start Date */}
                    <InputDateGroup
                      htmlFor="input-start-date"
                      labelText="Start Date"
                      name="startDate"
                      id="input-start-date"
                      ariaLabel="Start Date"
                      selectedDate={obj.startDate}
                      onChange={onDateChange}
                      parentId={obj.id}
                    />

                    {/* End Date */}
                    <InputDateGroup
                      htmlFor="input-end-date"
                      labelText="End Date"
                      name="endDate"
                      id="input-end-date"
                      ariaLabel="End Date"
                      selectedDate={obj.endDate}
                      onChange={onDateChange}
                      parentId={obj.id}
                    />

                    {/* Location */}
                    <InputGroup
                      htmlFor="input-location"
                      labelText="School Location"
                      type="text"
                      name="location"
                      id="input-location"
                      placeholder="Insert School Location"
                      ariaLabel="School Location"
                      value={obj.location}
                      onChange={onChange}
                    />

                    <div className="degree-control-buttons">
                      <ButtonNormal
                        btnText="Clear fields"
                        onClick={() => {clearDegree(obj.id)}}
                      />
                      <ButtonNormal
                        btnText="Remove"
                        onClick={() => {removeDegree(obj.id)}}
                        className="remove-btn"
                      />
                    </div>
                  </>
                )}
              </div>
            </>
          ))}
          <ButtonNormal
            btnText="Add new Degree"
            onClick={addNewDegree}
            className="add-new-btn"
          />
        </div>
      )}
    </form>
  )
}

export default Education