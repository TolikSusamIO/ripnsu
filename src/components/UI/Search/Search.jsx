import React, { useState } from 'react'
import cl from "./Search.module.css"
import { useTranslation } from 'react-i18next';

function Search({className}) {
    const { t, i18n } = useTranslation();
    const [search, setSearch] = useState("")
      const onSumbitHandle = (event) => {
        event.preventDefault();
        let currentSearch = search
        if(!search) return
        console.log(search.search(".su"))
        if(search.search(".su")){
          currentSearch = search.split(".")[0]
        }
        if(i18n.language == "rus") {
            window.location.href = `https://beget.com/ru/domains/search/${currentSearch}.su`
        }
        else {
            window.location.href = `https://beget.com/en/domains/search/${currentSearch}.su`
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
                <img alt='Кнопка поиска' src="/assets/icons/search.svg" />
              </button>
            </form>
  )
}

export default Search
