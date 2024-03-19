// Method for creating Label+Input Field
function InputGroup({htmlFor, labelText, type, name, id, placeholder, ariaLabel, value, onChange}){
  return (
    <>
      <label htmlFor={htmlFor}>{labelText}</label>
      <input type={type} name={name} id={id} placeholder={placeholder} aria-label={ariaLabel} value={value} onChange={onChange}/>
    </>
  )
}

export default InputGroup