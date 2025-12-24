
import cl from "./Main.module.css"
import LangWheel from '../../components/UI/LangWheel/LangWheel'
import { useState } from "react"
import LangText from "../../components/UI/LangText/LangText"

function Main() {
    const [background, setBackground] = useState("main-Gray")
    const [langText, setLangText] = useState('main')
    function backgroundStyle(lang) {
      if(lang == background){
        return cl.main_background
      }
      else {
        return cl.unactive_background
      }
    }
  return (
    <main className={cl.main}>
        <div>
          <img className={backgroundStyle("main-Gray")} src={"/assets/img/main-Gray.jpg"}/>
          <img className={backgroundStyle("arabic")} src={"/assets/img/arabic.jpg"}/>
          <img className={backgroundStyle("armenia")} src={"/assets/img/armenia.jpeg"}/>
          <img className={backgroundStyle("china")} src={"/assets/img/china.jpg"}/>
          <img className={backgroundStyle("contacts")} src={"/assets/img/contacts.jpg"}/>
          <img className={backgroundStyle("georgia")} src={"/assets/img/georgia.jpg"}/>
          <img className={backgroundStyle("greece")} src={"/assets/img/greece.jpg"}/>
          <img className={backgroundStyle("india")} src={"/assets/img/india.jpg"}/>
          <img className={backgroundStyle("israel")} src={"/assets/img/israel.jpg"}/>
          <img className={backgroundStyle("korea")} src={"/assets/img/korea.jpg"}/>
          <img className={backgroundStyle("latin")} src={"/assets/img/latin.jpg"}/>
          <img className={backgroundStyle("russian")} src={"/assets/img/russian.jpg"}/>
          <img className={backgroundStyle("thai")} src={"/assets/img/thai.jpg"}/>
        </div>
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
