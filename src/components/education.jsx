// - School
// - Degree
// - Start Date > Date picker
// - End Date > Date picker
// - Location
import { useState } from "react"
import "../styles/displayCV.css"
import "../styles/education.css"
import InputGroup from "../input_group"
import InputDateGroup from "../input_group_date"
import "react-datepicker/dist/react-datepicker.css";

function Education({educationInfo, onChange, onDateChange, degreeShowToggle, removeDegree, addNewDegree, clearDegree}) {
  const [show, setShow] = useState(true);
  // const {school, degree, location, startDate, endDate} = educationInfo;
  // const [startSchoolDate, setStartSchoolDate] = useState(new Date());
  function toggleShow(){
    show === true ? setShow(false) : setShow(true);
    {console.log(show)}
  }
  function Button({onClick}){
    return <button id="input-img" onClick={onClick}><h1>Education</h1></button>
  }
  function ButtonNormal({btnText="", onClick, id="", className=""}){
    return <button id={id} onClick={onClick} className={className}>{btnText}</button>
  }


  function DegreeClearButton(){

  }

  return (
    <form id="education-container">
      <Button
        onClick={toggleShow}
      />

      {show === true && (
        <>
          {educationInfo.map(obj => (
            <>
              <ButtonNormal
                btnText={obj.school}
                onClick={() => {degreeShowToggle(obj.id)}}
                className="btn-degree-show-toggle"
              />
              <div 
                key={obj.id} 
                id={obj.id} 
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
                      />
                    </div>
                  </>
                )}
              </div>
            </>
          ))}
        </>
    
      )}

      <ButtonNormal
        btnText="Add new Degree"
        onClick={addNewDegree}
      />
    </form>
  )
}

export default Education