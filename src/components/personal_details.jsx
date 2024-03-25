import { useState } from "react"
import "../styles/personal_details.css"
import InputGroup from "../input_group"

function PersonalDetails({personalInfo, onChange, handleUserImg}) {
  const [show, setShow] = useState(true);
  const {name, email, phone, address} = personalInfo;

  function toggleShow(){
    show === true ? setShow(false) : setShow(true);
  }
  function Button({onClick}){
    return <button className="section-btn" onClick={onClick}><h1>Personal Details</h1></button>
  }
  function InputUserImage({handleUserImg}){
    return <>
      <label htmlFor="input-img">Set you cover photo</label>
      <input id="upload" type="file" onChange={handleUserImg} />
    </>
  }
  
  return (
    <form id="personal-details-container">
      <Button
        onClick = {toggleShow}
      />

      {show === true && (
        <>
          {/* Photo Upload */}
          <InputUserImage
            handleUserImg={handleUserImg}
          />

          {/* Name */}
          <InputGroup
            htmlFor="input-name"
            labelText="Full name"
            type="text"
            name="name"
            id="input-name"
            placeholder="John Doe"
            ariaLabel="Full name"
            value={name}
            onChange={onChange}
          />

          {/* Email */}
          <InputGroup
            htmlFor="input-email"
            labelText="Email"
            type="email"
            name="email"
            id="input-email"
            placeholder="john@gmail.com"
            ariaLabel="Email"
            value={email}
            onChange={onChange}
          />

          {/* Phone Number */}
          <InputGroup
            htmlFor="input-phone"
            labelText="Phone number"
            type="text"
            name="phone"
            id="input-phone"
            placeholder="+381 63 1202 232"
            ariaLabel="Phone Number"
            value={phone}
            onChange={onChange}
          />

          {/* Address */}
          <InputGroup
            htmlFor="input-address"
            labelText="Address"
            type="text"
            name="address"
            id="input-address"
            placeholder="Immaginary street 53"
            ariaLabel="Address"
            value={address}
            onChange={onChange}
          />
        </>
      )}

    </form>
  )
}


export default PersonalDetails
