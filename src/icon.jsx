import React from "react"

function Icon({path, alt, className}) {
  return (
    <div className={className}>
      <img src={path} alt={alt} className="icon-light"/>
    </div>
  )
}

export default Icon