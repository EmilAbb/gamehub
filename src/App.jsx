
import './App.css'
import { ThemeContext } from './Context/ThemeContext'
import Home from './Pages/Home'
import Header from './components/Header'
import { useEffect, useState } from 'react'

function App() {
  const [theme,setTheme] = useState('light')

  useEffect(()=>{
  setTheme(localStorage.getItem('theme'))
  },[])

  return (

    <ThemeContext.Provider  value={{theme,setTheme}}>
   <div className={`${theme} 
   ${theme == 'dark'?'bg-[#121212]':null} min-h-[100vh]`}>
    <Header/>
    <Home/>
   </div>
   </ThemeContext.Provider>
  )
}

export default App
