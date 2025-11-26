
import cl from "./Main.module.css"
import LangWheel from '../../components/UI/LangWheel/LangWheel'
import { useState } from "react"
import LangText from "../../components/UI/langText/langText"

function Main() {
    const [background, setBackground] = useState("src/assets/img/main-Gray.jpg")
    const [langText, setLangText] = useState('main')
  return (
    <main className={cl.main}>
        <img className={cl.main_background} src={background}/>
        <div className={cl.wheel_container}>
            <LangWheel setBackground={setBackground} 
            langText={langText} 
            setLangText={setLangText}/>
        </div>
        <div className={cl.lang_text_conteiner}>
            <LangText langText={langText}/>
        </div>
    </main>
  )
}

export default Main
