import { useState } from "react"
import classNames from "classnames";
import "../styles/layout_selectors.css";

function ContentControls({onClick, active, onClickClear}) {

  function ControlButton({onClick, text, name, onClickClear}){
    const btnClass = classNames("option-btn", { "active": active === name});
    
    return <button onClick={onClick} name={name} className={btnClass}>{text} </button>
  }

  return (
    <div className="main-input-sections-controls">
      <ControlButton onClick={onClick} text="Input" name="input"/>
      <ControlButton onClick={onClick} text="Layout" name="layout"/>
    </div>
  )
}

export default ContentControls
