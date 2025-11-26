import React from 'react'
import cl from "./History.module.css"
import { useTranslation } from 'react-i18next';

function History() {
     const { t } = useTranslation();
  return (
    <main className={cl.history}>
        <div className={cl.history_heading}>
                <h1>{t("history.heading1")} <br/> {t("history.heading2")}</h1>
                <img src="src/assets/icons/su.svg" alt="" />
        </div>
        <ul className={cl.history_list}>
            <li className={cl.history_item}>
                <div className={cl.history_item_heading}>
                    <h2>{t("history.history_paragraph1.h")}</h2>
                    <div>1</div>
                </div>
                <p>{t("history.history_paragraph1.p1")}</p>
                <p>{t("history.history_paragraph1.p2")}</p>
            </li>
            <li className={cl.history_item}>
                <div className={cl.history_item_heading}>
                    <h2>{t("history.history_paragraph2.h")}</h2>
                    <div>2</div>
                </div>
                <p>{t("history.history_paragraph2.p1")}</p>
                <p>{t("history.history_paragraph2.p2")}</p>
            </li>
            <li className={cl.history_item}>
                <div className={cl.history_item_heading}>
                    <h2>{t("history.history_paragraph3.h")}</h2>
                    <div>3</div>
                </div>
                    <p>{t("history.history_paragraph3.p1")}</p>
                    <p>{t("history.history_paragraph3.p2")}</p>
            </li>
        </ul>
    </main>
  )
}

export default History
