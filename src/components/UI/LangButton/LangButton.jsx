import "./LangButton.css"

function LangButton({langName, langLetters, num, onMouseEnter, onClick, isActive}) {
  let radius = "140px"
  let direction = {top: "-15px"}
  if (num > 8 || num < 4) {
    direction = {top: "55px"}
  }

  if(document.documentElement.clientWidth < 400) {
    radius = "120px"
  }
  
  
  const rotation = {transform: `translate(-50%, -50%) rotate(calc(360deg / 11 * ${num})) translateY(${radius}) rotate(calc(-1 * 360deg / 11 * ${num}))`}
  return (
    <div className="lang_rotation" style={rotation}>
      <div className='lang_button'>
        <h3 className='lang_name' style={direction}>{langName}</h3>
        <div className={isActive(langLetters)} onClick={() => onClick()} onMouseEnter={() => onMouseEnter()}>
          <h3>{langLetters}</h3>
        </div>
      </div>
    </div>
  )
}

export default LangButton
