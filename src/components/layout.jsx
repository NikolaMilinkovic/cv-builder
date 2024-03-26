import { useState } from "react"
import "../styles/displayCV.css"
import "../styles/experience.css"
import "react-datepicker/dist/react-datepicker.css";
import classNames from "classnames";
import { Sketch } from "@uiw/react-color";
import { v4 as uuid } from "uuid";

function Layout({
  onChange, 
}) {
  let root = document.documentElement;

  // Layout
  function ButtonLayout({btnText="", onClick, id="", className="", classVisual=""}){
    return (  
      <> 
        <button id={id} onClick={onClick} className={className}>
          <div className={classVisual}></div>
          {btnText}
        </button>
      </> 
    )
  }
  function changeLayout(targetId){
    switch(targetId){
    case "layout-top":
      root.style.setProperty("--template-columns", "1fr");
      root.style.setProperty("--template-columns-header", "0.5fr 1fr");
      root.style.setProperty("--header-container-direction", "row");
      root.style.setProperty("--header-contact-columns", "1fr 1fr 1fr");
      root.style.setProperty("--img-margin-top", "0vh");
      root.style.setProperty("--children-order", "0");
      root.style.setProperty("--img-name-margins", "auto");
      root.style.setProperty("--cv-display-bottom-padding", "3rem");
      
      break;
    case "layout-left":
      root.style.setProperty("--template-columns", "0.5fr 1fr");
      root.style.setProperty("--template-columns-header", "1fr");
      root.style.setProperty("--header-container-direction", "column");
      root.style.setProperty("--header-contact-columns", "1fr");
      root.style.setProperty("--img-margin-top", "5vh");
      root.style.setProperty("--children-order", "0");
      root.style.setProperty("--img-name-margins", "0 0 auto 0");
      root.style.setProperty("--cv-display-bottom-padding", "0px");

      break;
    case "layout-right":
      root.style.setProperty("--template-columns", "1fr 0.5fr");
      root.style.setProperty("--template-columns-header", "1fr");
      root.style.setProperty("--header-container-direction", "column");
      root.style.setProperty("--header-contact-columns", "1fr");
      root.style.setProperty("--img-margin-top", "5vh");
      root.style.setProperty("--children-order", "1");
      root.style.setProperty("--img-name-margins", "0 0 auto 0");
      root.style.setProperty("--cv-display-bottom-padding", "0px");
      
      break;
    }
  }
  // \Layout

  // Color picker
  function ColorPicker({property, state, labelText}) {
    const [hex, setHex] = useState(state);
    return (
      <div className="picker-wrapper">
        <label>{labelText}</label>
        <Sketch
          style={{ marginLeft: 20 }}
          color={hex}
          onChange={(color) => {
            setHex(color.hex);
            root.style.setProperty(property, `${hex}`);
          }}
          className="color-picker-wheel"
        />
      </div>
    );
  }
  
  // Font picker
  const fonts =[["Inter","Inter, system-ui, Avenir, Helvetica, Arial, sans-serif"],["Helvetica","Helvetica, sans-serif"],["Times New Roman","\"Times New Roman\", serif"],["Georgia","Georgia, serif"],["Courier New","\"Courier New\", monospace"],["Verdana","Verdana, sans-serif"]];
  const [activeFont, setActiveFont] = useState("Inter");

  function FontBtn({font="", onClick, btnText, name}){
    const btnClass = classNames("theme-option-btn", { "active": activeFont === name});
    return (
      <button className={btnClass} data-font={font} onClick={onClick} style={{fontFamily: font}}>
        <p style={{fontFamily: font, fontSize: 18, fontWeight: 600}}>Aa</p>
        {btnText}
      </button>
    )
  }
  function setFont(font, fontName){
    root.style.setProperty("--font-family", font);
    setActiveFont(fontName)
  }

  // Icon theme picker
  const [iconTheme, setIconTheme] = useState("dark");
  function changeIconTheme(theme){
    document.documentElement.style.setProperty("--invert-value", theme === "light" ? "0%" : "100%")
    document.documentElement.style.setProperty("--invert-value-reverse", theme === "light" ? "100%" : "0%")
    setIconTheme(theme);
  }
  function ButtonNormal({btnText="", onClick, id="", name = ""}){
    const btnClass = classNames("theme-option-btn", { "active": iconTheme === name});
    return <button name={name} id={id} onClick={onClick} className={btnClass}>{btnText}</button>
  }

  return (
    <>
      <div className="layout-section">
        <h1>Layout</h1>
        <div>
          <ButtonLayout
            id="layout-top"
            btnText="Top"
            className="btn-layout"
            classVisual="top-visual"
            onClick={() => changeLayout("layout-top")}
          />
          <ButtonLayout
            id="layout-left"
            btnText="Left"
            className="btn-layout"
            classVisual="left-visual"
            onClick={() => changeLayout("layout-left")}
          />
          <ButtonLayout
            id="layout-right"
            btnText="Right"
            className="btn-layout"
            classVisual="right-visual"
            onClick={() => changeLayout("layout-right")}
          />
        </div>
      </div>
      <div>
        <h1>Colors</h1>
        <div id='color-pickers-container'>
          <ColorPicker
            property="--highlight-color"
            state="#0E374E"
            labelText="Accent color"
          />
          <ColorPicker
            property="--background-color"
            state="FFFFFF"
            labelText="Background color"
          />
        </div>
      </div>
      <div>
        <h1>Fonts</h1>
        <div id='font-pickers-container'>
          {fonts.map((font) => {
            return (
              <FontBtn
                key={uuid()}
                font = {font[1]}
                onClick = {() => setFont(font[1], font[0])}
                btnText = {font[0]}
                name = {font[0]}
              />
            )
          })}
        </div>
      </div>
      <div>
        <h1>Icon themes</h1>
        <div className="icon-themes-controls">
          <ButtonNormal
            btnText="Dark Theme"
            onClick={() => changeIconTheme("dark")}
            name="dark"
          />
          <ButtonNormal
            btnText="Light Theme"
            onClick={() => changeIconTheme("light")}
            name="light"
          />
        </div>
      </div>
    </>
  )
}

export default Layout