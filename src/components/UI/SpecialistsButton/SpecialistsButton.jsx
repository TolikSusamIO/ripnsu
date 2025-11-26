import React from 'react'
import "./SpecialistsButton.css"

function SpecialistsButton({text, isActive, setCurrentText}) {
  return (
     <button className={isActive(text)} onClick={() => setCurrentText(text)}>
        <img src="src/assets/icons/specialistsArrow.svg" alt="" />
    </button>
  )
}

export default SpecialistsButton
