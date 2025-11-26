import React, { useState } from 'react'
import cl from "./Search.module.css"
import { useTranslation } from 'react-i18next';

function Search({className}) {
    const { t, i18n } = useTranslation();
    const [search, setSearch] = useState("")
      const onSumbitHandle = (event) => {
        event.preventDefault();
        if(!search) return
        if(i18n.language == "rus") {
            window.location.href = `https://beget.com/ru/domains/search/${search}.su`
        }
        else {
            window.location.href = `https://beget.com/en/domains/search/${search}.su`
        }
      }
  return (
    <form onSubmit={onSumbitHandle} className={className}>
              <input 
                className={cl.search_input}
                type="text" 
                placeholder={t("header.search")} 
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
              <button  className={cl.search_button} type="submit">
                <img alt='Кнопка поиска' src="src/assets/icons/search.svg" />
              </button>
            </form>
  )
}

export default Search
