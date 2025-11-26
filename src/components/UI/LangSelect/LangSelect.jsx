import React from 'react'
import cl from "./LangSelect.module.css"
import { useTranslation } from 'react-i18next'
import "../../../i18n/i18n"

function LangSelect() {
    const { i18n } = useTranslation()
    const languages = Object.keys(i18n.options.resources)
    function changeLanguage(e) {
        console.log(i18n.languages)
        i18n.changeLanguage(e.target.lang)
    } 

  return (
    <div className={cl.language}>
      <div className={cl.current_language}>{i18n.language}</div>
      <ul className={cl.language_list}>
        {languages.map((lang) =>
            <li className={cl.language_item} lang={lang} key={lang} onClick={(e) => changeLanguage(e)}>{lang}</li>
        )}
      </ul>
    </div>
  )
}

export default LangSelect
