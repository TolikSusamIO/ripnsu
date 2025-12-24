import React, { useState } from 'react'
import cl from "./Header.module.css"
import { Link } from 'react-router-dom'
import LangSelect from '../LangSelect/LangSelect'
import Search from '../Search/Search'
import { useTranslation } from 'react-i18next'
const Header = () => {
   const { t } = useTranslation();
  const [visible, setVisible] = useState(false)
  const rootClasses = [cl.burger_menu]
   if (visible) {
        rootClasses.push(cl.active);
    }
  return (
    <header>
      <div className={cl.header}>
        <div className={cl.mobile_burger_button}>☰</div>
        <Link reloadDocument to=""><img className={cl.logo} src="/assets/icons/logo.svg" alt="Логотип"/></Link>
        <div className={cl.header_actions}>
          <nav className={cl.nav}>
              <Link className={cl.nav_link} reloadDocument to="">{t("header.main")}</Link>
              <Link className={cl.nav_link} to="/history">{t("header.history")}</Link>
              <div className={cl.specialist_link}>
                <Link className={cl.nav_link} to="/specialists">{t("header.specialist")}</Link>
                <img src="/assets/icons/arrow.svg" alt="Выдвижное меню" />
                <ul className={cl.specialist_burger}>
                  <li><Link to="/specialists?file=documentation" reloadDocument className={cl.specialist_burger_link}>{t("specialists.documentation.heading")}</Link></li>
                  <li><Link to="/specialists?file=statistics" reloadDocument className={cl.specialist_burger_link}>{t("specialists.statistics.heading")}</Link></li>
                  <li><Link to="/specialists?file=registars_list" reloadDocument className={cl.specialist_burger_link}>{t("specialists.registars_list.heading")}</Link></li>
                </ul>
              </div>
              <Link className={cl.nav_link} to="/contacts">{t("header.contacts")}</Link>
          </nav>
          <Search className={cl.search}/>
          <LangSelect/>
          {visible ?
                    <button className={cl.tablet_burger_button} onClick={() => setVisible(false)}>
                        <img src="/assets/icons/close.svg" alt="" />
                    </button> :
                    <button className={cl.tablet_burger_button} onClick={() => setVisible(true)}>
                        ☰
                    </button>
                }
        </div>
      </div>
      <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
        <div>
          <nav className={cl.burger_nav}>
            <Link className={cl.nav_link} reloadDocument to="">{t("header.main")}</Link>
            <Link className={cl.nav_link} to="/history">{t("header.history")}</Link>
            <Link className={cl.nav_link} reloadDocument to="/specialists?file=none">{t("header.specialist")}</Link>
            <Link className={cl.nav_link} to="/contacts">{t("header.contacts")}</Link>
          </nav>
        </div>
      </div>
      <div className={cl.mobile_search_wrap}>
        <Search className={cl.mobile_search}/>
      </div>
    </header>
  )
}

export default Header
