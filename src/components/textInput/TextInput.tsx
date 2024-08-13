import { useState } from 'react'

interface TextInputProps {
    label: string;
    value: string;
    onChange: ((e: React.ChangeEvent<HTMLInputElement>) => void) | ((e: React.ChangeEvent<HTMLTextAreaElement>) => void);
    type: "input" | "textarea"; 
}

export const TextInput: React.FC<TextInputProps> = ({ label, value, onChange, type }) => {
    const [isFocused, setIsFocused] = useState(false)

    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    const renderInput = () => {
        switch (type) {
            case "input":
                return (
                    <input
                        className={`font-text border bg-transparent z-[2] rounded-md py-2 px-4 outline-none transition-all ease-linear ${isActive}`}
                        value={value}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={onChange as (e: React.ChangeEvent<HTMLInputElement>) => void}
                    />
                )
            case "textarea":
                return (
                    <textarea
                        className={`font-text border resize-none bg-transparent z-[2] rounded-md py-2 px-4 outline-none transition-all ease-linear ${isActive}`}
                        value={value}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={onChange as (e: React.ChangeEvent<HTMLTextAreaElement>) => void}
                    />
                )
        }
    }

    const isActive = isFocused ? "border-red-600" : "border-gray-300"
    const isLabelActive = isFocused ? "!text-red-600 translate-y-[-0.85rem] z-[3]" : "text-gray-400"
    const isValueActive = value != "" ? "!text-red-600 translate-y-[-0.85rem] z-[3]" : ""

    return (
        <div className="flex flex-col w-full">
            <label className={`text-gray-400 font-text bg-white absolute translate-x-4 translate-y-2 z-[1] transition-all ease-linear ${isLabelActive} ${isValueActive}`}>{label}</label>
            {renderInput()}
        </div>
    )
}