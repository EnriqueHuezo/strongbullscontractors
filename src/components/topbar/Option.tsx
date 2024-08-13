import { Link } from 'react-router-dom'

interface OptionProps {
  name: string
  path: string
}

type Props = OptionProps[]

export const Option: React.FC<{ props: Props }> = ({ props }) => {
  return (
    <ul className='flex-row gap-8 hidden md:flex'>
        { props.map((option, index) => {
          return (
            <li key={index}>
                <Link className='text-black font-text relative group' to={option.path}>
                    <span className='inline-block font-bold uppercase text-sm '>{option.name}</span>
                    <span className='absolute bottom-[-5px] left-0 w-full h-[2px] bg-primary-800 transition duration-300 scale-x-0 group-hover:scale-x-100 origin-left'></span>
                </Link>
            </li>
          )
        })}
    </ul>
  )
}