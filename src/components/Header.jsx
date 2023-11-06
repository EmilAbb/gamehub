import logo from './../assets/Images/logo.png'
import {BiSearch} from 'react-icons/bi'
import {BsMoonFill} from 'react-icons/bs'
import {BsFillSunFill} from 'react-icons/bs'
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const Header = () => {
    const [toggle,setToggle] = useState(true)
    const {theme,setTheme} = useContext(ThemeContext)

    // useEffect(()=>{
    // console.log(theme);
    // },[])
  return (
    <div className='w-full custom-container flex items-center justify-between'>
      <img src={logo} width={80} height={80} />
      <div className='flex bg-slate-200 py-2 w-[80%] rounded-full items-center px-4 '>
      <BiSearch className='text-[18px]'/>
        <input  className='bg-transparent px-2  outline-none w-full' placeholder='Search Games'  type="text"/>
      </div>
      <div className='w-[40px] h-[40px] rounded-full flex items-center justify-center bg-slate-200 cursor-pointer ml-2'>

       {theme == 'light' ? <BsMoonFill onClick={() => {setTheme('dark');localStorage.setItem('theme','dark')}} className='text-[26px]'/> : 
       <BsFillSunFill className='text-[26px]' onClick={() => {setTheme('light');localStorage.setItem('theme','light')}}/> }
      </div>
    </div>
  )
}

export default Header
