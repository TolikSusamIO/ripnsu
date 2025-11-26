import { Navigate, Route, Routes } from 'react-router-dom'
import Main from '../pages/Main/Main'
import History from '../pages/History/History'
import Specialists from '../pages/Specialists/Specialists'
import Contacts from '../pages/Contacts/Contacts'
import Error from '../pages/Error/Error'

function AppRouter() {
  return (
    <Routes>
      <Route path='/' element={<Main />} key="/"/>
      <Route path='/history' element={<History />} key="/history"/>
      <Route path='/contacts' element={<Contacts />} key="/contacts"/>
      <Route path='/specialists' element={<Specialists/>}/>
      <Route path='/error' element={<Error/>} key="/error"/>
      <Route path="*" element={<Navigate to="/error" replace />} key="*"/>
    </Routes>
  )
}

export default AppRouter
