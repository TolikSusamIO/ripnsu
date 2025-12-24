import React, { useState } from 'react'
import cl from "./Contacts.module.css"
import ReCAPTCHA from 'react-google-recaptcha'
import toast from 'react-hot-toast'
import { useTranslation } from 'react-i18next';
import ContactsService from '../../API/ContactsService/ContactsService';

function Contacts() {
  const { t } = useTranslation();
  const captchaRef = React.createRef()
  const [contactForm, setContactForm] = useState({email: "", theme: "", message: "", captcha: false})
  const [inputRequired, setInputRequired] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  async function createMessage (event) {
    event.preventDefault();
    setInputRequired(true);
      try{
        for (let i in contactForm) {
          if (!contactForm[i]) throw new Error("Все поля должны быть заполнены и пройдена проверка CAPTCHA");
        }
        if (contactForm.message.length > 2000) throw new Error("Ваше сообшение слишком большое")
        await ContactsService.createMessage(contactForm.email, contactForm.theme, contactForm.message)
          toast("Вопрос отправлен",
                  {
                      duration: 2000,
                      style: {
                          backgroundColor: "#fffff",
                          padding: '26px',
                          fontSize: "22px",
                          fontWeight: "600",
                          width: "500px"
                        },
                    })
        setContactForm({email: "", theme: "", message: "", captcha: false})
        setInputRequired(false);
        setErrorMessage(false)
        captchaRef.current.reset()
        
      }
      catch (error){
        if(error.message) setErrorMessage(error.message)
      }
            
  }
  return (
    <main className={cl.contacts}>
      <div className={cl.contacts_form_container}>
        <h1>{t("contacts.heading")}</h1>
        <form action="">
            <input  type="email"
                    placeholder={t("contacts.email")}
                    required={inputRequired} 
                    value={contactForm.email} 
                    onChange={e => setContactForm({...contactForm, email: e.target.value})}/>
            <input 
                    type="text" 
                    placeholder={t("contacts.theme")}
                    required={inputRequired} 
                    value={contactForm.theme} 
                    onChange={e => setContactForm({...contactForm, theme: e.target.value})}/>
            <textarea type="text"
                      placeholder={t("contacts.message")}
                      required={inputRequired} 
                      value={contactForm.message} 
                      onChange={e => setContactForm({...contactForm, message: e.target.value})}/>
            <ReCAPTCHA ref={captchaRef} sitekey='6LcMCREsAAAAAGB2r3LfIhJSYWsohjpHJierLoWP' onChange={() => setContactForm({...contactForm, captcha: true})}/>
            <p className={cl.error}>{errorMessage}</p>
            <button onClick={createMessage}>{t("contacts.button")}</button>
        </form>
      </div>
      <div className={cl.contacts_image}  alt="" />
    </main>
  )
}

export default Contacts
