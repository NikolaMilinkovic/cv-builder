import { useState } from "react"
import "../styles/personal_details.css"
import InputGroup from "../input_group"

function PersonalDetails({name, email, phone, address, onChange}) {
    
  function Form(){
    return (
      <form id="personal-details-container">
        <h1>Personal Details</h1>

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
      </form>
    )
  }


  return (
    <>
      <Form/>
    </>
  )
}

export default PersonalDetails
