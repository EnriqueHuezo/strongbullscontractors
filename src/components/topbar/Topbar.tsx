import React, { useEffect, useState } from 'react'
import { Option } from './Option'
import MenuIcon from '@mui/icons-material/Menu'
import { Sidebar } from '../sidebar/Sidebar'
import { ROUTE } from '../../utils/constants/routes'
import shortLogo from '../../assets/short-logo.png'

export const Topbar: React.FC = () => {
    const [sidebarState, setSidebarState] = useState(false)
    const [positionScroll, setPositionScroll] = useState(document.documentElement.scrollTop)
  
    useEffect(() => {
      const handleScroll = (): void => {
        setPositionScroll(document.documentElement.scrollTop)
      }
      window.addEventListener('scroll', handleScroll)
  
      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }, [])
  
    const changeSidebarState = (): void => {
      setSidebarState(!sidebarState)
    }
  
    const overlayAction = sidebarState ? 'right-0' : 'right-[-100%]'
    const scrollAction = positionScroll > 100 ? 'rounded-br-2xl rounded-bl-2xl' : ''
  
    const navbarOptions = [
      {
        name: 'Home',
        path: `${ROUTE.HOME}`
      },
      {
        name: 'About us',
        path: `${ROUTE.ABOUTUS}`
      },
      {
        name: 'Gallery',
        path: `${ROUTE.GALLERY}`
      },
      {
        name: 'Contact us',
        path: `${ROUTE.CONTACT_US}`
      }
    ]
    return (
      <header className={`fixed flex bg-white items-center w-full border-b-2 border-terciary-50  ${scrollAction} transition duration-200 z-[1]`}>
          <div className='py-8 px-4 sm:px-0 w-full mx-auto container'>
            <nav className='flex flex-row justify-between items-center'>
                <div className='flex items-center justify-center'>
                  <img src={shortLogo} alt='logo' className='h-8'/>
                </div>
                <Option props={navbarOptions} />
                <div className='md:hidden flex-row gap-4'>
                  <div className='flex items-center rounded-md p-1 shadow-md
                  transition duration-300'
                  onClick={changeSidebarState}>
                    <MenuIcon className='text-primary-800 cursor-pointer'
                    fontSize='large'/>
                  </div>
                </div>
                <div className={`fixed top-0 b right-0 w-full h-dvh bg-black/70 ${overlayAction}
                transition-all duration-300 ease-in-out`}
                onClick={changeSidebarState}></div>
                <Sidebar props={{ state: sidebarState, callback: changeSidebarState }} />
            </nav>
          </div>
      </header>
    )
  }
  