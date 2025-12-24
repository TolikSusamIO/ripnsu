import React, { useState } from 'react'
import cl from "./Specialists.module.css"
import SpecialistsButton from '../../components/UI/SpecialistsButton/SpecialistsButton'
import SimpleBar from 'simplebar-react'
import 'simplebar-react/dist/simplebar.min.css';
import {  useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Specialists() {
  const { t } = useTranslation();
  const [params] = useSearchParams()
  const [currentText, setCurrentText] = useState(params.get("file") || "documentation")
  function isActive(text) {
    if(currentText === text) return "specialists_item_button active"
    return "specialists_item_button"
  }
  return (
    <main className={cl.specialists}>
        <h1>{t("specialists.heading")}</h1>
        <div className={cl.specialists_container}>
          <ul className={cl.specialists_list}>
            <li className={cl.specialists_item}>
              <h2>{t("specialists.documentation.heading")}</h2>
              <div>
                <p>{t("specialists.documentation.description")}</p>
                <SpecialistsButton isActive={isActive} setCurrentText={setCurrentText} text="documentation"/>
              </div>
            </li>
            <li className={cl.specialists_item}>
              <h2>{t("specialists.statistics.heading")}</h2>
              <div>
                <p>{t("specialists.statistics.description")}</p>
                <SpecialistsButton isActive={isActive} setCurrentText={setCurrentText} text="statistics"/>
              </div>
            </li>
            <li className={cl.specialists_item}>
              <h2>{t("specialists.registars_list.heading")}</h2>
              <div>
                <p>{t("specialists.registars_list.description")}</p>
                <SpecialistsButton isActive={isActive} setCurrentText={setCurrentText} text="registars_list"/>
              </div>
            </li>
          </ul>
          {currentText != "none" &&
            <div className={cl.specialists_text}>
              <SimpleBar scrollbarMaxSize={40} autoHide={false} className={cl.scroll}>
                <div className={cl.text_heading}>
                  <h2>{t("specialists." + currentText + ".heading")}</h2>
                  <img src="/assets/icons/close-black.svg" onClick={() => setCurrentText("none")}/>
                </div>
                <p>{t("specialists." + currentText + ".text")}</p>
              </SimpleBar>
            </div> 
          }
        </div>
    </main>
  )
}

export default Specialists
