import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/UI/Header/Header'
import AppRouter from './components/AppRouter'
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
    <BrowserRouter>
        <Header/>
        <div className='content_container'>
          <AppRouter/>
        </div>
    </BrowserRouter>
    <Toaster
            position="bottom-right"
            reverseOrder={false}/>
    </>
  )
}

export default App
