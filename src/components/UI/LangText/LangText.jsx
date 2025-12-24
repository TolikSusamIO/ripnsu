import React from 'react'
import cl from "./LangText.module.css"
import AdventagesCircle from '../AdventagesCircle/AdventagesCircle'
import { Trans, useTranslation } from 'react-i18next';

function LangText({langText}) {
    const { t } = useTranslation();
  return (
    <div>
    {langText !== "main" && 
        <div className={cl.lang_text}>
            <div className={cl.lang_text_main}>
                <h1>{t("main." + langText + ".heading")}</h1>
                <p>{t("main." + langText + ".p1")}</p>
            </div>
            <div className={cl.circle_text_wrap}>
                <p>{t("main." + langText + ".p2")}</p>
                <div>
                    <img className={cl.circle} src={t("main." + langText + ".circle")}></img>
                </div>
            </div>
        </div>
    }
    {langText === "main" &&
     <div className={cl.main_text_container}>
            <h1>
                <Trans
                    i18nKey="main.main.heading"
                    components={{
                        bold: <span/>,
                        br: <br/>
                    }}/>
            </h1>
            <ul className={cl.main_sub_headings}>
                <li>
                    <div className={cl.su_container}>
                        <h2>
                            <Trans
                                i18nKey="main.main.sub_heading1.h"
                                components={{
                                    br: <br/>
                                }}/>
                        </h2>
                        <img className={cl.su} src="/assets/icons/su.svg" alt=".su" />
                    </div>
                    <p>
                        <Trans
                        i18nKey="main.main.sub_heading1.p"
                        components={{
                        bold: <span/>,
                        br: <br/>,
                        red: <span className={cl.red_text}/>
                    }}/>
                    </p>
                </li>
                <li>
                    <h2>
                        <Trans
                        i18nKey="main.main.sub_heading2.h"
                        components={{
                            bold: <span/>,
                            br: <br/>
                        }}/>
                    </h2>
                    <p>
                        <Trans
                        i18nKey="main.main.sub_heading2.p"
                        components={{
                            bold: <span/>,
                            br: <br/>
                        }}/>
                    </p>
                    <p><Trans
                        i18nKey="main.main.sub_heading2.p2"
                        components={{
                            bold: <span/>,
                            br: <br/>
                        }}/>
                    </p>
                </li>
            </ul>
            <ul className={cl.advantages_list}>
                <AdventagesCircle>
                    <h3>{t("main.main.advantages1.h")}</h3>
                    <p>{t("main.main.advantages1.p")}</p>
                </AdventagesCircle>
                <AdventagesCircle>
                    <h3>{t("main.main.advantages2.h")}</h3>
                    <p>{t("main.main.advantages2.p")}</p>
                </AdventagesCircle>
                <AdventagesCircle>
                    <h3>{t("main.main.advantages3.h")}</h3>
                    <p>{t("main.main.advantages3.p")}</p>
                </AdventagesCircle>
            </ul>
        </div>
}
    </div>
  )
}

export default LangText
