import { useState } from "react"
import "../styles/displayCV.css"
import "../styles/experience.css"
import InputGroup from "../input_group"
import InputDateGroup from "../input_group_date"
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuid } from "uuid";

function Layout({
  onChange, 
}) {

  function ButtonNormal({btnText="", onClick, id="", className=""}){
    return <button id={id} onClick={onClick} className={className}>{btnText}</button>
  }

  return (
    <h1>Test</h1>
  )
}

export default Layout