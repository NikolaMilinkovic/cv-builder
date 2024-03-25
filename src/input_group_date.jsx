import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// Method for creating Label+DateInput Field
function InputDateGroup({htmlFor, labelText, selectedDate, name, id, ariaLabel, onChange, parentId}){
  return (
    <>
      <label htmlFor={htmlFor}>{labelText}</label>
      <DatePicker 
        id={id}
        name={name}
        aria-label={ariaLabel}
        selected={selectedDate} 
        onChange={(date) => onChange(name, date, parentId)} 
      />
    </>
  )
}
  
export default InputDateGroup