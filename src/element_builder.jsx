// Methode for customized button creation
export function Button({htmlFor="", labelText = "", name="", id="", onClick, btnText="",classList}){
  return (
    <>
      {htmlFor && <label htmlFor={htmlFor}>{labelText}</label>}
      <button 
        name={name} 
        id={id} 
        onChange={onClick}
        className={classList}

      >
        {btnText}
      </button>
    </>
  )
}
  