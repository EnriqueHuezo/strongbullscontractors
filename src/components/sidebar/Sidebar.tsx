import { useState, useEffect } from 'react'
import { OptionSideBar } from './OptionSidebar'
import CloseIcon from '@mui/icons-material/Close'
import HomeIcon from '@mui/icons-material/Home'
import AccessibilityIcon from '@mui/icons-material/Accessibility'
import ContactMailIcon from '@mui/icons-material/ContactMail'
import { ROUTE } from '../../utils/constants/routes'

interface SidebarProps {
  state: boolean
  callback: () => void
}

export const Sidebar: React.FC<{ props: SidebarProps }> = ({ props }) => {
  const [sidebarState, setSidebarState] = useState(props.state)

  useEffect(() => {
    if (sidebarState) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [sidebarState]);

  useEffect(() => {
    setSidebarState(props.state)
  }, [props.state])

  const onClickCloseSidebar = (): void => {
    setSidebarState(!sidebarState)
    props.callback()
  }

  const sidebarOptions = [
    {
      name: 'Home',
      path: `${ROUTE.HOME}`,
      icon: HomeIcon
    },
    {
      name: 'About us',
      path: `${ROUTE.ABOUTUS}`,
      icon: HomeIcon
    },
    {
      name: 'Gallery',
      path: `${ROUTE.GALLERY}`,
      icon: AccessibilityIcon
    },
    {
      name: 'Contact us',
      path: `${ROUTE.CONTACT_US}`,
      icon: ContactMailIcon
    }
  ]

  const closeSidebar = sidebarState ? 'right-0' : 'right-[-350px]'

  return (
    <div className={`fixed ${closeSidebar} font-proyect bg-primary-800 w-[300px] top-0 right-0 z-10 h-dvh rounded-s-2xl shadow-2xl
     transition-all duration-500 ease-in-out pt-4`}>
        <div className='mx-4 text-white inline-block rounded-md hover:text-primary-800 hover:bg-white
            transition duration-300 cursor-pointer'>
            <CloseIcon fontSize='large' onClick={onClickCloseSidebar}/>
        </div>
        <nav className='p-3'>
            <OptionSideBar props={sidebarOptions} action={onClickCloseSidebar} />
        </nav>
    </div>
  )
}
