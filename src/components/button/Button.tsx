interface ButtonProps {
    styles?: string,
    onClick: () => void,
    icon?: JSX.Element,
    active?: boolean,
    label: string,
    type: "primary" | "secondary" | "terciary"
}

export const Button: React.FC<{ props: ButtonProps }> = ({ props }) => {
    const typeColor = () => {
        switch (props.type) {
            case "primary":
                return "bg-red-800 hover:bg-red-700"
            case "secondary":
                return "bg-secondary-800 hover:bg-secondary-700"
            case "terciary":
                return "bg-terciary-800 hover:bg-terciary"
        }
    }

    return (
        <button
            className={`${typeColor()} ${props.active ? 'bg-red-700' : ''} text-white py-2 px-4 rounded-md flex 
                flex-row gap-2 items-center  text-xl text-nowrap
                transition duration-150 ease-out font-text ${props.styles}`}
            onClick={ props.onClick }
        >
            { props.label } { props.icon }
        </button>
    )
}