import { Link } from 'react-router-dom'
import type { SvgIconComponent } from '@mui/icons-material'

interface OptionSideBarProps {
  name: string
  path: string
  icon: SvgIconComponent
}

type OptionSideBarAction = () => void
type Props = OptionSideBarProps[]

export const OptionSideBar: React.FC<{ props: Props, action: OptionSideBarAction }> = ({ props, action }) => {
  return (
    <ul>
      {props.map((option, index) => {
        return (
          <li key={index} className='transition duration-100 cursor-pointer px-2
        py-2 rounded-md my-1 hover:bg-white text-white hover:text-primary-800'
          onClick={action}>
            <Link to={option.path}>
              <div className='flex flex-row items-center gap-2 font-subTitle'>
                <div>{<option.icon fontSize='medium'/>}</div>
                <div>{option.name}</div>
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
