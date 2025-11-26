import { useState } from 'react'
import LangButton from '../LangButton/LangButton'
import cl from "./langWheel.module.css"
import { useTranslation } from 'react-i18next';

function LangWheel({setBackground, langText, setLangText}) {
  const { t } = useTranslation();
  const [hoverButton, setHoverButton] = useState(0)
  const [currentAngle, setCurrentAngle] = useState(0)
  const [circleRotation, setCircleRotation] = useState({transform: `rotate(${currentAngle}deg)`})

  function rotateToIndex(targetIndex) {
    if (targetIndex == hoverButton) {
      return;
    }
    let delta = (targetIndex - hoverButton + 11) % 11
    if (delta > 11 / 2) {
      delta -= 11
    }
    const newAngle = currentAngle + delta * 360 / 11
    setCircleRotation({transform: `rotate(${newAngle}deg)`})
    setCurrentAngle(newAngle)
    setHoverButton(targetIndex)
  }

  function isActive(lang) {
    if (langText == lang) return "active"
    else return "lang_key"
  }

  const onMouseEnterHandle = (index, langLetters) => {
    rotateToIndex(index)
    const findLang = langButtons.find((item) => item.langLetters == langLetters).background
    setBackground(findLang)
  }


  const langButtons = [
    {langName: t("main.GR.heading"), langLetters:"GR", background: "src/assets/img/greece.jpg"},
    {langName: t("main.HI.heading"), langLetters:"HI", background: "src/assets/img/india.jpg"},
    {langName: t("main.CHI.heading"), langLetters:"CHI", background: "src/assets/img/china.jpg"},
    {langName: t("main.THA.heading"), langLetters:"THA", background: "src/assets/img/thai.jpg"},
    {langName: t("main.KOR.heading"), langLetters:"KOR", background: "src/assets/img/korea.jpg"},
    {langName: t("main.LA.heading"), langLetters:"LA", background: "src/assets/img/latin.jpg"},
    {langName: t("main.RUS.heading"), langLetters:"RUS", background: "src/assets/img/russian.jpg"},
    {langName: t("main.ARM.heading"), langLetters:"ARM", background: "src/assets/img/armenia.jpeg"},
    {langName: t("main.GE.heading"), langLetters:"GE", background: "src/assets/img/georgia.jpg"},
    {langName: t("main.ISR.heading"), langLetters:"ISR", background: "src/assets/img/israel.jpg"},
    {langName: t("main.ARB.heading"), langLetters:"ARB", background: "src/assets/img/arabic.jpg"},
  ]

  return (
    <div className={cl.wheel}>
      <img src="src/assets/icons/wheelBackground.svg" alt="" className={cl.wheel_background}/>
      <div className={cl.wheel_buttons}>
        {langButtons.map((button, index) => 
          <LangButton 
          key={button.langLetters} 
          langName={button.langName} 
          langLetters={button.langLetters} 
          num={index} 
          onMouseEnter={() => onMouseEnterHandle(index, button.langLetters)}
          onClick={() => setLangText(button.langLetters)}
          isActive={isActive}
          />
        )}
      </div>
      <div className={cl.wheel_logo}>
        <img src="src/assets/icons/wheelCircle.svg" alt="Колесо" className={cl.wheel_circle} style={circleRotation}/>
        <img src="src/assets/icons/wheelLogo.svg" alt="Логотип" className={cl.wheel_su}/>
      </div>
    </div>
  )
}

export default LangWheel
