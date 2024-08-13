import React from "react"

interface BadgeProps {
    label: string;
}

export const Badge: React.FC<{ props: BadgeProps }> = ({ props }) => {
    return (
        <div className="px-4 py-2 bg-secondary-800 rounded-full">
            <p className="font-text text-white text-md">{ props.label }</p>
        </div>
    )
}